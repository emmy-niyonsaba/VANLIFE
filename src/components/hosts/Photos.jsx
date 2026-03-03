import React from 'react'
import { useOutletContext } from 'react-router-dom'
function Photos() {
  const van = useOutletContext()
  
  return (
    <div className=' m-5'>
     
      {van?(
               <div>
                 <h1 className=' text-2xl font-bold'>The photos for {van.name}</h1>
                    <img src={van.imageUrl} alt={van.name} />
               </div>
          ):<h1 className=' text-2xl font-bold'>Loading...</h1>}
    </div>
  )
}

export default Photos
