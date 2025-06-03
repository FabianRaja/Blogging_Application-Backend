import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import { format } from 'date-fns';
const blogSchema=new mongoose.Schema({
    title:{type:String},
    category:{type:String},
    author:{type:String},
    content:{type:String},
    image:{type:String},
    userId:{type:ObjectId},
    createdAt:{type:String, default:(`${new Date().getDate()+`-`+(new Date().getMonth()+1)+`-`+new Date().getFullYear()},${new Date().getHours()+":"+new Date().getMinutes()}`)},
    updatedAt:{type:String, default:(`${new Date().getDate()+`-`+(new Date().getMonth()+1)+`-`+new Date().getFullYear()},${new Date().getHours()+":"+new Date().getMinutes()}`)}
});

export const Blogs=mongoose.model("blogs",blogSchema);
