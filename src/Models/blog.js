import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const blogSchema=new mongoose.Schema({
    title:{type:String},
    category:{type:String},
    author:{type:String},
    content:{type:String},
    image:{type:String},
    userId:{type:ObjectId},
    createdAt:{type:Date, default:Date.now},
    updatedAt:{type:Date, default:Date.now}
});

export const Blogs=mongoose.model("blogs",blogSchema);
