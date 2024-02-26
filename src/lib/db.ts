import mongoose,{Schema} from "mongoose";
// const mongoose=require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    balance: Number,
});
export  const User = mongoose.models?.User || mongoose.model('User', userSchema);

