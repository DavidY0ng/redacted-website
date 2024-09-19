import re_bg from '@/assets/img/outro/re-bg.webp'
import squad_cropped from '@/assets/img/outro/squad-cropped.webp'

export default function Outro() {
  return (
    <div className="relative h-[30vh]  lg:h-[70vh] bg-white">
      <div className="relative mx-auto flex h-full max-w-[1600px] items-center justify-center">
        <img src={re_bg} className="absolute h-[25vh] lg:h-[55vh] px-5"></img>
        <img
          src={squad_cropped}
          className="absolute h-[30vh] lg:h-[70vh] translate-y-[4%]"
        ></img>
      </div>
    </div>
  )
}
