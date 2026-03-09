import { Suspense } from 'react'
import { useLoaderData, redirect, Await } from 'react-router-dom'
import HostVansLayout from '../layouts/HostVansLayout'
import Loading from '../components/Loading'

// Defer utility for React Router v7
function defer(data) {
  return data
}

const loadHostVans = async () => {
  const response = await fetch("/api/host/vans")
  if (!response.ok) {
    throw new Error('Failed to fetch host vans.')
  }
  const data = await response.json()
  return data.vans
}

export function loader() {
  const isLogedIn = true

  if (!isLogedIn) {
    return redirect('/login')
  }
  
  return defer({ vans: loadHostVans() })
}

function HostVans() {
  const dataPromise = useLoaderData()

  return (
    <Suspense fallback={<Loading message="Loading Host Vans..." />}>
      <Await resolve={dataPromise.vans}>
        {(vans) => (
          <div className='flex flex-col gap-4 px-4 md:px-8 py-4'>
            {vans.map(van => <HostVansLayout key={van.id} {...van} />)}
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export default HostVans
