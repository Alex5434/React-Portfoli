import React from 'react'
import { Icon } from '@iconify/react'

const Home = () => {
  return (
    <div id="home" className="back section">
        <div className="content">
        <h3>Welcome to my Portfolio</h3>
        <h1>Hi, I'm Alex <span className="ran"></span> </h1>
    
        <button className="explore" onclick="window.location.href='#about'" >Explore <Icon className="arr" icon="mdi:arrow-up" /> </button>
        <button className="backtotop" onclick="document.documentElement.scrollTop=0"><iconify-icon icon="mdi:arrow-up"></iconify-icon></button>
    </div>
  </div>
  )
}

export default Home