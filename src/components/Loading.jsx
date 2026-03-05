import React from 'react'
import { ClipLoader } from 'react-spinners'

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="loading-root">
      <ClipLoader color="#16a34a" size={40} aria-label="loading" />
      <div className="loading-msg">{message}</div>
    </div>
  )
}
