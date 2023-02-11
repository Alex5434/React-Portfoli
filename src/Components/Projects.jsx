import React from 'react'
import projects from '../Datas/data'

const Projects = () => {

  const arr = projects;
  return (
    arr.map((pro)=>{
      return(
        
        <div data-aos="fade-up" data-aos-duration="1500" >
                <div class="card" >
                  <img src={pro.img} alt="image" />
                  <h3>{pro.name}</h3>
                  <div class="languages">
                    {pro.languages.map((lan)=>{
                      return(
                        <p>{lan}</p>
                      )
                    })}
                    
                  </div>
                  <div class="btn">        
                  <a  href={pro.live}><button>Readmore</button></a>
                  <a href={pro.github} target="_blank" class="git"><button class="btn-git">GitHub <iconify-icon icon="mdi:link-variant"></iconify-icon></button> </a>
                </div>
                </div>
          </div>
      )
      
    })
  )
}

export default Projects