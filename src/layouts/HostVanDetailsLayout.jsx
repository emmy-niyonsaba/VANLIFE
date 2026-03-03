
import React from 'react'
import { Link } from 'react-router-dom'

function HostVanDetailsLayout(props) {
  const { id, name, description, imageUrl, price, type } = props
  return (
    <div className=' m-5 flex flex-col gap-20'>
      <Link to={`/hosts/vans`}>Back to all vans</Link>
      <div className=' '>
        <img src={imageUrl} className=' w-300 rounded-md' />
        <h1 className=' text-3xl font-bold mt-5'>{name}</h1>
        <p className=' text-xl mt-2'>${price}/day</p>
        <p className=' mt-5'>{description}</p>
      </div>
    </div>
  )
}

export default HostVanDetailsLayout
