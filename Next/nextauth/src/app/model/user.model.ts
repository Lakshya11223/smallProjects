
import { timeStamp } from "console";
import mongoose from "mongoose";

interface Iuser{
    name:string,
    email:string,
    password:string,
    image?:string,
    createdAt:string,
    updatedAt:string
}

const userSchema = new mongoose.Schema<Iuser>({
    name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:false
},
image:{
    type:String
}
},{
    timestamps:true
})

// why mongoose.model.User because we have to see if there is any User object present or not
const User=mongoose.models.User ||  mongoose.model('User',userSchema) 
export default User