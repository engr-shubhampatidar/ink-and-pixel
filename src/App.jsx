import { useState } from 'react';
import Home from './compoents/Home';
import Techs from './compoents/Techs';
import Projects from './compoents/Projects';
import About from './compoents/About';
import Skills from './compoents/Skills';
import Footer from './compoents/Footer';
function App() {

  return (
    <>
      <div>
        <Home />
        <Techs />
        <Projects/>
        <About />
        <Skills/>
        <Footer/>
      </div>
    </>
  )
}

export default App
