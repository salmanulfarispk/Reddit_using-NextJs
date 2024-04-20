import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowDown, ArrowUp, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


interface isprop{
   title: string;
   jsonContent: any;
   id: string;
   subName:string;
   userName: string;
   imageString:string | null ;

}

export function PostCard({id,title,jsonContent,subName,userName,imageString}:isprop){
    return (

  <Card className="flex relative overflow-hidden">
   <div className="flex flex-col  items-center gap-y-2 bg-muted p-2">
  <form>
     <Button variant="outline" size="sm">
        <ArrowUp className="h-4 w-4" />
     </Button>
  </form>
   0
  <form>
     <Button variant="outline" size="sm">
        <ArrowDown className="h-4 w-4" />
     </Button>
  </form>
   </div>

   <div>
   <div className="flex items-center gap-x-2 p-2">
   <Link href={`/r/${subName}`} className="text-xs font-semibold ">r/{subName}</Link>
   <p className="text-xs text-muted-foreground">
    Posted by: <span className="hover:text-primary hover:cursor-pointer">r/{subName}</span>
   </p>
   </div>

  <div className="px-2">
   <Link href="/">
       <h1 className="font-medium mt-1 text-lg ">{title}</h1>
   </Link>
   </div>
  
  <div>
  {imageString && (<Image src={imageString} alt="post image" width={600} height={300}
  className="w-full h-full"/> )}
  </div>

  <div className="m-3">
  <div className="flex items-center gap-x-1">
  <MessageCircle className="w-4 h-4 text-muted-foreground"/>
  <p className="text-muted-foreground font-medium  text-xs">31 Comments</p>
  </div>
  </div>

   </div>
  </Card>

    )
}