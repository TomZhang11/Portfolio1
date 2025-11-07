import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from './Hero'

gsap.registerPlugin(ScrollTrigger)

// on different devices
// cloud overflow hidden

function App() {
  return (
    <div className='h-[5000px]'>
      <Hero />

      {/* <div className="w-64 h-32 bg-black text-white p-4 overflow-hidden text-ellipsis">
        This is a long text that will be cut off inside the black box.
      </div> */}

      {/* ending */}
      <div className='relative h-screen'>
        <div className=''>
          
        </div>

      </div>
  </div>
  )
}

export default App
