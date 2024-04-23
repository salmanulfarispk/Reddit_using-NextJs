import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CopyLink from "./CopyLink";
import { handleVote } from "../actions";
import { DownVote, UpVote } from "./submitButton";
import Rendertojson from "./Rendertojson";


interface isprop{
   title: string;
   jsonContent: any;
   id: string;
   subName:string;
   userName: string;
   imageString:string | null ;
   voteCount : number;
   commentAmount: number;
}

export function PostCard({id,title,jsonContent,subName,userName,imageString,voteCount,commentAmount}:isprop){
    return (

  <Card className="flex relative overflow-hidden">
   <div className="flex flex-col  items-center gap-y-2 bg-muted p-2">
  <form action={handleVote}>
   <input type="hidden" name="voteDirection" value="UP"/>
   <input type="hidden" name="postId" value={id}/>
    <UpVote/>
  </form>
   {voteCount}
  <form action={handleVote}>
  <input type="hidden" name="voteDirection" value="DOWN"/>
  <input type="hidden" name="postId" value={id}/>
   <DownVote/>
  </form>
   </div>

   <div>
   <div className="flex items-center gap-x-2 p-2">
   <Link href={`/r/${subName}`} className="text-xs font-semibold ">r/{subName}</Link>
   <p className="text-xs text-muted-foreground">
    Posted by: <span className="hover:text-primary hover:cursor-pointer">u/{userName}</span>
   </p>
   </div>

  <div className="px-2">
   <Link href={`/post/${id}`}>
       <h1 className="font-medium mt-1 text-lg ">{title}</h1>
   </Link>
   </div>
  
  <div className="max-h-[300px] overflow-hidden">
  
  {imageString ?(
     <Image src={imageString} alt="post image" width={600} height={300}
     className="w-full h-full"/>
  ):(
    
   <Rendertojson data={jsonContent}/>
   
  )}

  </div>

  <div className="m-3 flex items-center gap-x-5">
  <div className="flex items-center gap-x-1">
  <MessageCircle className="w-4 h-4 text-muted-foreground"/>
  <p className="text-muted-foreground font-medium  text-xs">{commentAmount} Comments</p>
  </div>
  
  <CopyLink id={id}/>
    
  </div>
   </div>
  </Card>

    )
}