import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return(
      <div>
      <nav className="grid grid-cols-12 justify-start bg-black px-16">
        <div className="flex items-center col-span-8 pl-3 pb-2 pt-2 " >
          <Image alt="Phone Icon" loading="lazy" width="16" height="16" decoding="async" data-nimg="1"
         src="/mobile.jpg"></Image>
        <h1 className="text-white text-sm cursor-pointer">Download App via SMS</h1>
        </div>

        <div className="flex col-span-4 justify-end pr-3 pt-2 space-x-2" >
          <p className="text-rose-600 cursor-pointer">اردو</p>
          <p className="text-white text-sm cursor-pointer">Sign In | Sign Up</p>
          </div>

          <div className="col-span-12 px-3">
            <hr className="items-center border-t border-gray-700 w-full"/>
            </div>
         </nav>

        
      <div className=" px-16 flex items-center justify-evenly bg-black  ">
         <a href="/Home">
        <Image src="/logo.jpg" alt="" height="80" width="250" ></Image>
             </a>
         <div className="text-white md:flex  space-x-16 text-xl px-16">
        <Link href="/usedcars">Used Cars</Link>
        <Link href="/newcars">New Cars</Link>
        <Link href="/bikes">Bikes</Link>
        <Link href="vedios">Vedios</Link>
        <Link href="blogs">Blogs</Link>
        <Link href="/forums">Forums</Link>
        <Link href="/more">More</Link>
        <div className="pr-3">
          <button className="rounded-md bg-rose-700 h-10 w-32">
            <a className=" justify-center text-white">Post an Ad</a>
            </button>
            </div>
          </div>
    
     </div>
      </div>
      
       
   
      )
  }