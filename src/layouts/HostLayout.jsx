import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
function HostLayout() {
  return (
    <div>
      <h1>This the hostLoyout section </h1>
      <Outlet/>
    </div>
  )
}

export default HostLayout
