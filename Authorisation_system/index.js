import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
// import registeruser
import userRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());// now your app has power to access cookie

app.use(cors({
    origin:process.env.BASE_URL,
    methods:['GET','POST','DELETE','OPTIONS'],
    allowedHeaders:['Content-Type','Authorization'],
    maxAge:3600,  // 1 hour
    credentials:true  // enable set cookie
}));


app.get('/', (req, res) => {
  res.send('Hello World!')
})

console.log(process.env.PORT)
app.get('/lakshya',(req,res)=>{
    res.send('Hello Lakshya');
})
//initialise database
db(); 
// registration
app.use("/api/v1/users",userRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


