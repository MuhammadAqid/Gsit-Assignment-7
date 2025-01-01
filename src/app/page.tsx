import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className="text-3xl text-center border-b-4 font-serif tracking-wider pb-1 border-black font-bold m-4">Data Fetching From SeverSide & ClientSide</h1>
      <p className="text-sm md:text-lg w-72 md:w-96 text-center border-4 border-black p-4 rounded-[5px] font-bold   hover:border-orange-400 ">Data fetching is the process of retrieving data from a source like a server, database, or an API. It is 
        a critical concept in web development, Enabling dynamic content delivery to web applications without
        requiring the user to reload the page. </p>
      <div className="flex justify-around m-4 gap-2 md:gap-4">
        <div ><Link href="/server-side" className="bg-blue-950 text-white py-3 px-6 rounded-[5px] font-sans text-center font-semibold hover:bg-blue-600">Server Side</Link></div>
        <div ><Link href="/client-side" className="bg-[#bb0404] text-white  px-6 py-3 rounded-[5px] font-sans text-center font-semibold hover:bg-[#f17070]">Client Side</Link></div>
      </div>
    </div>
  );
}