"use client" ;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { updateUsername } from "../actions";
import { SubmitButton } from "./submitButton";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast"



const initialstate={
    message:"",
    status:"",
};


export default function SettingsForm({username}:{username: string | null | undefined}) {

    const [state, formAction]=useFormState(updateUsername,initialstate)
    
    const {toast}=useToast()

     useEffect(()=>{
      if(state?.status==="green"){
         toast({
            title:"success!",
            description: state.message,
         })
      }else if(state?.status === "error"){
        toast({
            title:"Error",
            description: state.message,
            variant: 'destructive'
         })
      }
     },[state, toast])

  return (
    <form action={formAction}>
     <h1 className="text-3xl font-extrabold tracking-tight">Settings</h1>
    <Separator className="my-4"/>
    <Label className="text-lg">Username</Label>
     <p className="text-muted-foreground">In this settings page you can change your username!</p>
     
    <Input name="username" 
    defaultValue={username ?? undefined} 
    required 
    className="mt-2"
    min={4} maxLength={21}
    />

   {state?.status === "error" && (<p className="text-red-500 mt-1">{state.message}</p>)}

  <div className="w-full flex mt-5 gap-x-5 justify-end">
    <Button variant="secondary" asChild type="button">
        <Link href='/'>cancel</Link>
        </Button>
    <SubmitButton text="change username"/>
    </div>

    </form>
  )
}
