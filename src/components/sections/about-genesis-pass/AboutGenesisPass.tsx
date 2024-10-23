import { useState, useEffect, useCallback } from 'react'
import lady from '@/assets/img/about-genesis-pass/lady-2560.webp'
import element1 from '@/assets/img/about-genesis-pass/element1.png'
import WholeFrame from '@/components/frame/GenesisFrame'
import { useMediaQuery } from '@/components/hooks/useMediaQuery'

function AboutGenesisPassContent({ isMobile }: { isMobile: boolean }) {
  const [topPosition, setTopPosition] = useState('top-0')

  const handleResize = useCallback(() => {
    setTopPosition(window.innerHeight > 1000 ? 'top-[10%]' : 'top-[5%]')
  }, [])

  useEffect(() => {
    handleResize()
    const resizeListener = () => {
      requestAnimationFrame(handleResize)
    }
    window.addEventListener('resize', resizeListener)
    return () => window.removeEventListener('resize', resizeListener)
  }, [handleResize])

  return (
    <div className="relative z-0 h-screen bg-black md:h-screen lg:h-[200vh]">
      <WholeFrame />
      <div className="relative size-full">
        {/* <img
          srcSet="
    /images/background-small.jpg 600w,
    /images/background-medium.jpg 1200w,
    /images/background-large.jpg 1920w
  "
          sizes="(max-width: 600px) 600px, 
         (max-width: 1200px) 1200px, 
         1920px"
          src="/images/background-large.jpg"
          alt="Background Image"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        /> */}
        <img
          src={lady}
          alt="Lady"
          className="absolute left-1/2 z-0 size-full -translate-x-1/2 object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 z-10">
          <div
            className={`flex flex-col ${topPosition} ${
              isMobile
                ? 'mx-auto w-full max-w-[400px] items-center px-4'
                : 'absolute right-[5%] w-1/2 p-6 lg:right-[20%] lg:w-1/3'
            }`}
          >
            <h2
              className={`font-euroblack text-red mb-5 mt-10 leading-tight md:mt-10 lg:mt-0 ${
                isMobile
                  ? 'text-center text-4xl'
                  : 'text-left text-4xl md:text-5xl lg:text-[70px]'
              }`}
            >
              HEADLINE HERE
            </h2>
            <div
              className={`mb-5 font-eurostile text-white ${
                isMobile
                  ? 'text-center text-base'
                  : 'text-left text-lg lg:text-xl'
              }`}
            >
              <p className="mb-2">Lorum ipsum Lorum ipsum Lorum ipsum</p>
              <p>Lorum ipsum Lorum ipsum Lorum ipsum</p>
            </div>
            {!isMobile && (
              <img src={element1} className="w-16 lg:w-20" alt="Element" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutGenesisPass() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return <AboutGenesisPassContent isMobile={isMobile} />
}
