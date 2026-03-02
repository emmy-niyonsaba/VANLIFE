import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import VansLayout from '../layouts/VansLayout'

const Vans = () => {
    const [vans, setVans] = useState([])
    console.log(vans)
    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
    return (
        <div className='flex flex-wrap gap-4 justify-center mt-10'>
            {
                vans.map((van)=>{
                    return (
                        <VansLayout key={van.id} {...van} />
                    )
                })
            }
        </div>
    )
}

export default Vans
