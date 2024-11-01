import Link from "next/link"

export default function Header(){
    return(
      <div> 
        <section>  
      
          <div className="grid grid-cols-1  bg-white h-[500px] w-full">

            <div className="row-span-1 flex justify-center">
              <h3 className="text-black font-bold text-3xl pt-10 ">Sell Your Car On PakWheelsAnd Get The Best Price</h3>
          </div>
          
          <div className="grid grid-cols-5 grid-rows-5 px-52 justify-center" >

          <div className="  col-span-2 row-span-4 border border-r-0 border-slate-300 rounded-sm p-4  ">
            <h3 className=" text-blue-900 font-semibold text-xl pt-4 pl-8">Post your Ad On Pakwheels</h3>
            <ul className="m-8 space-y-3">
            <li>Post your Ad for Free in 3 Easy Steps</li>
              <li>Get Genuine offers from Verified Buyers</li>
              <li>Sell your car Fast at the Best Price</li>

         <Link href="/form">
       <button className=" m-8 py-4 px-3 rounded-xl bg-red-500">Post Your add</button>
       </Link>
            </ul>
          </div>

         <div className="  flex items-center pr-8 col-span-1 row-span-4 border border-r-0 border-l-0 border-slate-300 justify-center">
          <p>OR</p>
         </div>

        <div className="col-span-2 row-span-4 border border-l-0 border-slate-300 rounded-sm p-4 pr-8">
          <h3 className=" text-blue-900 font-semibold text-xl pt-4 pl-8">Try PakWheels Sell It For Me</h3>
          <ul className="m-8 space-y-3">
            <li>Dedicated Sales Expert to Sell your Car</li>
            <li>We Bargain for you and share the Best Offer </li>
            <li>We ensure Safe &amp; Secure Transaction</li>
            
            <Link href="/form">
      <button className=" m-8 py-4 px-3 rounded-xl bg-blue-500">Register your Car  </button>
      </Link>
          </ul>
        </div>
        </div>
        </div>
        </section>
        </div>

       

          
      
        
      
    )
  }