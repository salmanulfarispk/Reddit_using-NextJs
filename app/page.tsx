import { Card } from "@/components/ui/card";
import Image from "next/image";
import bestbanner from '../public/bestbanner.jpg'
import pfp from '../public/pfp.png'
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CreatePostCard } from "./components/CreatePostCard";
import prisma from "./lib/db";
import { PostCard } from "./components/PostCard";




async function getData(){
  const data= await prisma.post.findMany({
    select: {
      title:true,
      createdAt:true,
      textContent:true,
      id:true,
      imageString: true,
      User:{
        select:{
          userName:true,
        }
      },
      subName:true,
    }
  });
   return data;
}

export default async function Home() {

  const data=await getData();
 
  return (

    <div className=" max-w-[1000px] mx-auto flex gap-x-10 mt-4">
    <div className="flex w-[65%] flex-col gap-y-5">

       <CreatePostCard/>
       
       {data.map((post)=>(

         <PostCard key={post.id} id={post.id} imageString={post.imageString} title={post.title} 
         subName={post.subName as string}  jsonContent={post.textContent} userName={post.User?.userName as string}/>

       ))}
  
    </div>

    <div className="w-[35%]">

       <Card>
        <Image src={bestbanner} alt="bnner"/>
          <div className="p-2">
          <div  className="flex items-center">
           <Image src={pfp} alt="hello-image"
           className="w-10 h-16 -mt-6"/>
           <h1 className="font-medium pl-3">Home</h1>
          </div>
          <p className="text-sm text-muted-foreground pt-2">Your Home Reddit frontpage. Come here to check in with your favorite communities!</p>
          <Separator className="my-5 "/>

           <div className="flex flex-col gap-y-3">
          <Button variant="secondary" asChild><Link href="/r/faris/create">create post</Link></Button>
          <Button asChild><Link href="/r/create">create community</Link></Button>
          </div>


          </div>
       </Card>

    </div>
    </div>
  );
}
