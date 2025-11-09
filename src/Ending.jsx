import './Ending.css'

// html/css
// 2 black box with clipped text

// animation
// bg scale
// boxes move -> show text

// scroll

// how to animate easily
// add the other one

function Ending() {
    useGSAP(() => {
        // 
    })

    return (
      <div className='h-screen relative'>
        {/* Background Image */}
        <div className='h-screen w-screen absolute overflow-hidden'>
            <div className='h-full w-full bg-cover bg-center' style={{ backgroundImage: "url('/walking.jpeg')" }}></div>
        </div>

        {/* Black box with clipped text */}
        <div className='absolute w-screen h-[46vh] top-0 left-0'>
          <svg viewBox="0 0 1920 460" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <mask id="textKnockout">
                {/* White rectangle shows the black box */}
                <rect width="100%" height="100%" fill="white" />
                {/* Black text creates the knockout (transparent area) */}
                <text 
                  x="50%" 
                  y="73%" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  className="knockout-text"
                  style={{ fontFamily: 'HYDiShengYingXiongTi, sans-serif' }}
                  fill="black"
                >
                  The road ahead
                </text>
              </mask>
            </defs>
            {/* Black rectangle with the mask applied */}
            <rect width="100%" height="100%" fill="black" mask="url(#textKnockout)" />
          </svg>
        </div>
      </div>
    )
}

export default Ending
