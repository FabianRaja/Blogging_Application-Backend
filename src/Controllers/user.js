import { Users } from "../Models/user.js";

//checking user in db
export default function checkUser(email){
   return Users.findOne({email})
}

//adding user in db
export function registerUser(data){
    return Users.insertOne(data);
}