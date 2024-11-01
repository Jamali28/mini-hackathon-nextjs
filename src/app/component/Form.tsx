export default function Forms(){
    return(
        <div>
    <h1 className="text-5xl font-semibold text-center uppercase">Enter your details</h1>

<div>
<form className="mt-10 flex border justify-center items-center flex-col gap-5 ">

    <input type="email" className=" p-2 w-2/5 rounded-2xl border border-red-800 "
     placeholder="Enter your email" />

    <input type="password" className="p-2 w-2/5 rounded-2xl border border-red-800 "
     placeholder="Enter your password" />

<button className="py-3 rounded-lg bg-blue-800">Place your Order</button>
    </form>
   </div>

        </div>
    )
}