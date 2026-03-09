import { Suspense } from 'react'
import { useLoaderData, redirect, Await } from 'react-router-dom'
import VanDetailsLayout from '../layouts/VanDetailsLayout'
import Loading from '../components/Loading'

// Defer utility for React Router v7
function defer(data) {
  return data
}

const loadVanDetails = async (id) => {
  const response = await fetch(`/api/vans/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch van details.')
  }
  const data = await response.json()
  return data.van || data.vans?.[0] || null
}

export const loader = async ({ params }) => {
  const isLoggedIn = true
  if (!isLoggedIn) {
    return redirect('/login')
  }

  return defer({ van: loadVanDetails(params.id) })
}

function VanDetails() {
  const dataPromise = useLoaderData()

  return (
    <Suspense fallback={<Loading message="Loading Van Details..." />}>
      <Await resolve={dataPromise.van}>
        {(van) => {
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
        }}
      </Await>
    </Suspense>
  )
}

export default VanDetails