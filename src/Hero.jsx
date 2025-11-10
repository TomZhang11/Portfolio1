import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import './Hero.css'

function Hero() {
  const cloudPositions = [
    { top: "11vh", left: "16vw" },
    { top: "11vh", left: "41vw" },
    { top: "11vh", left: "61vw" },
    { top: "11vh", left: "86vw" },
    { top: "46vh", left: "16vw" },
    { top: "46vh", left: "41vw" },
    { top: "46vh", left: "66vw" },
    { top: "46vh", left: "91vw" },
    { top: "82vh", left: "16vw" },
    { top: "82vh", left: "41vw" },
    { top: "82vh", left: "66vw" },
    { top: "82vh", left: "91vw" },
  ]

  useGSAP(() => {
    gsap.set([".cloud", ".hello-text"], { xPercent: -50, yPercent: -50 });
    
    const width = window.innerWidth;
    const isMobile = width < 768;
    const isMedium = width >= 768 && width < 1024;
    const heroTL = gsap.timeline();
    heroTL.from(".hello-text", {
      y: "-86vh",
    }, 0)
    .from(".mountain-image", {
      scale: 1.4,
    }, 0)
    .to("#cloud1", {
      y: "-40vh",
      x: "-50vw"
    }, 0)
    .to("#cloud2", {
      y: "-50vh",
      x: "-15vw"
    }, 0)
    .to("#cloud3", {
      y: "-50vh",
      x: "15vw"
    }, 0)
    .to("#cloud4", {
      y: "-40vh",
      x: "50vw"
    }, 0)

    .to("#cloud5", {
      x: "-140vw"
    }, 0)
    .to("#cloud6", {
      y: "30vh",
      x: isMobile ? "-140vw" : isMedium ? "-100vw" : "-60vw"
    }, 0)
    .to("#cloud7", {
      y: "30vh",
      x: isMobile ? "130vw" : isMedium ? "90vw" : "50vw"
    }, 0)
    .to("#cloud8", {
      x: "130vw"
    }, 0)
    
    .to("#cloud9", {
      y: "30vh",
    }, 0)
    .to("#cloud10", {
      y: "30vh",
    }, 0)
    .to("#cloud11", {
      y: "30vh",
    }, 0)
    .to("#cloud12", {
      y: "30vh",
    }, 0);

    ScrollTrigger.create({
      animation: heroTL,
      trigger: '#mountain',
      start: 'top top',
      end: '+=3000',
      scrub: 1,
      pin: true,
    })
  });

  return (
      <div className='h-screen relative' id='mountain'>
        {/* background images */}
        <div className='h-screen w-screen absolute overflow-hidden'>
          <div className='h-full w-full bg-cover bg-center mountain-image' style={{ backgroundImage: "url('/man_on_mountain.jpeg')" }}></div>
        </div>
        <div className='h-screen w-screen absolute z-20 overflow-hidden'>
          <div className='h-full w-full bg-cover bg-center mountain-image' style={{ backgroundImage: "url('/man.png')" }}></div>
        </div>
        
         {/* hello text */}
         <h1 className='font-hyhero text-5xl md:text-7xl lg:text-9xl text-red-500 hello-text absolute z-10 top-[35vh] left-[31vw]' style={{ textShadow: '5px -5px 3px white' }}>Hi There</h1>
         <h1 className='font-hyhero text-5xl md:text-7xl lg:text-9xl text-red-500 hello-text absolute z-10 top-[55vh] left-[55vw] whitespace-nowrap' style={{ textShadow: '5px -5px 3px white' }}>This is Tom</h1>

        {/* clouds */}
        <div className='h-screen w-screen overflow-hidden absolute z-30'>
          {cloudPositions.map((position, index) => (
            <Cloud key={index} id={`cloud${index+1}`} top={position.top} left={position.left} />
          ))}
        </div>
      </div>
  )
}

function Cloud({ id, top, left }) {
  return (
    <img id={id} src="/cloud.webp" alt="cloud" className={`h-[50vh] max-w-none absolute cloud`} style={{ top, left }} />
  )
}

export default Hero
