import React from 'react'
import SoftwareSkills from './SoftwareSkills'
import TechSkills from './TechSkills'

const TotalSkills = () => {
  return (
    <div class="skills section" id="skills">
        <h1>skills</h1>
        <div class="program">
            <div class="head">
                <div></div>
            <h3>Programming & Scripting</h3>
            </div>
            <TechSkills/>
            </div>
            <div class="tools">
                <div class="head">
                    <div></div>
                <h3>Tools & software</h3>
                </div>
                <SoftwareSkills/>
        </div>
    </div>
  )
}

export default TotalSkills