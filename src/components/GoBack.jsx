// import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function GoBack() {
    const location = useLocation()
    console.log(location);
    
    const locationBack = location.pathname.split('/')
    console.log(locationBack.length);
    
  return (
    <Link to='..'>Go Back</Link>
  )
}

export default GoBack