import images from 'assets/img/sections/landing/frame-elements/index'
import icons from 'assets/img/sections/landing/icons/index'

export function LeftFrame() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-10">
      <img
        src={images.leftFrame1}
        loading="eager"
        className="absolute top-0 mt-2 h-3"
      ></img>
      <img
        src={images.leftFrame2}
        loading="eager"
        className="absolute top-20 h-[35%]"
      ></img>
      <img src={images.leftFrame3} loading="eager" className="h-3"></img>
      <img
        src={images.leftFrame4}
        loading="eager"
        className="absolute bottom-20 h-[35%]"
      ></img>
      <img
        src={images.leftFrame5}
        loading="eager"
        className="absolute bottom-0 mb-2 h-3"
      ></img>
    </div>
  )
}

export function RightFrame() {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-10">
      <img
        src={images.rightFrame1}
        loading="eager"
        className="absolute top-0 mt-2 h-3"
      ></img>
      <img
        src={images.rightFrame2}
        loading="eager"
        className="absolute top-20 h-[35%]"
      ></img>
      <img src={images.rightFrame3} loading="eager" className="h-3"></img>
      <img
        src={images.rightFrame4}
        loading="eager"
        className="absolute bottom-20 h-[35%]"
      ></img>
      <img
        src={images.rightFrame5}
        loading="eager"
        className="absolute bottom-0 mb-2 h-3"
      ></img>
    </div>
  )
}

export function Icons() {
  return (
    <div className="relative flex items-center justify-center gap-3">
      <img src={icons.icon1} loading="eager" className="h-[50px]"></img>
      <img src={icons.icon2} loading="eager" className="h-[50px]"></img>
      <img src={icons.icon3} loading="eager" className="h-[50px]"></img>
    </div>
  )
}
