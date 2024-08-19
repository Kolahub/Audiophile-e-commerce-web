// import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function GoBack() {
    const location = useLocation()
    const locationBack = location.pathname.split('/')
  return (
    <Link to={`/${locationBack[1]}`}>Go Back</Link>
  )
}

export default GoBack