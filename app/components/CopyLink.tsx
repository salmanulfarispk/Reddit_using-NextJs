"use client"
import { useToast } from "@/components/ui/use-toast";
import { Share } from "lucide-react";



export default function CopyLink({id}:{id: string}) {

    const {toast}=useToast()

    async function copyClipboard(){
        await navigator.clipboard.writeText(`${location.origin}/post/${id}`)
        toast({
            title:"Success",
            description:"Your link is copied in clipboard"
        })
    }

  return (
    <button className="flex items-center gap-x-1" onClick={copyClipboard}>
     <Share className="h-4 w-4 text-muted-foreground"/>
     <p className="text-muted-foreground font-medium text-xs">Share</p>
    </button>
  )
}
