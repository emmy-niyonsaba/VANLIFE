import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function HostLayout() {
  const linkClass = ({ isActive }) =>
    `font-bold hover:underline hover:bg-blue-200 p-2 rounded-md ${isActive ? "text-green-500" : ""
    }`;


  return (
    <div>
      <div className=' flex gap-10 '>
        <NavLink to='/hosts' className={linkClass} end>Dashboard</NavLink>
        <NavLink to='/hosts/income' className={linkClass}>Income</NavLink>
        <NavLink to='/hosts/reviews' className={linkClass}>Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default HostLayout
