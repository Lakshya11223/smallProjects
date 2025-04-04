import User from "../model/user.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import dotenv from 'dotenv';
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser";
dotenv.config();

const registeruser = async (req, res) => {

  // steps to follow:-------------------------------

  // get data
  //validate
  // check if user already exists
  // create a user in database
  //create a verification token
  // save token in database
  // send token as email to user
  // send success status to user---------------------


    // Step 1: Get data from request body
    const { name, email, password } = req.body;
    
    // Step 2: Validate input
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required",
            success: false,
        });
    }

    try {
        // Step 3: Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "You already have an account with this email",
                success: false,
            });
        }

        // Step 4: Create new user
        const user = await User.create({ name, email, password });
        if (!user) {
            return res.status(400).json({
                message: "User registration failed",
                success: false,
            });
        }
       
        // Step 5: Generate verification token
        const token = crypto.randomBytes(32).toString("hex");
        console.log("Generated Token:", token);
        console.log("user",user);
        // Step 6: Save token in user model
        user.verificationToken = token;
        await user.save();

       // send email
       const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_HOST,
        port: Number(process.env.MAILTRAP_PORT), // Ensure port is a number
        secure: false,
        auth: {
          user: process.env.MAILTRAP_USERNAME,
          pass: process.env.MAILTRAP_PASSWORD,
        },
      });
      
      const mailOption = {
        from: process.env.MAILTRAP_SENDEREMAIL,
        to: user.email,
        subject: "Verify your email", 
        text: `Please click on the following link:
        ${process.env.BASE_URL}/api/v1/users/verify/${token}`,
      };
      
      await transporter.sendMail(mailOption);
       
         

        // Step 7: Send success response
        res.status(200).json({
            message: "User registered successfully. Check your email for verification.",
            success: true,
        });

    } catch (error) {
        console.error("Error occurred:", error);
        return res.status(400).json({
            message: "An error occurred during registration",
            error: error.message,
            success: false,
        });
    }
};

const verifyUser = async (req,res)=>
{
    // ------------------------------------
    // steps:
    // 1. get verification token from user url
    // 2. verify that token 
    // 3. set is_verified true
    // 4. remove that token
    // 5. save 
    // 6. return response you are verified
    // --------------------------------------



    // 1. get verification token from user url
    const { token } = req.params;
    console.log(token);
    if (!token) {
      return res.status(400).json({
        message: "Invalid token",
      });
    }
    try {
      console.log("verification started");
  
      const user = await User.findOne({ verificationToken: token });
  
      if (!user) {
        return res.status(400).json({
          message: "Invalid token",
        });
      }
      user.isverified = true;
      user.verificationToken = undefined;
      await user.save();
  
      res.status(200).json({
        message: "User verified successfully",
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        message: "User not verified",
        error,
        success: false,
      });
    }
  };
const login = async (req,res)=>{

    const {email,password} = req.body;
    if(!email || !password){
        res.status(400).json({
            message: "cannot get email or password correctly"
        })
    }
    
    try{
        const user = await User.findOne({email:email});
        console.log("email find")
        if(!user)
        {
            res.status(400).json({
                message: "Invalid email or password "
            })
        }
        //cheaking user is verified or not
        const isverify = user.isverified
        if(!isverify){
            res.status(400).json({
                message:"verify your email",
            })
        }
        console.log("You are verified")
        // const pass = bcrypt.hash(password,10);
        // const userpass = await User.findOne({password:pass})
        const isMatch = bcrypt.compare(password,user.password);
        console.log(isMatch)
        if(!isMatch){
            res.status(400).json({
                message: "Such a user don't exist"
            })
        }
        console.log("Your password matched")
        const token = jwt.sign( { id: user._id, role: user.role },'shhhhh',{expiresIn:'24h'})// we can sign by any value eg: email,pass but usually we take _id stor in mongo db
        
        // Many other value can be pushed into jwt for more search json web token
        const cookieOptions = {
            httpOnly: true,
            secure: false,
            maxAge: 24 * 60 * 60 * 1000,
          };  

            res.cookie("test",token,cookieOptions)
            res.status(200).json({
                success: true,
                message: "Login successful",
                token,
                user: {
                  id: user._id,
                  name: user.name,
                  role: user.role,
                },
              })
        
    }
    catch(e){
        
        res.status(400).json({
            message:"Check your email or password",
            success:false,
            e:e
        })
    }
  
};

const getme = async (req, res) => {
    try {
        console.log("Reached at profile level");

        // Ensure req.user exists
        if (!req.user || !req.user.id) {
            return res.status(400).json({
                message: "User ID missing from request",
                success: false,
            });
        }

        // Fetch user from DB, excluding password
        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                success: false,
            });
        }
        console.log("Profile----- : ", user);
        res.status(200).json({
            message: "User data fetched successfully",
            success: true,
            user,
        });
    } catch (error) {
        console.error("Error in getme:", error); // Log the error
        res.status(500).json({
            message: "Internal Server Error",
            success: false,
        });
    }
};

const logout = async (req,res)=>{
    try{
      
        res.cookie("test","",{
            expires: new Date(0), // fast clear ho jaayega token
        })
        console.log("Logout");
        res.status(200).json({
            message:"User has been logged out",
            success: true,
        })
     }
    catch(e){
        console.log("Error",e);
    }

}
const resetpass = async (req,res)=>{

}
const forgetpass = async (req,res)=>{

}
export { registeruser, verifyUser,login,getme,logout,resetpass, forgetpass};

// what we not made
// 1. forgot password
// 2. reset password
// 3. log out etc.