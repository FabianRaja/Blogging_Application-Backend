import mongoose from "mongoose";
import { format } from 'date-fns';

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    createdAt:{type:String, default:format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS")}
});

export const Users=mongoose.model("users",userSchema);
