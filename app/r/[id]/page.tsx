import prisma from "@/app/lib/db";
import { Card } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";



async function getData(name: string){
  const data=await prisma.subreddit.findUnique({
    where:{
      name: name,
    },
    select:{
      name: true,
      createdAt: true,
      description: true,
      userId: true,
    }
  });
  return data;
};

export default async function SubredditRoute({params}:{params: {id: string}}){
   
  const data=await getData(params.id)
   const {getUser}=getKindeServerSession()
   const user=await getUser();
    
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
                <Image src={`https://avatar.vercel.sh/${data?.name}`}
                alt="image of subreddit"
                width={60} height={60}
                className="rounded-full h-16 w-16"
                />
                <Link href="/" className="font-medium">r/{data?.name}</Link>
            </div>
             <p className="text-sm font-normal text-secondary-foreground mt-2">{data?.description}</p>

           </div>
       </Card>
     </div>

    </div>

    )

}