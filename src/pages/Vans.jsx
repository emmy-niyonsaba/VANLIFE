import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VansLayout from '../layouts/VansLayout'

const Vans = () => {
    const categories = ["simple", "luxury", "rugged"]
    const [vans, setVans] = useState([])
    console.log(vans)
    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    return (
        <>
            <h1 className=' text-5xl font-bold  m-10'>Explore our van options</h1>
                <div className='flex gap-4 m-10'>
                    {categories.map((category) => {
                        return (
                            <button key={category} className=' bg-[#f0ca9c] text-white px-4 py-2 rounded-md'>{category}</button>
                        )
                    })}
                  <Link>  <h2 className=' font-bold text-2xl '>Clear Filter</h2></Link>
                </div>
        <div className='flex flex-wrap gap-4 justify-center mt-10'>
            {
                vans.map((van) => {
                    return (
                        <VansLayout key={van.id} {...van} />
                    )
                })
            }
        </div>
        </>

    )
}

export default Vans
