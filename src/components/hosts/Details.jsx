import React from 'react'
import { useOutletContext } from 'react-router-dom'
// The Details component uses the useOutletContext hook to access the van data passed down from the parent route
function Details() {
  const van = useOutletContext()
  
  return (
    // The component renders the details of the van, including its name, description, type, and visibility
    <div className=' m-5 flex flex-col gap-5 '>
      <h1 className=' text-2xl font-bold'>Details about the van</h1>
      <p className='text-2xl'><span className=' text-2xl font-bold'>Name:</span>   {van.name}</p>
      <p className=' mt-5 text-xl'><span className=' text-2xl font-bold'>Description:</span> {van.description}</p>
      <p className=' mt-5 text-xl'><span className=' text-2xl font-bold'>Type:</span> {van.type}</p>
      <p className=' mt-5 text-xl'><span className=' text-2xl font-bold'>Visibility:</span>Public</p>

    </div>
  )
}

export default Details
