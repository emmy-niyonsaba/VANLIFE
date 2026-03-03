
import React from 'react'

import {useParams,Outlet ,NavLink} from 'react-router-dom'
import HostVanDetailsLayout from '../layouts/HostVanDetailsLayout'
import { useEffect,useState } from 'react'
function HostVanDetatils() {
  const [van,setVan] = useState([])
  // console.log(van);
  const {id} = useParams()
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))  
      
  }, [id])
   const linkClass = ({ isActive }) =>
    `font-bold hover:underline hover:bg-blue-200 p-2 rounded-md ${isActive ? "text-green-500" : ""
    }`;
  return (
    <div>
      {
        van.map(van => <HostVanDetailsLayout key={van.id} {...van} />)
      }
         <div className=' '>
          <NavLink to={`details`} className={linkClass}>Details</NavLink>
          <NavLink to={`photos`} className={linkClass}>Photos</NavLink>
          <NavLink to={`price`} className={linkClass}>Price</NavLink>
        </div>
      <Outlet></Outlet>
    </div>
  )
}

export default HostVanDetatils
