import Link from 'next/link'
type User = {
    id : number,
    name : string,
    username : string,
    email : string,
    phone : number
}



export default async function serverSide() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
        const response =await fetch('https://jsonplaceholder.typicode.com/users')
        const userData = await response.json()
    console.log(userData);
    
    
  return (
        <div className="flex flex-col items-center gap-2 p-4 ">
            <h1 className="text-2xl text-orange-500 font-bold p-4">Server Side (SSR)</h1>
            <p className='text-xs md:text-base p-2 border-2 border-orange-500 rounded-[5px]'><strong className='text-red-500'>Note:</strong> Server-side rendering (SSR) is a technique where the content of a website or web application is rendered on the server, and then that content is sent to the client (browser).</p>
      {userData.map((user: User ) => (
        <div
          key={user.id}
          className="flex items-center justify-between w-full p-4 bg-white shadow rounded-lg text-gray-600"
        >
          <div className="flex flex-col space-y-1">
            <h2 className="text-sm md:text-lg font-semibold">{user.name}</h2>
            <p className="text-sm ">{user.username}</p>
          </div>
          <div className="flex flex-col space-y-1 items-end">
            <div className="text-base">{user.email}</div>
            <div className="text-base">{user.phone}</div>
          </div>
        </div>
      ))}
      <div className='m-4' ><Link href="/" className="bg-orange-400 text-white  p-2 rounded-[5px] text-center font-semibold hover:bg-orange-500">Back</Link></div>
    </div>

  )
}