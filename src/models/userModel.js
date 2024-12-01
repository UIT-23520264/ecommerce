import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "provide the username"],
        unique: true,
    },
    email: {
        type: String,
        require: [true, "provide the email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "provide the password"],
    },
    isVerfiy: {
        type: Boolean,
        default: false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User
