import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (  
    <div className='flex items-center justify-between p-4 bg-[#FFF7ED] text-grey-100'>
   <NavLink to='/'><h1 className=' text-[#000000] font-bold text-2xl'>#VANLIFE</h1></NavLink>
    <div className=' flex gap-10 text-[#4D4D4D] '>
       <NavLink
  to="/hosts"
  className={({ isActive }) =>
    `hover:underline ${isActive ? "text-green-500" : ""}`
  }
>
  Hosts
</NavLink>

<NavLink
  to="/about"
  className={({ isActive }) =>
    `hover:underline ${isActive ? "text-green-500" : ""}`
  }
>
  About
</NavLink>

<NavLink
  to="/vans"
  className={({ isActive }) =>
    `hover:underline ${isActive ? "text-green-500" : ""}`
  }
>
  Vans
</NavLink>
    </div>
  </div>
  )
}

export default Navbar
