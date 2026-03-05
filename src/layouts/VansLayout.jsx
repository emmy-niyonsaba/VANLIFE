

import React from 'react'
import { Link } from 'react-router-dom'

function VansLayout(props) {
  
    const { id, name, price,imageUrl, type } = props
    return (
        <div className="p-2 md:p-3">
            <Link to={`/vans/${id}`}>
                <div className="w-full">
                    <img src={imageUrl} alt={name} className=" w-full rounded-md" />
                    <div className=' flex justify-between gap-2 mt-2'>
                        <h2 className="text-lg md:text-xl font-bold">{name}</h2>
                        <p className="text-gray-700 text-sm md:text-base">${price}/day</p>
                    </div>
                    <button className={  `text-center text-sm md:text-base text-white px-3 py-2 rounded-md mt-2 capitalize ${type === 'simple' ? 'bg-[#E17654]' : type === 'luxury' ? 'bg-[#115E59]' : 'bg-[#161616]'}`}>{type}</button>
                </div> 
            </Link>
        </div>
    )
}

export default VansLayout
