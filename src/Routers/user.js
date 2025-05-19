import express from "express";
import bcrypt from "bcrypt";
import checkUser, { registerUser } from "../Controllers/user.js";
import { generateToken } from "../Authorization/auth.js";


const router=express.Router();
//user signup
router.post("/signup",async(req,res)=>{
    try{
       //checking if the user is already registered or not
       const checkingUser=await checkUser(req.body.email);
       if(checkingUser){
         return res.status(409).json({message:"User Email Already Registered"})
       }else{
         //encrypting password using bcrypt
         const salt=await bcrypt.genSalt(10);
         const hashedPass=await bcrypt.hash(req.body.password,salt);
         //creating object with user details
         const data={
            name:req.body.name,
            email:req.body.email,
            password:hashedPass
         }
         //adding user to the database
         const registeringUser=await registerUser(data);
         return res.status(201).json({message:"User registered",data})
       }
    }catch(error){
       console.log(error);
       res.status(500).json({message:"User Registration Failed"})
    }
})
//user login
router.post("/login",async(req,res)=>{
    try{
        //checking if user is registered 
        const checkingUser=await checkUser(req.body.email);
        if(checkingUser){
             //validating password
             const validatingPass=await bcrypt.compare(req.body.password,checkingUser.password);
             if(validatingPass){
                //creating jwt token
                const tokenGeneration=await generateToken(checkingUser);
                return res.status(200).json({message:"Logged in successful",token:tokenGeneration,data:checkingUser});
             }else{
                return res.status(401).json({message:"Incorrect Password"})
             }
        }else{ 
             return res.status(401).json({message:"User not registered"})
        }
    }catch(error){
        console.log(error);
        res.status(500).json({message:"Login Failed"})
    }
})


export const AuthRouter=router;