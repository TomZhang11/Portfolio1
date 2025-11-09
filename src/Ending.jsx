import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import './Ending.css'

function Ending() {
    useGSAP(() => {
        gsap.set(".knockout-text-bottom", { x: "23vw" });

        const endingTL = gsap.timeline();
        endingTL
            .to(".walking-image", { scale: 1.4, duration: 5, ease: "linear" })
            .to(".walking-image", { scale: 1.0, duration: 5, ease: "linear" })
            .from(".knockout-box-top", { y: "-100%", duration: 10, ease: "linear" }, 0)
            .from(".knockout-box-bottom", { y: "100%", duration: 10, ease: "linear" }, 0)
            .from(".knockout-text-mask-top", { fillOpacity: 0, duration: 0.5, ease: "linear" }, 10.5)
            .from(".knockout-text-mask-bottom", { fillOpacity: 0, duration: 0.5, ease: "linear" }, 12);

        ScrollTrigger.create({
            animation: endingTL,
            trigger: '#ending',
            start: 'top top',
            end: '+=7500',
            scrub: 1,
            pin: true,
        });
    })

    return (
      <div className='h-screen relative overflow-hidden' id='ending'>
        {/* Background Image */}
        <div className='h-screen w-screen absolute overflow-hidden'>
            <div className='h-full w-full bg-cover bg-center walking-image' style={{ backgroundImage: "url('/walking.jpeg')" }}></div>
        </div>

        {/* Top black box with clipped text */}
        <div className='absolute w-screen h-[46vh] top-0 left-0 knockout-box-top'>
          <svg viewBox="0 0 1920 460" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="textKnockoutTop">
                {/* White rectangle shows the black box */}
                <rect width="100%" height="100%" fill="white" />
                {/* Black text creates the knockout (transparent area) */}
                <text 
                  x="50%" 
                  y="73%" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  className="knockout-text-top knockout-text-mask-top"
                  style={{ fontFamily: 'HYDiShengYingXiongTi, sans-serif' }}
                  fill="black"
                >
                  The road ahead
                </text>
              </mask>
            </defs>
            {/* Black rectangle with the mask applied */}
            <rect width="100%" height="100%" fill="black" mask="url(#textKnockoutTop)" />
          </svg>
        </div>

        {/* Bottom black box with clipped text */}
        <div className='absolute w-screen h-[27vh] bottom-0 left-0 knockout-box-bottom'>
          <svg viewBox="0 0 1920 270" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="textKnockoutBottom">
                {/* White rectangle shows the black box */}
                <rect width="100%" height="100%" fill="white" />
                {/* Black text creates the knockout (transparent area) */}
                <text 
                  x="50%" 
                  y="32%" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  className="knockout-text-bottom knockout-text-mask-bottom"
                  style={{ fontFamily: 'HYDiShengYingXiongTi, sans-serif' }}
                  fill="black"
                >
                  is bright
                </text>
              </mask>
            </defs>
            {/* Black rectangle with the mask applied */}
            <rect width="100%" height="100%" fill="black" mask="url(#textKnockoutBottom)" />
          </svg>
        </div>
      </div>
    )
}

export default Ending
