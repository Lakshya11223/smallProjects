import { NextAuthOptions } from "next-auth"
import { CredentialsProvider } from "next-auth/providers/credentials"
import Connectdb from "./db"
import User from "@/app/model/user.model"
import bcrypt from "bcryptjs"

const authoptions:NextAuthOptions={
   providers:[
    CredentialsProvider({
    name:"Credentials",
    credentials:{
        email:{label:'Email',type:'text'},
        password:{label:'Password',type:'password'}
    },
    async authorise(credentials,req){
        const email = credentials?.email,
        const password = credentials?.password
        await Connectdb()
        if(!email || !password){
            throw new Error("email or password is not found")
        }
        const user =await User.findOne({email})
        if(!user){
            throw new Error("user not exist with this email")
        }
        const isMatch = bcrypt.compare(password,user.password)

        if(!isMatch){
            throw new Error("wrong Password entered")
        }
        

    }
    })
   ],
   callbacks:{
    
   },
   session:{

   },

   secret:"",
}

export default authoptions