import { useState, lazy, Suspense } from 'react'
import Sidenav from './components/Sidenav'
// import Main from './components/Main'
import Resume from './components/Resume'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

const Main = lazy(() => import('./components/Main'));

function App() {

  return (
    <div>
      <Sidenav />

      <Suspense fallback={<div>Loading...</div>}>
      <Main />
      </Suspense>
      
      <About />
      {/* <Resume /> */}
      <Projects />
      <Contact />
      
    </div>
        
  )
}

export default App
