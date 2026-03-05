import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VansLayout from '../layouts/VansLayout'
import Loading from '../components/Loading'

const Vans = () => {
    const [vans, setVans] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const [searchParams, setSearchParams] = useSearchParams()
    const filterType = searchParams.get('type'); 
    const filteredVans = filterType ? vans.filter(van => van.type === filterType) : vans;

    // Categories
    const categories = ["simple", "luxury", "rugged"]
    // console.log(vans)
    useEffect(() => {
        const loadVans = async () => {
            try {
                setIsLoading(true)
                setError('')
                const response = await fetch('/api/vans')
                if (!response.ok) {
                    throw new Error('Failed to fetch vans.')
                }
                const data = await response.json()
                setVans(data.vans || [])
            } catch (err) {
                setError(err.message || 'Unexpected error while loading vans.')
            } finally {
                setIsLoading(false)
            }
        }

        loadVans()
    }, [])

    if (isLoading) {
        return <Loading message="Loading available vans..." />
    }

    if (error) {
        return (
            <div className='status-card error'>
                <h2>Could not load vans</h2>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <>
            <h1 className=' text-3xl md:text-5xl font-bold my-6 px-4 md:px-10'>Explore our van options</h1>
            <div className='flex flex-wrap gap-3 md:gap-4 items-center px-4 md:px-10'>
                {categories.map((category) => {
                    return (
                        <button key={category} className=' bg-[#f0ca9c] text-white px-4 py-2 rounded-md capitalize'
                        onClick={()=>setSearchParams({ type: category })}>{category}</button>
                    )
                })}
                {
                    filterType?(
                <button onClick={() => setSearchParams({})} className='font-bold text-base md:text-xl underline'>Clear Filter</button>

                    ):null
                }
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-10 mt-8'>
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
