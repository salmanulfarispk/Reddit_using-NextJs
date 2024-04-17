"use client" ;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";


export default function SettingsForm({username}:{username: string | null | undefined}) {
  return (
    <form>
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
  <div className="w-full flex mt-5 gap-x-5 justify-end">
    <Button variant="secondary" asChild type="button">
        <Link href='/'>cancel</Link>
        </Button>
    <Button>change username</Button>
    </div>

    </form>
  )
}
