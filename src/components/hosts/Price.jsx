import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Price() {
  const van = useOutletContext()

  return (
<div>
  {
  van?(
    <div className=' m-5'>
      <h1 className=' text-2xl font-bold'>The price for {van.name}</h1>
      <p className=' text-2xl'><span className=' text-2xl font-bold'>Price:</span>   ${van.price}</p>
    </div>
  ):(
    <h1 className=' text-2xl font-bold'>Loading...</h1>
  )
}
</div> 
 )
}

export default Price