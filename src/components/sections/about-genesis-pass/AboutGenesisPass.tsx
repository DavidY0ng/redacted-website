import lady from '@/assets/img/about-genesis-pass/lady.webp'
import element1 from '@/assets/img/about-genesis-pass/element1.png'
import WholeFrame from '@/components/frame/GenesisFrame'
import { useState, useEffect } from 'react'

function DesktopAboutGenesisPass() {
  const [topPosition, setTopPosition] = useState('top-0')

  useEffect(() => {
    function handleResize() {
      if (window.innerHeight > 1000) {
        setTopPosition('top-[10%]')
      } else {
        setTopPosition('top-0')
      }
    }

    // Call the function on initial load
    handleResize()

    // Add resize event listener
    window.addEventListener('resize', handleResize)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="relative z-0 h-screen bg-black">
      <WholeFrame />
      <div className="flex h-screen items-center justify-center">
        <div className="relative h-screen w-full max-w-[1600px]">
          {/* Centering the image */}
          <img
            src={lady}
            className="absolute left-1/2 z-0 h-screen w-full max-w-[1600px] -translate-x-1/2"
          />

          {/* Keeping the headline div unchanged */}
          <div
            className={`absolute right-[20%] z-10 flex w-1/3 flex-col md:right-[5%] md:w-1/2 ${topPosition}`}
          >
            <div className="font-euroblack text-red mb-5 text-left leading-none md:text-[45px] lg:text-[6vw] xl:text-[70px]">
              HEADLINE HERE
            </div>
            <div className="font-eurostile mb-5 text-left text-white md:text-[18px] lg:text-[2vw] xl:text-[24px]">
              <p>Lorum ipsum Lorum ipsum Lorum ipsum</p>
              <p>Lorum ipsum Lorum ipsum Lorum ipsum</p>
            </div>
            <img src={element1} className="w-[70px]" alt="Loading" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutGenesisPass() {
  return (
    <>
      <DesktopAboutGenesisPass />
    </>
  )
}
