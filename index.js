import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./db.js";
import { AuthRouter } from "./src/Routers/user.js";
import { BlogRouter } from "./src/Routers/blog.js";

//configuring dotenv
dotenv.config();

//initializing port
const PORT=process.env.PORT;

//initializing server
const app=express();

//middlewares
app.use(cors());
app.use(express.json());

//connecting database
dbConnect();

//adding router
app.use("/auth",AuthRouter);
app.use("/blogs",BlogRouter)

//listening to the server
app.listen(PORT,()=>console.log(`Server started in PORT : ${PORT}`));
