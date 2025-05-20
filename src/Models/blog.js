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
    createdAt:{type:String, default:format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS")},
    updatedAt:{type:String, default:format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS")}
});

export const Blogs=mongoose.model("blogs",blogSchema);
