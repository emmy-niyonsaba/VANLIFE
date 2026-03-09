import { Suspense } from 'react'
import { Outlet, NavLink, useLoaderData, redirect, Await } from 'react-router-dom'
import HostVanDetailsLayout from '../layouts/HostVanDetailsLayout'
import Loading from '../components/Loading'

// Defer utility for React Router v7
function defer(data) {
  return data
}

const loadHostVanDetails = async (id) => {
  const response = await fetch(`/api/host/vans/${id}`)

  if (!response.ok) {
    throw new Error('Failed to fetch host van details.')
  }

  const data = await response.json()
  return data.van
}

export async function loader({ params }) {
  const isLogedIn = true

  if (!isLogedIn) {
    return redirect('/login')
  }

  return defer({ van: loadHostVanDetails(params.id) })
}

function HostVanDetatils() {
  const dataPromise = useLoaderData()

  const linkClass = ({ isActive }) =>
    `font-bold hover:underline hover:bg-blue-200 p-2 rounded-md text-sm md:text-base ${
      isActive ? "text-green-500" : ""
    }`

  return (
    <Suspense fallback={<Loading message="Loading Host Van Details..." />}>
      <Await resolve={dataPromise.van}>
        {(van) => (
          <div className='max-w-5xl mx-auto w-full px-4 md:px-8'>
            {[van].map(v => (
              <HostVanDetailsLayout key={v.id} {...v} />
            ))}

            <div className='flex flex-wrap gap-2 md:gap-3'>
              <NavLink to="details" className={linkClass}>Details</NavLink>
              <NavLink to="photos" className={linkClass}>Photos</NavLink>
              <NavLink to="price" className={linkClass}>Price</NavLink>
            </div>

            {van && <Outlet context={van} />}
          </div>
        )}
      </Await>
    </Suspense>
  )
}

export default HostVanDetatils