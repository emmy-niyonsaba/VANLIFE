import React from 'react'
import HostVansLayout from '../layouts/HostVansLayout'
import { useEffect,useState } from 'react'
import Loading from '../components/Loading'
function HostVans() {
  const [vans,setVans] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  // console.log(vans)
  useEffect(() => {
    const loadHostVans = async () => {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetch("/api/host/vans")
        if (!response.ok) {
          throw new Error('Failed to fetch host vans.')
        }
        const data = await response.json()
        setVans(data.vans || [])
      } catch (err) {
        setError(err.message || 'Unexpected error while loading host vans.')
      } finally {
        setIsLoading(false)
      }
    }

    loadHostVans()

  }, [])

  if (isLoading) {
    return <Loading message="Loading your vans..." />
  }

  if (error) {
    return (
      <div className='status-card error'>
        <h2>Could not load host vans</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-4 px-4 md:px-8 py-4'>
      {
        vans.map(van => <HostVansLayout key={van.id} {...van} />) 
      }
    </div>
  )
}

export default HostVans
