import { Blogs } from "../Models/blog.js"
import { ObjectId } from "mongodb";

//finding all the blog datas
export default function findAllBlog(){
    return Blogs.find();
}

//adding blog
export function addBlog(data){
    return Blogs.insertOne(data)
}

//updating blog
export function updateBlog(id,data){
    return Blogs.findOneAndUpdate({_id:new ObjectId(id)},{$set:{title:data.title,category:data.category,author:data.author,content:data.content,image:data.image,userId:data.userId,updatedAt:Date.now}})
}

//deleting blog
export function deleteBlog(id){
    return Blogs.findByIdAndDelete({_id:new ObjectId(id)})
}

//filtering blogs by author
export function filterAuthor(author){
    return Blogs.find({author})
}

//filtering blogs by category
export function filterCategory(category){
    return Blogs.find({category})
}

//filtering blogs by both category and author
export function allFilter(category,author){
    return Blogs.find({category,author})
}