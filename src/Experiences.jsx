// goal:
// data structure representing experiences
// each experience containing media, title, text
// each year has multiple experiences

// animation, scroll

const experiencesByYear = {
    2025: []
}

function Experiences() {
    return (
        <div>
            {/* Buffer */}
            <div className='h-[10vh] w-screen relative z-10' style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.75) 100%)'
            }}></div>

            {/* Main Content */}
            <div className='h-screen relative'>
                <div className='w-screen h-[50vh] absolute bottom-0 overflow-hidden bg-cover bg-center' style={{ backgroundImage: "url('/walking_flipped.jpg')" }}></div>
                <div className='absolute inset-0 pointer-events-none' style={{
                    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.75) 0%, black 50%, rgba(0, 0, 0, 0.7) 95%, rgba(0, 0, 0, 0.5) 100%)'
                }}></div>
            </div>
        </div>
    )
}

export default Experiences
