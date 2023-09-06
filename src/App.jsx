import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'


function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Resume />
      <Projects />
      <Contact />
      
    </div>
        
  )
}

export default App
