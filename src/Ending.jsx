
function Ending() {
    return (
      <div className='h-screen relative'>
        <div className='h-screen w-screen absolute overflow-hidden'>
            <div className='h-full w-full bg-cover bg-center' style={{ backgroundImage: "url('/man_on_mountain.jpeg')" }}></div>
        </div>

        {/* <div className="text-white p-4 overflow-hidden text-ellipsis">
            This is a long text that will be cut off inside the black box.
        </div> */}
        {/* <div className='h-[46vh] w-screen absolute bg-black text-center font-hyhero text-9xl text-transparent bg-clip-text'>
            The road ahead
        </div> */}
        <div className='h-[46vh] w-[100vw] absolute'>
            <svg viewBox="0 0 1600 400" className="w-[100vw] h-full">
                <mask id="knockout">
                    <rect width="100%" height="100%" fill="white" />
                    <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontFamily="var(--font-hyhero)" fontSize="160" fontWeight="700" fill="black">
                        The road ahead
                    </text>
                </mask>
                <rect width="100vw" height="100%" fill="black" mask="url(#knockout)" className="100vw"/>
            </svg>
        </div>
        <div className='h-[27vh] w-screen absolute top-[73vh] bg-black'>
            is bright
        </div>
      </div>
    )
}

// {/* <div className="absolute w-screen h-[46vh]">
//   <svg viewBox="0 0 1600 400" className="w-full h-full">
//     <mask id="m">
//       <rect width="100%" height="100%" fill="white" />
//       <text x="50%" y="50%" dy=".35em" textAnchor="middle" fontSize="160" fill="black">
//         The road ahead
//       </text>
//     </mask>
//     <rect width="100%" height="100%" fill="black" mask="url(#m)" />
//   </svg>
// </div> */}
 function KnockoutBox() {
    return (

      <div className="absolute w-screen h-[46vh]">
        <svg viewBox="0 0 1600 400" className="w-full h-full">
          <rect width="100%" height="100%" fill="black" mask="url(#knockout)" />
        </svg>
      </div>
    );
  }
  

export default Ending
