//import mongoose from "mongoose";
import "server-only"
import {connect} from "mongoose"

const mongodburl = process.env.MONGO_URL 

if(!mongodburl){
    console.log("URL NOT Found")
    throw new Error("MONGO_URL is not defined")
}
// i.e. for ts we define and store connection in mogoose variable
let cached = global.mongoose

// if cache is not means for safety we set them as null
if(!cached){
    cached = global.mongoose = {conn:null,promise:null}
}


// if connection is there then we make a function connectdb which is used to return the connection
const Connectdb = async ()=>{
    if(cached.conn) {
        console.log("Connected from connections")
        return cached.conn
    }


// if there is no connection and no {promise->{connection is happening}} then we have to make a new connection

if(!cached.promise){
   cached.promise =  connect(mongodburl).then((c)=>c.connection)
}

// if promise come then we are resolving that promise
try{
    cached.conn = await cached.promise
}catch(error){
    throw error
}
 return cached.conn

}

export default Connectdb