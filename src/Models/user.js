import mongoose from "mongoose";
import { format } from 'date-fns';

const userSchema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    createdAt:{type:String, default:(`${new Date().getDate()+`-`+(new Date().getMonth()+1)+`-`+new Date().getFullYear()},${new Date().getHours()+":"+new Date().getMinutes()}`)}
});

export const Users=mongoose.model("users",userSchema);
