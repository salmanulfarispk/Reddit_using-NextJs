"use client"
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import pfp from "../../../../public/pfp.png"
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Text, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TipTapEditor } from "@/app/components/TipTabEditor";
import { SubmitButton } from "@/app/components/submitButton";
import { UploadDropzone } from "@/app/components/Uploadthing";



const rules=[
  {
    id:1,
    text:"Remember the human"

  },
  {
    id:2,
    text:"Behave like you world in real life "

  },
  {
    id:3,
    text:"Look for the orginal source of posting"

  },
  {
    id:4,
    text:"Search for duplication before posting"

  },
  {
    id:5,
    text:"Read the community guidelines "

  },


]



export default function CreateRoutePost({params}:{params: {id: string}}){
  return (
  <div className="max-w-[1000px] mx-auto flex  gap-x-10 mt-4">
  <div className="w-[65%] flex flex-col gap-y-5">

   <h1 className="font-semibold">
    Subreddit: <Link href={`/r/${params.id}`} className="text-primary">{params.id}</Link>
    </h1>
   <Tabs defaultValue="post" className="w-full">
  <TabsList className="grid w-full grid-cols-2">
   <TabsTrigger value="post"><Text className="w-4 h-4 mr-2"/>Post</TabsTrigger>
   <TabsTrigger value="image"><Video className="w-4 h-4 mr-2"/> Image & Video</TabsTrigger>
  </TabsList>

   <TabsContent value="post">
  <Card>
<form>
  <CardHeader>
    <Label>Title</Label>
   <Input name="title" placeholder="Title" required/>
    <TipTapEditor/>
  </CardHeader>
   <CardFooter>
    <SubmitButton text="Create post"/>
   </CardFooter>
</form>
  </Card>
   </TabsContent>

   <TabsContent value="image">
     <Card>
    <CardHeader>
     <UploadDropzone  className="ut-button:bg-primary ut-button:ut-readying:bg-primary/50 ut-label:text-primary
     ut-button:ut-uploading:bg-primary/50   ut-button:ut-uploading:after:bg-primary"
     endpoint="imageUploader" onClientUploadComplete={(res)=>{
        console.log(res);
     }}
     onUploadError={(error:Error)=>{
        alert("Error")
        console.log(error);
        
     }}/>

    </CardHeader>
    </Card>
   </TabsContent>
   </Tabs>

  </div>



<div className="w-[35%] ">
<Card className="flex flex-col p-4">
  <div className="flex items-center gap-x-2">

  <Image src={pfp}
  alt="pfp"
  className="h-10 w-10 "
  />
  <h1 className="font-medium">Posting to Reddit</h1>
  </div>

  <Separator className="mt-2"/>
   <div className="flex flex-col gap-y-5 mt-5">
   {rules.map((item)=>(
    <div key={item.id}>
      <p className="text-sm  font-medium">{item.id}. {item.text}</p>
   <Separator className="mt-2"/>
    </div>
   ))}


   </div>
</Card>
</div>

  </div>
  )
}