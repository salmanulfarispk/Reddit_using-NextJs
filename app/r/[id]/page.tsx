import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";


export default function SubredditRoute(){

    return(
    <div className="max-w-[1000px] mx-auto flex gap-x-10 mt-4">
       <div className="w-[65%] flex flex-col gap-y-5">
          <h1>hello from post section</h1>
       </div>

     <div className="w-[35%]">
       <Card>
           <div className="p-4 bg-muted font-semibold">About Community</div>
           <div className="p-4">
            <div className="flex items-center gap-x-3">
                <Image src={`https://avatar.vercel.sh/janmarshal`}
                alt="image of subreddit"
                width={60} height={60}
                className="rounded-full h-16 w-16"
                />
                <Link href="/" className="font-medium">r/farispk</Link>
            </div>
           </div>
       </Card>
     </div>

    </div>

    )

}