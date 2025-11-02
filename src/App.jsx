import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

// text size, , orientation, yPos
// clouds
// text from up or down

function App() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hello-text", {
      y: "-42vh",
    }, 0)
    .from(".mountain-image", {
      scale: 1.2,
    }, 0);

    ScrollTrigger.create({
      animation: tl,
      trigger: '#mountain',
      start: 'top top',
      end: '+=2000',
      scrub: true,
      pin: true,
    })
  });

  return (
    <div className='h-[4000px]'>
      <div className='relative' id='mountain'>
        <div className='h-screen w-screen absolute overflow-hidden'>
          <div className='h-full w-full bg-cover bg-center mountain-image' style={{ backgroundImage: "url('/man_on_mountain.jpeg')" }}></div>
        </div>
        <div className='h-screen w-screen absolute z-10 overflow-hidden'>
          <div className='h-full w-full bg-cover bg-center mountain-image' style={{ backgroundImage: "url('/man.png')" }}></div>
        </div>
        
        <h1 className='font-hyhero text-9xl text-red-500 text-center w-screen hello-text absolute z-5 mt-[26vh]' style={{ textShadow: '5px -5px 3px white' }}>Hello. This is Tom.</h1>
      </div>
  </div>
  )
}

export default App
