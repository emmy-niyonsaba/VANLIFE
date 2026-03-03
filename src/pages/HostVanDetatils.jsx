
import React from 'react'
import { data, useParams } from 'react-router-dom'
import HostVanDetailsLayout from '../layouts/HostVanDetailsLayout'
import { useEffect,useState } from 'react'
function HostVanDetatils() {
  const [van,setVan] = useState([])
  console.log(van);
  const {id} = useParams()
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))  
      
  }, [id])
 
  return (
    <div>
      {
        van.map(van => <HostVanDetailsLayout key={van.id} {...van} />)
      }
    </div>
  )
}

export default HostVanDetatils
