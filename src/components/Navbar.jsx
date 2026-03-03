import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (  
    <div className='flex items-center justify-between p-4 bg-[#FFF7ED] text-grey-100'>
   <Link to='/'><h1 className=' text-[#000000] font-bold text-2xl'>#VANLIFE</h1></Link>
    <div className=' flex gap-10 text-[#4D4D4D] '>
        <Link to='/hosts' className=' hover:underline'>Hosts</Link>
        <Link to='/about' className=' hover:underline'>About</Link>
       <Link to='/vans' className=' hover:underline'>Vans</Link>
    </div>
  </div>
  )
}

export default Navbar
