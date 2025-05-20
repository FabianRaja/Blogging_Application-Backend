import express from "express";
import findAllBlog, { addBlog, allFilter, deleteBlog, filterAuthor, filterCategory, updateBlog } from "../Controllers/blog.js";
import { isAuthorized } from "../Authorization/auth.js";

const router=express.Router();

//getting all blog data
router.get("/",isAuthorized,async(req,res)=>{
    try{
       const category=req.query.category;
       const author=req.query.author;
       //filtering by both category and author
       if(category && author){
           const allFilterData=await allFilter(category,author);
           return res.status(200).json({message:"Successfull",data:allFilterData});
       }else if(category){ //filtering by category
           const categoryFilter=await filterCategory(category);
           return res.status(200).json({message:"Successfull",data:categoryFilter});
       }else if(author){  //filtering by author
           const authorFilter=await filterAuthor(author);
           return res.status(200).json({message:"Successfull",data:authorFilter});
       }else{  //getting all data without filter
           const getData=await findAllBlog();
           return res.status(200).json({message:"Successfull",data:getData})
       }
    }catch(error){
       console.log(error);
       res.status(500).json({message:"Error getting all data"})
    }
})
//creating blog
router.post("/",isAuthorized,async(req,res)=>{
    try{
       //creating object as blog data
       const obj={
        title:req.body.title,
        category:req.body.category,
        author:req.body.author,
        content:req.body.content,
        image:req.body.image,
        userId:req.body.userId
       }
       const data=await addBlog(obj);
       res.status(200).json({message:"Blog Uploaded",data})
    }catch(error){
       console.log(error);
       res.status(500).json({message:"Error creaing blog"})
    }
})
//updating blog
router.put("/:id",isAuthorized,async(req,res)=>{
    try{
       //getting id of the blog data using params 
       const blogId=req.params.id;
       const obj={
        title:req.body.title,
        category:req.body.category,
        author:req.body.author,
        content:req.body.content,
        image:req.body.image,
        userId:req.body.userId
       };
       const updatingBlog=await updateBlog(blogId,obj);
       res.status(200).json({message:"Blog Updated",data:obj})
    }catch(error){
       console.log(error);
       res.status(500).json({message:"Error updating blog"})
    }
});
//deleting blog
router.delete("/:id",isAuthorized,async(req,res)=>{
    try{
       //getting id of the blog data using params 
       const blogId=req.params.id;
       const deletingBlog=await deleteBlog(blogId);
       res.status(200).json({message:"Blog Deleted"})
    }catch(error){
       console.log(error);
       res.status(500).json({message:"Error deleting blog"})
    }
})


export const BlogRouter=router;