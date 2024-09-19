import re_bg from '@/assets/img/outro/re-bg.webp'
import squad_cropped from '@/assets/img/outro/squad-cropped.webp'

export default function Outro() {
  return (
    <div className="relative h-[30vh]  bg-white lg:h-[70vh]">
      <div className="relative mx-auto flex h-full max-w-[1600px] items-center justify-center">
        <img src={re_bg} className="absolute h-[25vh] px-5 lg:h-[55vh]"></img>
        <img
          src={squad_cropped}
          className="absolute h-[30vh] translate-y-[4%] lg:h-[70vh]"
        ></img>
      </div>
    </div>
  )
}
