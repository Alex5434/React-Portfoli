import React from 'react'
import DesignProject from './DesignProject'
import Projects from './Projects'

const TotalProject = () => {
  return (
    <div className='projects section' id='projects'>
        <h1>Projects</h1>
        <h2 className='indipro'>DEVELOPMENT PROJECTS</h2>
        <div className='cards'>
        <Projects/>
        </div>
        <h2 className='indipro'>DESIGN PROJECTS</h2>
        <div className='cards'>
        <DesignProject/>
        </div>
    </div>
  )
}

export default TotalProject