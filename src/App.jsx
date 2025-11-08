import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from './Hero'
import Ending from './Ending'

gsap.registerPlugin(ScrollTrigger)

// on different devices font wont display
// cloud overflow hidden

function App() {
  return (
    <div className='h-[5000px] bg-[#92bfc4]'>
      <Hero />

      <div className='h-screen'></div>

      <Ending />
  </div>
  )
}

export default App
