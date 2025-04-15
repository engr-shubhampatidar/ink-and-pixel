import { useState } from 'react';
import Navbar from './compoents/Navbar';
import Home from './compoents/Home';
import Techs from './compoents/Techs';
import About from './compoents/About';
function App() {

  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Techs />
        <About />
      </div>
    </>
  )
}

export default App
