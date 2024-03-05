import React from 'react'
import { useLocation } from 'react-router-dom';

const HomePage = () => {
    const location = useLocation();
    const username = location.state?.username || 'Guest';

  return (
    <div>
        <h2 style={{color:'green', background:'yellow'}}>Welcome, {username} !</h2>
    </div>
  )
}

export default HomePage