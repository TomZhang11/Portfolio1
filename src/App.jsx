import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

// orientation

function App() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".hello-text", {
      y: "-86vh",
    }, 0)
    .from(".mountain-image", {
      scale: 1.2,
    }, 0)
    .to(".cloud1", {
      y: "-40vh",
      x: "-100vh"
    }, 0)
    .to(".cloud2", {
      y: "-50vh",
      x: "-30vh"
    }, 0)
    .to(".cloud3", {
      y: "-50vh",
      x: "30vh"
    }, 0)
    .to(".cloud4", {
      y: "-40vh",
      x: "100vh"
    }, 0)

    .to(".cloud5", {
      x: "-100vh"
    }, 0)
    .to(".cloud6", {
      y: "30vh",
      x: "-120vh"
    }, 0)
    .to(".cloud7", {
      y: "30vh",
      x: "100vh"
    }, 0)
    .to(".cloud8", {
      x: "100vh"
    }, 0)
    
    .to(".cloud9", {
      y: "30vh",
    }, 0)
    .to(".cloud10", {
      y: "30vh",
    }, 0)
    .to(".cloud11", {
      y: "30vh",
    }, 0)
    .to(".cloud12", {
      y: "30vh",
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
        {/* background images */}
        <div className='h-screen w-screen absolute overflow-hidden'>
          <div className='h-full w-full bg-cover bg-center mountain-image' style={{ backgroundImage: "url('/man_on_mountain.jpeg')" }}></div>
        </div>
        <div className='h-screen w-screen absolute z-20 overflow-hidden'>
          <div className='h-full w-full bg-cover bg-center mountain-image' style={{ backgroundImage: "url('/man.png')" }}></div>
        </div>
        
        {/* hello text */}
        <h1 className='font-hyhero text-9xl text-red-500 text-center w-screen hello-text absolute z-10 top-[26vh]' style={{ textShadow: '5px -5px 3px white' }}>Hello. This is Tom.</h1>

        {/* clouds */}
        <div className='h-screen w-screen overflow-hidden absolute z-30'>
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[-15vh] left-[-20vh] cloud1' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[-15vh] left-[30vh] cloud2' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[-15vh] left-[70vh] cloud3' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[-15vh] left-[120vh] cloud4' />

          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[20vh] left-[-20vh] cloud5' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[20vh] left-[30vh] cloud6' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[20vh] left-[80vh] cloud7' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[20vh] left-[130vh] cloud8' />

          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[56vh] left-[-20vh] cloud9' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[56vh] left-[30vh] cloud10' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[56vh] left-[80vh] cloud11' />
          <img src="/cloud.webp" alt="cloud" className='h-[50vh] max-w-none absolute top-[56vh] left-[130vh] cloud12' />
        </div>
      </div>
  </div>
  )
}

export default App
