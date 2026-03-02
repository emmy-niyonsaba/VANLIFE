import React from 'react'
import { homebg } from '../../public/images'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className=" min-h-screen "
      style={{ backgroundImage: `url(${homebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} >
      <div className='flex flex-col gap-20 w-150 mx-auto'>
        <h1 className="text-[36px] font-bold text-center  mt-10 text-white">You got the travel plans, we got the travel vans.</h1>
      <p className="text-center mt-4 text-white text-[16px]">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <Link to="vans" className="block text-center mt-6 bg-[#FF8C38] text-white font-bold py-2 px-4 rounded">Find your van</Link>
      </div>
    </div>
  )
}

export default Home
