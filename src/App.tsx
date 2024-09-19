import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Technologies from './components/Technologies'

function App() {

  return (
    <div className=''>
      <div className='fixed inset-0 -z-10'>
        <div className='relative h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className='container text-white'>
        <Navbar />
        <Hero/>
        <Technologies/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  )
}


export default App
