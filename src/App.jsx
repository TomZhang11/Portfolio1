import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from './Hero'
import Ending from './Ending'

gsap.registerPlugin(ScrollTrigger)

// sections transition, clouds overflow
// middle secitons

function App() {
  return (
    <div className='bg-[#92bfc4]'>
      <Hero />

      <div className='h-screen'></div>

      <Ending />
  </div>
  )
}

export default App
