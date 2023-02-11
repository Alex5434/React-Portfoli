import React from 'react'
import arr from '../Datas/designData'

const DesignProject = () => {
  return (
    arr.map((pro)=>{
      return(
        
        <div data-aos="fade-up" data-aos-duration="1500" >
                <div class="card" >
                  <img src={pro.img} alt="image" />
                  <h3>{pro.name}</h3>
                  <div class="btn">        
                  <a  href={pro.figma}><button>Figma</button></a>
                  <a href={pro.live} target="_blank" class="git"><button class="btn-git">Live</button> </a>
                </div>
                </div>
          </div>
      )
      
    })
  )
}

export default DesignProject