import React from 'react'
import tech from '../Datas/tech'

const TechSkills = () => {
    return(
        tech.map((skill)=>{
            return(
            <div class="skill" data-aos="fade-right" data-aos-duration="1500">
                <p>{skill.name}</p>
                <div class="progress">
                    <div class="indi" style={{width:skill.width}}></div>
                </div>
            </div>
            )
            
        })
        
    )
}

export default TechSkills