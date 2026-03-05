import React from 'react'
import { useLoaderData, redirect } from 'react-router-dom'
import VanDetailsLayout from '../layouts/VanDetailsLayout'

/* -----------------------------
   Loader function for VanDetails
--------------------------------*/
export const loader = async ({ params }) => {
  // Example auth check
  const isLoggedIn = true

  // Redirect if user is not logged in
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

/* -----------------------------
   VanDetails Component
--------------------------------*/
function VanDetails() {
  const van = useLoaderData() // get the data from loader

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