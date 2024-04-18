"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { Prisma } from "@prisma/client";



export async function updateUsername(prevState:any , formData: FormData){
 const {getUser}=getKindeServerSession();
 const user=await getUser()

 if(!user){
    redirect("/api/auth/login")
 }

 const username=formData.get("username") as string
  
try{
    await prisma.user.update({
        where:{
            id:user.id,
        },
        data:{
            userName:username
        }
     });
    
      return {
        message:"username updated succesfully! ",
        status:"green"
      }

}catch(err){
     if(err instanceof Prisma.PrismaClientKnownRequestError){
        if(err.code === 'P2002') {           //error shows when already existed username in the database ,uses this code in prisma
           return {
            message:"This username is already used",
            status:"error"
           };
        }         
     }
     throw err;
}

}
 

export async function createCommunity(prevState:any, formData: FormData){
   const {getUser}=getKindeServerSession();
   const user=await getUser()

 if(!user){
    redirect("/api/auth/login")
 }
 try{
   const name= formData.get("name") as string
   const data= await prisma.subreddit.create({
      data:{
         name:name,
         userId: user.id
      }
   });
   
   return redirect("/")

 }catch(err){
   if(err instanceof Prisma.PrismaClientKnownRequestError){
      if(err.code === 'P2002') {  
         return {
          message:"This Name is already used",
          status:"error"
         };
      }         
   }
   throw err;
 }

}



export async function updateSubDescription(prevState:any,formData :FormData){
   const {getUser}=getKindeServerSession()
   const user=await getUser()

if(!user){
  return  redirect("/api/auth/login")
}

try {
   const subName= formData.get("subName") as string
const description=formData.get("description") as string
await prisma.subreddit.update({
   where:{
   name: subName,
   },
   data:{
      description:description,

   }
});
  
return{
   status: "green",
   message:"succesfully updated the description!"
}

} catch (err) {
   return {
      status:"error",
      message:"sorry something went wrong!"
   }


}


}