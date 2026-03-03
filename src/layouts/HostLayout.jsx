import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function HostLayout() {
  return (
    <div>
      <div className=' flex gap-10 '>
        <Link to='/hosts' className=' font-bold hover:underline hover:bg-blue-200 p-2 rounded-md' >Dashboard</Link>
        <Link to='/hosts/income'  className='  font-bold hover:underline hover:bg-blue-200 p-2 rounded-md'>Income</Link>
        <Link to='/hosts/reviews'  className=' font-bold hover:underline hover:bg-blue-200 p-2 rounded-md'>Reviews</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default HostLayout
