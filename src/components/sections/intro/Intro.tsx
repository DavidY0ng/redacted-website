import { LeftFrame, RightFrame } from '@/components/frame/Frame'
import angel from 'assets/img/intro/angel.webp'
import desktop_angel from 'assets/img/intro/desktop-angel.webp'
import character from 'assets/img/intro/character.webp'
import frame from 'assets/img/intro/frame.webp'
import font from 'assets/img/intro/font.webp'
import { Transition } from '@/components/animation/slideIn'
import Menu from '@/components/menu/Menu'

function Character() {
  return (
    <div className="relative w-full max-w-[400px] md:max-w-[450px]">
      <img src={frame}></img>
      <img className="absolute top-0" src={character}></img>
    </div>
  )
}

function Font() {
  return (
    <div className="relative w-full max-w-[500px] md:max-w-[600px]">
      <p className="font-euroblack mb-5 text-[28px] leading-9 text-white md:mb-10 md:text-[30px] lg:text-[45px] lg:leading-tight">
        STEP INTO THE FANTASY WORLD OF{' '}
        <span className="text-red-700">RE -</span> GENZ
      </p>
      <p className="font-eurostile text-[15px] text-white/60 md:text-[18px] lg:text-[22px]">
        RE-GENZ stands for regenerative generations, emphasizing sustainability,
        community, and innovation. This project leverages the power of NFTS to
        create a unique ecosystem where digital assets provide value both online
        and offline.
      </p>
    </div>
  )
}

export default function Intro() {
  return (
    <div className="relative h-screen bg-black">
      <Transition>
        <img
          src={angel}
          loading="lazy"
          className="absolute h-screen w-full md:hidden"
        ></img>
        <img
          src={desktop_angel}
          loading="lazy"
          className="absolute hidden h-screen w-full md:block"
        ></img>
      </Transition>
      <div className="flex justify-center ">
        <div className="absolute mx-auto flex h-screen w-full max-w-[1600px] flex-col items-center justify-around p-10 md:flex-row md:justify-between">
          <Transition className="flex w-full justify-center">
            <Font />
          </Transition>
          <Transition className="flex w-full justify-center">
            <Character />
          </Transition>
        </div>
      </div>

      <div className="absolute left-0 h-screen">
        <LeftFrame />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Menu />
      </div>
      <div className="absolute right-0 h-screen">
        <RightFrame />
      </div>
    </div>
  )
}
