import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import TotalProject from './Components/TotalProject';
import './index.css'
import TotalSkills from './Components/TotalSkills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {

  return <div className='App container'>
    <Nav/>
    <Home/>
    <About/>
    <TotalProject/>
    <TotalSkills/>
    <Contact/>
    <Footer/>
  </div>
}

export default App;
