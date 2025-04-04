import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({  // Changed 'user' to 'userSchema'
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },
    isverified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
    },
    resetpassword: {   // Corrected 'resertpassword' to 'resetpassword'
        type: String,
        default: null,
    },
}, {
    timestamps: true,
});
userSchema.pre("save", async function(next){//arrow function nahi hote
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})

const User = mongoose.model("User", userSchema); // Use 'userSchema' here

export default User;
