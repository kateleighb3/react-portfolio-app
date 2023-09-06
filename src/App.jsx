import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'


function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Resume />
      <Projects />
    </div>
        
  )
}

export default App
