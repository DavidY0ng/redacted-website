import left1 from '@/assets/img/grab-ticket/journey-begin/left1.png'
import left2 from '@/assets/img/grab-ticket/journey-begin/left2.png'
import left3 from '@/assets/img/grab-ticket/journey-begin/left3.png'
import right1 from '@/assets/img/grab-ticket/journey-begin/right1.png'
import right2 from '@/assets/img/grab-ticket/journey-begin/right2.png'
import right3 from '@/assets/img/grab-ticket/journey-begin/right3.png'

function LeftFrame() {
  return (
    <div className="relative ml-1 flex h-screen md:h-[100vh] lg:h-[200vh] flex-col items-center justify-center gap-10 md:ml-3 ">
      <img
        src={left1}
        loading="eager"
        className="absolute left-0 top-5 w-[20px] lg:w-[40px]"
      ></img>
      <img
        src={left2}
        loading="eager"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[15px] lg:w-[30px]"
      ></img>
      <img
        src={left3}
        loading="eager"
        className="absolute bottom-5 left-0 mb-3 w-[20px] lg:w-[40px]"
      ></img>
    </div>
  )
}

function RightFrame() {
  return (
    <div className="relative mr-1 flex h-screen  md:h-[100vh] lg:h-[200vh] flex-col items-center justify-center gap-10 md:mr-3">
      <img
        src={right1}
        loading="eager"
        className="absolute right-0 top-5 w-[20px] lg:w-[40px]"
      ></img>
      <img
        src={right2}
        loading="eager"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[15px] lg:w-[30px]"
      ></img>
      <img
        src={right3}
        loading="eager"
        className="absolute bottom-5 right-0 mb-3 w-[20px] lg:w-[40px]"
      ></img>
    </div>
  )
}

export default function JourneyBeginFrame() {
  return (
    <>
      <div className="absolute z-5 h-screen w-full md:h-[100vh] lg:h-[200vh] ">
        <LeftFrame />
      </div>
      <div className="absolute z-5 h-screen w-full  md:h-[100vh] lg:h-[200vh] ">
        <RightFrame />
      </div>
    </>
  )
}
