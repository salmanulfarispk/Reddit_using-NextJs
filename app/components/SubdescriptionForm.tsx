"use client"
import { Textarea } from "@/components/ui/textarea"
import { SaveButton } from "./submitButton"
import { updateSubDescription } from "../actions"
import { useFormState } from "react-dom";
import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";




interface Isprop{
    subName: string,
    description: string | null | undefined ;
}


const initialstate={
    message:"",
    status:"",
}

export default function SubdescriptionForm({subName,description}: Isprop) {

    const [state, formAction]=useFormState(updateSubDescription, initialstate)
    const {toast}=useToast()

    useEffect(()=>{
      if(state.status==="green"){
        toast({
            title:"success",
            description: state.message,
        
        })
      }else if(state.status==="error"){
        toast({
            title:"Error",
            description: state.message,
            variant:"destructive",
        })
        
      }

    },[state, toast])
     
  return (

             <form className="mt-3" action={formAction}>
               <input type="hidden" name="subName" value={subName}/>

                <Textarea placeholder="create your custom description for your subreddit"
                maxLength={100} name="description" 
                defaultValue={description ?? undefined}/>
                
                <SaveButton/>
                 </form>
  )
}
