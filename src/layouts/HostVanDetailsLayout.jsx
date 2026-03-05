
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function HostVanDetailsLayout(props) {

  const { id, name, description, imageUrl, price, type } = props
  return (
    <div className='my-5 flex flex-col gap-8 md:gap-12'>
      <Link to={`/hosts/vans`} className=' hover:underline'>Back to all vans</Link>
      <div className='flex flex-col sm:flex-row gap-5 md:gap-8'>
        <img src={imageUrl} alt={name} className='w-full sm:w-52 md:w-60 rounded-md object-cover' />
        <div className='flex flex-col gap-4 md:gap-5'>
          <button className={`text-center w-fit text-sm md:text-base text-white px-4 py-2 rounded-md mt-2 capitalize ${type === 'simple' ? 'bg-[#E17654]' : type === 'luxury' ? 'bg-[#115E59]' : 'bg-[#161616]'}`}>{type}</button>

          <h1 className='text-2xl md:text-3xl font-bold mt-2'>{name}</h1>
          <p className='text-lg md:text-xl mt-1'>${price}/day</p>

        </div>
     
      </div>
    </div>
  )
}

export default HostVanDetailsLayout
