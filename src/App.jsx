import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from './Hero'
import Ending from './Ending'

gsap.registerPlugin(ScrollTrigger)

// on different devices
// cloud overflow hidden

function App() {
  return (
    <div className='h-[5000px]'>
      <Hero />

      <div className='h-screen'></div>

      <Ending />
  </div>
  )
}

export default App
