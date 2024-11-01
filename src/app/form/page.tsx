import Link from "next/link"
export default function Forms(){
    return(
        <div>
    <h1 className="text-5xl font-semibold text-center uppercase">Enter your details</h1>

<div>
<form className="mt-10 flex border border-l-zinc-950 justify-center items-center flex-col gap-5 ">

<input type="Account detail" className="p-2 w-2/5 rounded-2xl border border-red-800 "
     placeholder="Account No." />


    <input type="email" className=" p-2 w-2/5 rounded-2xl border border-red-800 "
     placeholder="Enter your email" />

    <input type="password" className="p-2 w-2/5 rounded-2xl border border-red-800 "
     placeholder="Enter your password" />

<input type="location" className="p-2 w-2/5 rounded-2xl border border-red-800 "
     placeholder="Enter your location" />

<Link href="/thanky">
<button className="py-4 px-5 rounded-lg bg-blue-800">Place your Order</button>
</Link>
    </form>
   </div>

        </div>
    )
}