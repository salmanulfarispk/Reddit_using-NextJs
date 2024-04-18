import { Card } from "@/components/ui/card";
import Image from "next/image";
import pfp from "../../../../public/pfp.png"
import { Separator } from "@/components/ui/separator";



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

   <h1>Subreddit: {params.id}</h1>


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