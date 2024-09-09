import { LeftFrame, RightFrame, Icons } from '@/components/frame/Frame'
import angel from 'assets/img/intro/angel.webp'
import character from 'assets/img/intro/character.webp'
import frame from 'assets/img/intro/frame.webp'
import font from 'assets/img/intro/font.webp'
import { Transition } from '@/components/animation/slideIn'

function Character() {
  return (
    <div className="relative w-[80%]">
      <img src={frame}></img>
      <img className="absolute top-0" src={character}></img>
    </div>
  )
}

function Font() {
    return (
        <div className='relative w-[80%]'>
            <img src={font}></img>
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
          className="absolute h-screen w-full"
        ></img>
      </Transition>
      <Transition className="absolute top-[15%] flex justify-center">
            <Font/>
      </Transition>
      <Transition className="absolute bottom-[15%] flex justify-center">
        <Character />
      </Transition>

      <div className="absolute left-0 h-screen">
        <LeftFrame />
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <Icons />
      </div>
      <div className="absolute right-0 h-screen">
        <RightFrame />
      </div>
    </div>
  )
}
