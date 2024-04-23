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
import { Suspense } from "react";
import SuspenseCard from "./components/SuspenseCard";
import Pagination from "./components/pagination";




async function getData(searchParams: string){
   const[count, data]=await prisma.$transaction([
    prisma.post.count(),
    prisma.post.findMany({
      take:3,
      skip: searchParams ? (Number(searchParams) - 1) * 3 : 0 ,
      select: {
        title:true,
        createdAt:true,
        textContent:true,
        id:true,
        imageString: true,
        Comment: {
          select:{
            id: true,
          },
        },
        User:{
          select:{
            userName:true,
          }
        },
        subName:true,
        Vote: {
          select:{
            voteType: true,
            userId: true,
            postId: true
          }
        }
      },
      orderBy:{
        createdAt: "desc",
      }
      
    }),
   ])
   return {count,data};
}

export default  function Home({searchParams}:{searchParams:{page: string}}) {

  return (

    <div className=" max-w-[1000px] mx-auto flex gap-x-10 mt-4 mb-10">
    <div className="flex w-[65%] flex-col gap-y-4">

       <CreatePostCard/>
       <Suspense fallback={<SuspenseCard/>} key={searchParams.page}>
       <ShowItems searchParams={searchParams}/>
       </Suspense>
    </div>

    <div className="w-[35%] ">

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


async function ShowItems({searchParams}:{searchParams:{page: string}} ){
  const { count, data}=await getData(searchParams.page);

  return (
    <>
     {data.map((post) => (
  <PostCard
    key={post.id}
    id={post.id}
    imageString={post.imageString}
    title={post.title}
    subName={post.subName as string}
    jsonContent={post.textContent}
    commentAmount={post.Comment.length}
    userName={post.User?.userName as string}
    voteCount={post.Vote.reduce((acc, vote) => {
      if (vote.voteType === "UP") return acc + 1;
      if (vote.voteType === "DOWN") return acc - 1;
      return acc;
    }, 0)}
  />
))}
    
  <Pagination totalPages={Math.ceil(count / 3)}/>  
    </>
  )
} 