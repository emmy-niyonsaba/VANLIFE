import React from 'react'
import { Outlet, NavLink, useLoaderData  ,redirect} from 'react-router-dom'
import HostVanDetailsLayout from '../layouts/HostVanDetailsLayout'

export async function loader({ params }) {
  const isLogedIn=true

  if (!isLogedIn) {
    return redirect('/login') 
  }

  const response = await fetch(`/api/host/vans/${params.id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch host van details.')
  }

  const data = await response.json()

  return data.vans
}

function HostVanDetatils() {

  const van = useLoaderData()

  const linkClass = ({ isActive }) =>
    `font-bold hover:underline hover:bg-blue-200 p-2 rounded-md text-sm md:text-base ${
      isActive ? "text-green-500" : ""
    }`

  return (
    <div className='max-w-5xl mx-auto w-full px-4 md:px-8'>

      {van.map(v => (
        <HostVanDetailsLayout key={v.id} {...v} />
      ))}

      <div className='flex flex-wrap gap-2 md:gap-3'>
        <NavLink to="details" className={linkClass}>Details</NavLink>
        <NavLink to="photos" className={linkClass}>Photos</NavLink>
        <NavLink to="price" className={linkClass}>Price</NavLink>
      </div>

      {van[0] && <Outlet context={van[0]} />}

    </div>
  )
}

export default HostVanDetatils