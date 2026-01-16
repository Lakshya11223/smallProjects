import { NextAuthOptions } from "next-auth"
import  CredentialsProvider  from "next-auth/providers/credentials"
import Connectdb from "./db"
import User from "@/app/model/user.model"
import bcrypt from "bcryptjs"

const authoptions:NextAuthOptions={
  providers: [
  CredentialsProvider({
    name: "Credentials",
    credentials: {
      email: { label: "Email", type: "text" },
      password: { label: "Password", type: "password" }
    },

    async authorize(credentials, req) {
      const email = credentials?.email;
      const password = credentials?.password;

      if (!email || !password) {
        return null;
      }

      await Connectdb();

      const user = await User.findOne({ email });
      if (!user) {
        return null;
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return null;
      }

      return {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        image: user.image || null
      };
    }
  })
],
   callbacks:{
   async jwt({token,user}){
        if(user){
            token.id = user.id,
            token.name = user.name,
            token.email = user.email,
            token.image = user.email
        }
        return token
    },
    session({token,session}){
        if(session.user){
            session.user.id = token.id as string,
            session.user.name = token.name,
            session.user.email = token.email,
            session.user.image = token.image as string
        }
        return session
    }
   },
    session:{
    maxAge: 1000*60*60*24*2,
    strategy:'jwt',
   },
   pages:{
    signIn:'/login',
    error:'/login'
   }

   secret:process.env.NEXT_AUTH_SECRET,
}

export default authoptions