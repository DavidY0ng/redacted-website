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
import { WholeStandardFrame } from '@/components/frame/Frame'
// import Carousel from '@/components/carousel/Carousel'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

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

// Squad Members desktop images
const desktopImages = squadMembers.map((member) => member.desktopImage)
const mobileImages = squadMembers.map((member) => member.mobileImage)

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
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black">
      <div className="flex w-full max-w-[1600px] flex-col gap-[100px] px-4 sm:pb-20 md:px-10">
        <div className="flex size-full justify-center pl-10 md:justify-start">
          <h1 className="font-euroblack w-[260px] text-left text-4xl font-bold leading-[90px] text-white md:w-[800px] md:text-[80px]">
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
        <div className="flex h-full  w-full flex justify-center pl-10">
          <Carousel
            orientation={isMobile ? 'vertical' : 'horizontal'}
            opts={{ align: 'start', loop: true }}
            className="w-full max-w-[1200px] "
          >
            <CarouselContent className="">
              {squadMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="basis-1/3 md:basis-1/3 lg:basis-1/4 flex justify-center"
                >
                  <div className=" size-[85%]">
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
        </div>
      </div>
      
      <WholeStandardFrame />
    </div>
  )
}
