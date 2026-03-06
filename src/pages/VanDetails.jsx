import React from 'react'
import { useLoaderData, redirect } from 'react-router-dom'
import VanDetailsLayout from '../layouts/VanDetailsLayout'
export const loader = async ({ params }) => {
  const isLoggedIn = true
  if (!isLoggedIn) {
    return redirect('/login')
  }

  // Fetch van details from API
  const response = await fetch(`/api/vans/${params.id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch van details.')
  }
  const data = await response.json()
  // Ensure we return a single van object
  return data.van || data.vans?.[0] || null
}
function VanDetails() {
  const van = useLoaderData()


  // If no van is returned, show a friendly message
  if (!van) {
    return (
      <div className="status-card error">
        <h2>Van not found</h2>
      </div>
    )
  }

  return (
    <div>
      <VanDetailsLayout van={van} />
    </div>
  )
}

export default VanDetails