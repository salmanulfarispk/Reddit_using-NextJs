import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SubmitButton } from "./submitButton";
import { createComment } from "../actions";


interface isprops{
    postId:string;
}



export default function CommentForm({postId}:isprops) {
  return (
    <form className="mt-5" action={createComment}>
    <input type="hidden" name="postId" value={postId}/>
   <Label>Comment as faris</Label>
   <Textarea placeholder="what are your thoughts?" className="w-full mt-1 mb-2"
   name="comment"/>
     <SubmitButton text="Comment"/>
    </form>
  )
}
