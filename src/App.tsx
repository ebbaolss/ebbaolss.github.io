import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'


function App() {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'> 
          <Header />
        </div>
        <About />
        <Experience />
        <Education />
        <Projects />
      </div>
    </BrowserRouter>
  )
}

export default App
