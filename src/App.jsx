import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from './Hero'
import Experiences from './Experiences'
import Ending from './Ending'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <div>
      <Hero />
      <Experiences />
      <Ending />
  </div>
  )
}

export default App
