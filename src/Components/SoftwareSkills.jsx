import React from 'react'
import soft from '../Datas/software'

const SoftwareSkills = () => {
    return(
        soft.map((skill)=>{
            return(
            <div class="tool" data-aos="fade-right" data-aos-duration="1500">
                <p>{skill.name}</p>
                <div class="progress">
                    <div class="indi" style={{width:skill.width}}></div>
                </div>
            </div>
            )
            
        })
        
    )
}

export default SoftwareSkills