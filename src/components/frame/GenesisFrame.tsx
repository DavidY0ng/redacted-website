import leftElement1 from '@/assets/img/about-genesis-pass/left-element-1.png'
import leftElement2 from '@/assets/img/about-genesis-pass/left-element-2.png'
import rightElement1 from '@/assets/img/about-genesis-pass/right-element-1.png'
import rightElement2 from '@/assets/img/about-genesis-pass/right-element-2.png'

function LeftFrame() {
  return (
    <div className="relative ml-1 md:ml-3 flex h-screen flex-col items-center justify-center gap-10 ">
      <img
        src={leftElement1}
        loading="eager"
        className="absolute left-0 top-0 w-[30px] md:w-[50px]"
      ></img>
      <img
        src={leftElement2}
        loading="eager"
        className="absolute bottom-0 left-0 mb-3 md:mb-5 w-[30px] md:w-[50px]"
      ></img>
    </div>
  )
}

function RightFrame() {
  return (
    <div className="relative mr-1 md:mr-3 flex h-screen flex-col items-center justify-center gap-10">
      <img
        src={rightElement2}
        loading="eager"
        className="absolute right-0 top-0 w-[30px] md:w-[50px]"
      ></img>
      <img
        src={rightElement1}
        loading="eager"
        className="absolute bottom-0 right-0 mb-3 md:mb-5 w-[30px] md:w-[50px]"
      ></img>
    </div>
  )
}

export default function WholeFrame() {
  return (
    <>
      <div className="absolute z-10 h-screen w-full">
        <LeftFrame />
      </div>
      <div className="absolute z-10 h-screen w-full">
        <RightFrame />
      </div>
    </>
  )
}
