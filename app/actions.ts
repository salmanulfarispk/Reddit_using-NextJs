"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "./lib/db";
import { Prisma, TypeOfVote } from "@prisma/client";
import { JSONContent } from "@tiptap/react";
import { revalidatePath } from "next/cache";



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
   
   return redirect(`/r/${data.name}`)

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


export async function createPost({jsonContent}:{jsonContent: JSONContent | null}, formData : FormData){
   const {getUser}=getKindeServerSession()
   const user=await getUser()

   if(!user){
      return redirect('/api/auth/login')
   }
  
   const title= formData.get("title")  as string
   const imageUrl= formData.get("imageUrl") as string | null
   const subName= formData.get("subName")  as string | null

   const data=await prisma.post.create({
     data:{
      title: title,
      imageString: imageUrl ?? undefined,
      subName: subName,
      userId: user.id,
      textContent: jsonContent ?? undefined,

     }
  });

    return redirect(`/post/${data.id}`)

}



export async function handleVote(formData :FormData){
   const {getUser}=getKindeServerSession()
   const user=await getUser()

   if(!user){
      return redirect('/api/auth/login')
   }

    const postId= formData.get("postId") as string
    const voteDirection= formData.get("voteDirection") as TypeOfVote

    const vote= await prisma.vote.findFirst({
      where:{
         postId: postId,
         userId: user.id,

      },
    });

    if(vote){
      if(vote.voteType===voteDirection){
         await prisma.vote.delete({
            where:{
               id:vote.id,
            }
         });
         return revalidatePath("/")
          
      }else{
         await prisma.vote.update({
            where:{
               id: vote.id,
            },
            data:{
               voteType: voteDirection,
            }
         });
         return revalidatePath("/")
      }
    }

    await prisma.vote.create({
      data:{
         voteType: voteDirection,
         userId: user.id,
         postId: postId,
      },
    });
    return revalidatePath("/")
    
}


export async function createComment(formData: FormData){
   const {getUser}=getKindeServerSession()
   const user=await getUser();

   if(!user){
      redirect("/api/auth/login")
   }

const comment = formData.get("comment") as string;
  const postId = formData.get("postId") as string;

  const data = await prisma.comment.create({
    data: {
      text: comment,
      userId: user.id,
      postId: postId,
    },
  });

  revalidatePath(`/post/${postId}`);
}