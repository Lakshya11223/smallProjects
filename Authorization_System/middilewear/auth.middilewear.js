import jwt from 'jsonwebtoken';
import cookieParser from "cookie-parser";
const isloggedin = async (req,res,next)=>{

    try{
        const token = req.cookies.test || "";
        console.log(token);
        console.log("Received cookies:", req.cookies);
        console.log("Token found :",token ? "Yes" : "No");

        if(!token){
            return res.status(401).json({
                message:"Unauthorized",
                success:false,
            })
        }

      const decoded =  jwt.verify(token,process.env.JWT_sec) // verify take value and key
      console.log("JWT Secret from env:", process.env.JWT_sec);

      console.log("Decoded :",decoded);

      req.user = decoded; // add user info in request object

      // continue to next middleware or route

      next();
    }
    catch(e){
        console.log("middilewear Error occur ",e);
        return res.status(403).json({
            message:"Server Error",
            success:false,
        });
        
    }
    //next();
}
export default isloggedin