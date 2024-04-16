import Image from "next/image";
import Link from "next/link";
import reddit from '../../public/reddit.png'
import redddittext from '../../public/redddittext.png'

export  function Navbar() {
  return (
    <nav className="h-[10vh] w-full flex items-center border-b px-5 lg:px-14 justify-between">
    <Link href='/' className="flex items-center gap-x-0">
      <Image src={reddit}
      alt="reddit-logo"
      className="h-10 w-fit"
      />

      <Image src={redddittext}
      alt="redditText"
      className="h-[70px] w-fit hidden lg:block "
      />
    
    
    
    
    
    </Link>






    </nav>
  )
}
