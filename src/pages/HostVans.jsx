import React, { use } from 'react'
import{useLoaderData} from 'react-router-dom' 
import HostVansLayout from '../layouts/HostVansLayout'

    const loadHostVans = async () => {

        const response = await fetch("/api/host/vans")
        if (!response.ok) {
          throw new Error('Failed to fetch host vans.')
        }
        const data = await response.json()

       return data.vans
      
    }
    export function loader() {
      return loadHostVans()
    }


function HostVans() {

  const vans = useLoaderData()
  // console.log(vans)

  return (
    <div className='flex flex-col gap-4 px-4 md:px-8 py-4'>
      {
        vans.map(van => <HostVansLayout key={van.id} {...van} />) 
      }
    </div>
  )
}

export default HostVans
