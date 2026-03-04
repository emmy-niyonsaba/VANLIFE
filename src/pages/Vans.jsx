import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VansLayout from '../layouts/VansLayout'

const Vans = () => {
    const [vans, setVans] = useState([])

    const [searchParams, setSearchParams] = useSearchParams()
    const filterType = searchParams.get('type');
    const filteredVans = filterType ? vans.filter(van => van.type === filterType) : vans;

    // Categories
    const categories = ["simple", "luxury", "rugged"]
    // console.log(vans)
    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    return (
        <>
            <h1 className=' text-5xl font-bold  m-10'>Explore our van options</h1>
            <div className='flex gap-4 justify-around m-10'>
                {categories.map((category) => {
                    return (
                        <button key={category} className=' bg-[#f0ca9c] text-white px-4 py-2 rounded-md'
                        onClick={()=>setSearchParams({ type: category })}>{category}</button>
                    )
                })}
                <Link><h2 className=' font-bold text-2xl '>Clear Filter</h2></Link>
            </div>
            <div className='flex flex-wrap gap-4 justify-center mt-10'>
                {


                    filteredVans.map((van) => {
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
