
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HostVanDetailsLayout(props) {

  const { id, name, description, imageUrl, price, type } = props
  return (
    <div className=' m-5 flex flex-col gap-20'>
      <Link to={`/hosts/vans`} className=' hover:underline'>Back to all vans</Link>
      <div className=' flex gap-10'>
        <img src={imageUrl} className=' w-50 rounded-md' />
        <div className=' flex flex-col gap-5'>
          <button className={`  text-center  w-30  text-2xl text-white px-4 py-2  rounded-md mt-2 ${type === 'simple' ? 'bg-[#E17654]' : type === 'luxury' ? 'bg-[#115E59]' : 'bg-[#161616]'}`}>{type}</button>

          <h1 className=' text-3xl font-bold mt-5'>{name}</h1>
          <p className=' text-xl mt-2'>${price}/day</p>

        </div>
     
      </div>
    </div>
  )
}

export default HostVanDetailsLayout
