import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from './Hero'
import Ending from './Ending'

gsap.registerPlugin(ScrollTrigger)

// sections transition
// middle secitons

function App() {
  return (
    <div>
      <Hero />

      <div className='h-screen'></div>

      <Ending />
  </div>
  )
}

export default App
