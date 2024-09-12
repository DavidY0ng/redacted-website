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
import Carousel from '@/components/carousel/Carousel'

const squadMembers = [
  {
    id: 1,
    name: 'JIANYU CHAN',
    position: 'CO-FOUNDER & CEO',
    mobileImage: jiyanyuMobile,
    desktopImage: jiyanyuDesktop
  },
  {
    id: 2,
    name: 'ALPHA PRINCE',
    position: 'CO-FOUNDER & COO',
    mobileImage: alphaPrinceMobile,
    desktopImage: alphaPrinceDesktop
  },
  {
    id: 3,
    name: 'SKY HON',
    position: 'BITBAY LAND DIRECTOR',
    mobileImage: skyHonMobile,
    desktopImage: skyHonDesktop
  },
  {
    id: 4,
    name: 'NAME HERE',
    position: 'POSITION HERE',
    mobileImage: squad4Mobile,
    desktopImage: squad4Desktop
  },
  {
    id: 5,
    name: 'NAME HERE',
    position: 'POSITION HERE',
    mobileImage: squad5Mobile,
    desktopImage: squad5Desktop
  },
  {
    id: 6,
    name: 'NAME HERE',
    position: 'POSITION HERE',
    mobileImage: squad6Mobile,
    desktopImage: squad6Desktop
  }
]

export default function Squad() {
  return (
    <div className="relative flex w-full justify-center bg-black">
      <div className="hidden h-full w-16 bg-gray-300 md:block">
        {/* Left image placeholder */}
      </div>
      <div className="w-full max-w-6xl px-4 md:px-8">
        <h1 className="mb-8 text-center text-4xl font-bold md:text-6xl">
          MEET THE <span className="text-red-600">SQUAD</span>
        </h1>
        <div className="mb-8">
          <Carousel items={squadMembers} />
        </div>
      </div>
      <div className="hidden h-full w-16 bg-gray-300 md:block">
        {/* Right image placeholder */}
      </div>
    </div>
  )
}
