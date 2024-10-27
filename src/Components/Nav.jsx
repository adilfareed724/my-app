import React from 'react'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
      </nav>
    </div>
  )
}
