"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUp, Loader2 } from "lucide-react"
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



export function UpVote(){
  const {pending}=useFormStatus()
  return(
    <>
    {pending ? ( 
     <Button disabled size="icon"  variant="outline">
      <Loader2 className="w-4 h-4 animate-spin"/>
     </Button>
    ):(
    <Button size="sm" variant="outline" type="submit">
     <ArrowUp className="h-4 w-4 "/>
    </Button>  
    )}
  
    </>
  )
}


export function DownVote(){
  const {pending}=useFormStatus()
  return(
    <>
    {pending ? ( 
     <Button disabled size="icon"  variant="outline">
      <Loader2 className="w-4 h-4 animate-spin"/>
     </Button>
    ):(
    <Button size="sm" variant="outline" type="submit">
     <ArrowDown className="h-4 w-4 "/>
    </Button>  
    )}
  
    </>
  )
}
