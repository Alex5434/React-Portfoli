import React from 'react'
import photo from '../images/dp.jpeg'
import resume from '../document/ALEXANDER E.pdf'

const About = () => {
  return (
    <div className="about section" id="about">
    <h1 data-aos="fade-up" data-aos-duration="1300">About me</h1>
    <div className="sec" >
      <img src={photo} alt="profileimage" data-aos="fade-up" data-aos-duration="1400" />
      <div className="para" data-aos="fade-up" data-aos-duration="1600" >
      <p>Computer Science Engineer to get myself updated with the upcoming technologies.
         To make use of my interpersonal and communication skills to achieve goals of a company that focuses.
          Looking for a role where I can use my analytical skills to enhance my career. 
        </p>
        <a  href={resume} download>
         <button >RESUME 
        </button> </a>
        </div>
    </div>
  </div>
  )
}

export default About