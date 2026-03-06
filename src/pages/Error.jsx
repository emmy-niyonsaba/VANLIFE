import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  const error = useRouteError()
  return (
    <div>
      <h1>{error.message}</h1>
      <h1>{error.status}</h1>
    <Link to="/">Go back to home</Link>
    </div>
  )
}

export default Error
