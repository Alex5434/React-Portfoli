import { Icon } from '@iconify/react'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <div class="fooder">
    <div class="fi">
      <h1>Alex <span>Tech</span></h1>
      <div class="logo">


        <a href="https://twitter.com/Alexand06656824">
        <div class="bor">
          <Icon class="ico" icon="mdi:twitter"/>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/alexander-e-005a16202/">
        <div class="bor">
          <Icon class="ico" icon="akar-icons:linkedin-fill"/>
        </div>
        </a>
        <a href="https://github.com/Alex5434">
        <div class="bor">
          <Icon class="ico git" icon="bxl:github"/>
        </div>
        </a>
        <a href="https://www.instagram.com/alex_54349/">
        <div class="bor">
          <Icon class="ico" icon="akar-icons:instagram-fill"/>
        </div>
      </a>
      </div>
    </div>
    <div class="se">
      <h2>Design and developed by <span>Alexander..</span></h2>
    </div>
    <div class="th">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default Footer