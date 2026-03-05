
import React from 'react'

import {useParams,Outlet ,NavLink} from 'react-router-dom'
import HostVanDetailsLayout from '../layouts/HostVanDetailsLayout'
import { useEffect,useState } from 'react'
import Loading from '../components/Loading'
function HostVanDetatils() {
  const [van,setVan] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  // console.log(van);
  const {id} = useParams()
  useEffect(() => {
    const loadHostVan = async () => {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetch(`/api/host/vans/${id}`)
        if (!response.ok) {
          throw new Error('Failed to fetch host van details.')
        }
        const data = await response.json()
        setVan(data.vans || [])
      } catch (err) {
        setError(err.message || 'Unexpected error while loading host van details.')
      } finally {
        setIsLoading(false)
      }
    }

    loadHostVan()
      
  }, [id])
   const linkClass = ({ isActive }) =>
    `font-bold hover:underline hover:bg-blue-200 p-2 rounded-md text-sm md:text-base ${isActive ? "text-green-500" : ""
    }`;

  if (isLoading) {
    return <Loading message="Loading host van details..." />
  }

  if (error) {
    return (
      <div className='status-card error'>
        <h2>Could not load host van details</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className='max-w-5xl mx-auto w-full px-4 md:px-8'>
      {
        van.map(van => <HostVanDetailsLayout key={van.id} {...van} />)
      }
         <div className='flex flex-wrap gap-2 md:gap-3'>
          <NavLink to={`details`} className={linkClass}>Details</NavLink>
          <NavLink to={`photos`} className={linkClass}>Photos</NavLink>
          <NavLink to={`price`} className={linkClass}>Price</NavLink>
        </div>
      {van[0] ? <Outlet context={van[0]} /> : null}
    </div>
  )
}

export default HostVanDetatils
