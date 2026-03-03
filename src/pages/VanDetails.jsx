import React from 'react'
import { useParams } from 'react-router-dom'
import VanDetailsLayout from '../layouts/VanDetailsLayout'
import { useState,useEffect } from 'react'

function VanDetails() {
  const {id} = useParams()
  const [van, setVan] = useState(null)
    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => {
            setVan(data.van)
            })
    }, [id])

  return (
    <div>
      <VanDetailsLayout van={van}></VanDetailsLayout>
    </div>
  )
}

export default VanDetails
