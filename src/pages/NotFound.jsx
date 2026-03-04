import { Link } from "react-router-dom"
function NotFound() {
  return (
    <div className=" flex flex-col justify-center items-center gap-10 min-h-screen">
      <h1 className=' text-5xl w-[80%] '> Sorry, the page you were looking for was not found.</h1>
      <Link to='/' className=" bg-black text-white font-bold text-2xl w-[80%] text-center p-3 rounded-md">Back to Home</Link>
    </div>
  )
}

export default NotFound
