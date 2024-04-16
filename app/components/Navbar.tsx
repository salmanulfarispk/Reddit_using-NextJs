import Image from "next/image";
import Link from "next/link";
import reddit from '../../public/reddit.png'
import redtext from '../../public/redtext.png'
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserDropdown from "./UserDropdown";


export  async function Navbar() {

  const {getUser}=getKindeServerSession()
  const user=await getUser();
    // console.log("userDetails",user);
    
  return (
    <nav className="h-[10vh] w-full flex items-center border px-5 lg:px-14 justify-between">
    <Link href='/' className="flex items-center gap-x-3">
      <Image src={reddit}
      alt="reddit-logo"
      className="h-10 w-fit"
      />

      <Image src={redtext}
      alt="redditText"
      className="h-7  w-fit hidden lg:block "
      />
    
     </Link>

    <div className="flex items-center gap-x-4">
    <ThemeToggle/>

    {user ? (

    <UserDropdown userImage={user.picture}/>


    ):(
      <div className="flex items-center gap-x-4">

      <Button variant="secondary" asChild><RegisterLink>Sign up</RegisterLink></Button>
      <Button asChild><LoginLink>Login in</LoginLink></Button>

      </div>
    )}

    </div>


    </nav>
  )
}
