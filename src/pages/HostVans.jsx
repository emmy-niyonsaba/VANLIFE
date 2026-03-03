import React from 'react'
import HostVansLayout from '../layouts/HostVansLayout'
import { useEffect,useState } from 'react'
function HostVans() {
  const [vans,setVans] = useState([])
  // console.log(vans)
  useEffect(() => {
    fetch("/api/host/vans")
      .then(res => res.json())
      .then(data => setVans(data.vans))

  }, [])
  return (
    <div className=' flex flex-col gap-5'>
      {
        vans.map(van => <HostVansLayout key={van.id} {...van} />) 
      }
    </div>
  )
}

export default HostVans
