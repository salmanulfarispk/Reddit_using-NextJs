import { Card } from "@/components/ui/card";
import Image from "next/image";
import bestbanner from '../public/bestbanner.jpg'
import hello from '../public/hello.png'
import pfp from '../public/pfp.png'
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Home() {
  return (

    <div className=" max-w-[1000px] mx-auto flex gap-x-10 mt-4">
    <div className="flex w-[65%] flex-col gap-y-5">

       
    
   

    </div>


    <div className="w-[35%]">

       <Card>
        <Image src={bestbanner} alt="bnner"/>
          <div className="p-2">
          <div  className="flex items-center">
           <Image src={pfp} alt="hello-image"
           className="w-10 h-16 -mt-6"/>
           <h1 className="font-medium pl-3">Home</h1>
          </div>
          <p className="text-sm text-muted-foreground pt-2">Your Home Reddit frontpage. Come here to check in with your favorite communities!</p>
          <Separator className="my-5 "/>

           <div className="flex flex-col gap-y-3">
          <Button variant="secondary" asChild><Link href="/r/faris/create">create post</Link></Button>
          <Button asChild><Link href="/r/create">create community</Link></Button>
          </div>


          </div>
       </Card>

    </div>
    </div>
  );
}
