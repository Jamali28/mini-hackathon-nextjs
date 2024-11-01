import Link from "next/link";
import Image from "next/image";
export default function Main(){
    return(
        <section>
        <div className="grid grid-cols-12 grid-rows-8 bg-zinc-100 h-[600px] px-20">
          <div className="col-start-2 col-span-10 row-span-8">
            <div className="flex justify-start h-[90px] col-span-8 row-span-2">
           <h1 className="pt-8 text-slate-600 font-semibold text-2xl">Featured New Cars</h1>
            </div>
          <div className="flex text-slate-800 gap-16 text-lg col-span-8 h-12 row-span-2">
            <Link href="/popular">Popular</Link>
            <Link href="/upcoming">Up-Coming</Link>
            <Link href="/newlylaunched">Newly-Launched</Link>
          </div>
         <div className="col-span-10 pb-4">
          <hr className="items-center border-t border-gray-300 w-full" />
         </div>
         <div className="flex col-span-5 gap-6 row-span-4 h-64 bg-zinc-100">
<a className="flex flex-col hover:shadow-md bg-white h-75 w-60 col-span-1 row-span-4" href="/corola">
        <div className="grid h-40 w-full">
        <Image alt="Toyota Corolla" loading="lazy" width="300" height="225" decoding="async" data-nimg="1"  src="/corola.jpg"></Image>

        </div>
        <div className="text-center"><h1 className="text-blue-700 font-bold text-base pt-3">Toyota Corolla</h1></div>
        <div className="text-center"><h1 className="text-green-500 font-normal text-sm">PKR 59.7 - 75.5 lacs</h1></div>
</a>
     <a className="flex hover:shadow-md flex-col bg-white h-75 w-60 col-span-1 row-span-4" href="/civic">
     <div className="grid h-40 w-full">
     <Image alt="Honda Civic" loading="lazy" width="300" height="225" decoding="async" data-nimg="1" 
     src="/img.jpg" ></Image>
     </div>
     <div className="text-center"><h1 className="text-blue-700 font-bold text-base pt-3">Honda Civic</h1>
     </div>
     <div className="text-center"><h1 className="text-green-500 font-normal text-sm">PKR 23.3 - 30.5 lacs</h1></div>
     </a>

     <a className="flex flex-col hover:shadow-md bg-white h-75 w-60 col-span-1 row-span-4" href="/cultus">
     <div className="grid h-40 w-full">
     <Image alt="Suzuki Cultus" loading="lazy" width="300" height="225" decoding="async" data-nimg="1" src="/cultus.jpg"></Image>
     </div>
      <div className="text-center"><h1 className="text-blue-700 font-bold text-base pt-3">Suzuki Cultus</h1></div>
      <div className="text-center"><h1 className="text-green-500 font-normal text-sm">PKR 30.6-46.5 lacs</h1></div>
     </a> 
     <a className="flex flex-col hover:shadow-md bg-white h-75 w-60 col-span-1 row-span-4" href="/cruiser">
     <div>
        <Image alt="Land Cruiser" loading="lazy" width="300" height="225" decoding="async" data-nimg="1"  src="/cruiser.jpg"></Image>
     </div>
     <div className="text-center"><h1 className="text-blue-700 font-bold text-base pt-3">Toyota Land cruiser</h1></div>
        <div className="text-center"><h1 className="text-green-500 font-normal text-sm">PKR 12.8 - 15 Crore</h1></div>
     </a>

         </div>
          </div>
        </div>

      </section>
    )
}