import jwt from "jsonwebtoken";

//token generation for login
export function generateToken(data){
    return jwt.sign({data},process.env.secret_key,{expiresIn:"1h"})
}

//custom authorization middleware
export function isAuthorized(req,res,next){
    //getting headers
    const token=req.headers["x-auth-token"];
    if(!token){
        res.status(400).json({message:"Access denied"})
    }else{
        //comparing and verifying
        const result=jwt.verify(token,process.env.secret_key);
        next();

    }
}