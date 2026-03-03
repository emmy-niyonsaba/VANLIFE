import React from 'react'
import { useParams } from 'react-router-dom'
import VanDetailsLayout from '../layouts/VanDetailsLayout'

function VanDetails() {
  const params = useParams()
  console.log(params)
  return (
    <div>
      <VanDetailsLayout></VanDetailsLayout>
    </div>
  )
}

export default VanDetails
