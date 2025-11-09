import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from '@gsap/react'
import './Ending.css'

// html/css
// 2 black box with clipped text

// animation
// bg scale
// boxes move -> show text

// scroll

// how to animate easily

function Ending() {
    useGSAP(() => {
        // gsap.set([".knockout-text-bottom"], { xPercent: -50 });
    })

    return (
      <div className='h-screen relative'>
        {/* Background Image */}
        <div className='h-screen w-screen absolute overflow-hidden'>
            <div className='h-full w-full bg-cover bg-center' style={{ backgroundImage: "url('/walking.jpeg')" }}></div>
        </div>

        {/* Top black box with clipped text */}
        <div className='absolute w-screen h-[46vh] top-0 left-0'>
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
                  className="knockout-text-top"
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
        <div className='absolute w-screen h-[27vh] bottom-0 left-0'>
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
                  className="knockout-text-bottom"
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
