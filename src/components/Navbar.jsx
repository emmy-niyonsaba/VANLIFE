import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? 'active' : ''}`

  return (
    <header className="nav-root">
      <div className="nav-inner">
        <NavLink to='/' className="brand"><h1>#VANLIFE</h1></NavLink>
        <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <span className="hamburger" />
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
          <NavLink to="/hosts" className={linkClass}>Hosts</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/vans" className={linkClass}>Vans</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
