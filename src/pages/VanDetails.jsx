import React from 'react'
import { useParams } from 'react-router-dom'
import VanDetailsLayout from '../layouts/VanDetailsLayout'
import { useState,useEffect } from 'react'
import Loading from '../components/Loading'

function VanDetails() {
  const {id} = useParams()
  const [van, setVan] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
    useEffect(() => {
        const loadVan = async () => {
          try {
            setIsLoading(true)
            setError('')
            const response = await fetch(`/api/vans/${id}`)
            if (!response.ok) {
              throw new Error('Failed to fetch van details.')
            }
            const data = await response.json()
            setVan(data.van || null)
          } catch (err) {
            setError(err.message || 'Unexpected error while loading van details.')
          } finally {
            setIsLoading(false)
          }
        }

        loadVan()
    }, [id])

  if (isLoading) {
    return <Loading message="Loading van details..." />
  }

  if (error) {
    return (
      <div className='status-card error'>
        <h2>Could not load van details</h2>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div>
      <VanDetailsLayout van={van}></VanDetailsLayout>
    </div>
  )
}

export default VanDetails
