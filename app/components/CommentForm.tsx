"use client"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "./submitButton";
import { createComment } from "../actions";
import { useRef } from "react";


interface isprops{
    postId:string;
}


export default function CommentForm({postId}:isprops) {
   
    const ref=useRef<HTMLFormElement>(null)

  return (
    <form className="mt-5" action={async(formData)=>{
        await createComment(formData);
        ref.current?.reset()
    }} ref={ref}>
    <input type="hidden" name="postId" value={postId}/>
   <Label>Comment right here</Label>
   <Textarea placeholder="what are your thoughts?" className="w-full mt-1 mb-2"
   name="comment"/>
     <SubmitButton text="Comment"/>
    </form>
  )
}
