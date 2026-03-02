

import React from 'react'
import { Link } from 'react-router-dom'

function VansLayout(props) {
  
    const { id, name, price,imageUrl, type } = props
    return (
        <div className="p-4 ">
            <Link to={`/vans/${id}`}>
                <div className=" w-150">
                    <img src={imageUrl} alt={name} className=" w-full rounded-md" />
                    <div className=' flex justify-between'>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text-gray-700">${price}/day</p>
                    </div>
                    <button className={  `  text-center  text-2xl text-white px-4 py-2  rounded-md mt-2 ${type === 'simple' ? 'bg-[#E17654]' : type === 'luxury' ? 'bg-[#115E59]' : 'bg-[#161616]'}`}>{type}</button>
                </div> 
            </Link>
        </div>
    )
}

export default VansLayout
