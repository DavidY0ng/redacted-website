import jiyanyuMobile from '@/assets/img/sections/squad/mobile/squad_people_1.png'
import jiyanyuDesktop from '@/assets/img/sections/squad/desktop/squad_people_1.png'
import alphaPrinceMobile from '@/assets/img/sections/squad/mobile/squad_people_2.png'
import alphaPrinceDesktop from '@/assets/img/sections/squad/desktop/squad_people_2.png'
import skyHonMobile from '@/assets/img/sections/squad/mobile/squad_people_3.png'
import skyHonDesktop from '@/assets/img/sections/squad/desktop/squad_people_3.png'
import squad4Mobile from '@/assets/img/sections/squad/mobile/squad_people_4.png'
import squad4Desktop from '@/assets/img/sections/squad/desktop/squad_people_4.png'
import squad5Mobile from '@/assets/img/sections/squad/mobile/squad_people_5.png'
import squad5Desktop from '@/assets/img/sections/squad/desktop/squad_people_5.png'
import squad6Mobile from '@/assets/img/sections/squad/mobile/squad_people_6.png'
import squad6Desktop from '@/assets/img/sections/squad/desktop/squad_people_6.png'
import { LeftFrame, RightFrame } from '@/components/frame/SquadFrame'
// import Carousel from '@/components/carousel/Carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect, useState, useRef } from 'react'

const squadMembers = [
  {
    id: 1,
    mobileImage: jiyanyuMobile,
    desktopImage: jiyanyuDesktop
  },
  {
    id: 2,
    mobileImage: alphaPrinceMobile,
    desktopImage: alphaPrinceDesktop
  },
  {
    id: 3,
    mobileImage: skyHonMobile,
    desktopImage: skyHonDesktop
  },
  {
    id: 4,
    mobileImage: squad4Mobile,
    desktopImage: squad4Desktop
  },
  {
    id: 5,
    mobileImage: squad5Mobile,
    desktopImage: squad5Desktop
  },
  {
    id: 6,
    mobileImage: squad6Mobile,
    desktopImage: squad6Desktop
  },
  {
    id: 7,
    mobileImage: jiyanyuMobile,
    desktopImage: jiyanyuDesktop
  },
  {
    id: 8,
    mobileImage: alphaPrinceMobile,
    desktopImage: alphaPrinceDesktop
  },
  {
    id: 9,
    mobileImage: skyHonMobile,
    desktopImage: skyHonDesktop
  },
  {
    id: 10,
    mobileImage: squad4Mobile,
    desktopImage: squad4Desktop
  },
  {
    id: 11,
    mobileImage: squad5Mobile,
    desktopImage: squad5Desktop
  },
  {
    id: 12,
    mobileImage: squad6Mobile,
    desktopImage: squad6Desktop
  }
]

export default function Squad() {
  const [isMobile, setIsMobile] = React.useState(false)

  // Handle screen size detection
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="relative flex h-[150vh] w-full items-center justify-center bg-black md:h-screen">
      <div className="flex w-full max-w-[1600px] flex-col gap-[120px] px-4 sm:pb-20 md:gap-[100px] md:px-10 ">
        <div className="md:mt-10 flex size-full justify-center pl:3 md:justify-start md:pl-10 lg:pl-20">
          <h1 className="font-euroblack text-left w-[320px]  text-[45px] font-bold leading-none text-white md:w-[450px] md:text-[60px] md:leading-[90px] lg:w-[800px] lg:text-[80px]">
            MEET THE <span className="text-red">SQUAD</span>
          </h1>
        </div>

        {/* <div className="h-full md:mb-8">
          <Carousel
            images={desktopImages}
            mobileImages={mobileImages}
            loop={true}
            itemsToShow={3}
            gap="16px"
          />
        </div> */}
        <div className="size-full justify-center hidden md:flex">
          <DesktopCarousel />
        </div>
        <div className="flex justify-center">
          <MobileCarousel />
        </div>
      </div>

      <div className="absolute left-0 h-[150vh] md:h-screen">
        <LeftFrame />
      </div>
      <div className="absolute right-0 h-[150vh] md:h-screen">
        <RightFrame />
      </div>
    </div>
  )
}

function DesktopCarousel() {
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <Carousel
      orientation={isMobile ? 'vertical' : 'horizontal'}
      opts={{ align: 'start', loop: true }}
      className="w-full md:max-w-[550px] lg:max-w-[800px] xl:max-w-[1100px]"
    >
      <CarouselContent className="">
        {squadMembers.map((member) => (
          <CarouselItem
            key={member.id}
            className="flex basis-1/3 justify-center md:basis-1/3 lg:basis-1/4"
          >
            <div className="size-[50%] md:size-[95%] lg:size-[85%]">
              <img
                src={isMobile ? member.mobileImage : member.desktopImage}
                alt={`Squad member ${member.id}`}
                className=" object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

const MobileCarousel = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const carouselRef = useRef(null)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    align: 'start'
  })
  const scrollTimeout = useRef(null)
  const lastScrollPosition = useRef(0)

  // Handle screen size detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Set up intersection observer to detect when carousel is in viewport
  useEffect(() => {
    if (!carouselRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.2 // Trigger when 15% of the carousel is visible
      }
    )

    observer.observe(carouselRef.current)
    return () => observer.disconnect()
  }, [])

  // Handle scroll-based carousel navigation
  useEffect(() => {
    if (!isMobile || !emblaApi || !isVisible) return // Only run when carousel is visible

    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }

      scrollTimeout.current = setTimeout(() => {
        const currentScroll = window.scrollY
        const scrollDelta = currentScroll - lastScrollPosition.current
        const slideHeight =
          emblaApi.scrollProgress() * emblaApi.scrollSnapList().length

        if (Math.abs(scrollDelta) > 25) {
          if (
            scrollDelta > 0 &&
            slideHeight < emblaApi.scrollSnapList().length - 1
          ) {
            emblaApi.scrollNext()
          } else if (scrollDelta < 0 && slideHeight > 0) {
            emblaApi.scrollPrev()
          }
        }

        lastScrollPosition.current = currentScroll
      }, 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [isMobile, emblaApi, isVisible])

  return (
    <div ref={carouselRef} className="w-full max-w-xs md:hidden">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex flex-col h-[600px]">
          {squadMembers.map((member) => (
            <div
              key={member.id}
              className="flex-none min-h-[200px] flex justify-center items-center pb-4"
            >
              <div className="w-1/2 h-full relative rounded-lg overflow-hidden">
                <img
                  src={isMobile ? member.mobileImage : member.desktopImage}
                  alt={`Squad member ${member.id}`}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
