"use client"

import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useFormStatus } from "react-dom"

export function SubmitButton({text}:{text:string}){
 
    const {pending}=useFormStatus()

  return (
  <>
  {pending ? (
   
   <Button disabled>
    <Loader2 className="mr-2 w-4 h-4 animate-spin"/>
    please wait
   </Button>

  ):(

     <Button type="submit">{text}</Button>
  )}

  </>
  )
    
}

export function SaveButton(){
  const {pending}=useFormStatus()

  return(

    <>
    {pending ? (
     
     <Button disabled size="sm" className="mt-2 w-full">
      <Loader2 className="mr-2 w-3 h-3 animate-spin"/>
      please wait
     </Button>
  
    ):(
  
    <Button size="sm" className="mt-2 w-full" type="submit">Save</Button>
       
    )}
  
    </>



  )
}