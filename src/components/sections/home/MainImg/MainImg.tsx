import React from 'react'
import { Transition } from '@/components/animation/slideIn'
import girlImg from 'assets/img/sections/landing/character.webp'
import girl_gif from 'assets/img/sections/landing/girl-gif.gif'
import mobileGirlImg from 'assets/img/sections/landing/mobile/character.png'
import logo from 'assets/img/sections/landing/eye.webp'
import reGen from 'assets/img/sections/landing/re-gen.webp'
import mobileReGen from 'assets/img/sections/landing/mobile/re-gen.png'
import { LeftFrame, RightFrame, Icons } from '@/components/frame/Frame'

function GirlImg() {
  return (
    <div className="">
      <img
        src={girl_gif}
        loading="eager"
        className="hidden h-screen md:flex md:max-h-[1000px] md:max-w-[1200px] lg:max-w-[1400px]"
      ></img>
      <img
        src={girl_gif}
        loading="eager"
        className="block h-screen max-h-[550px] w-full md:hidden md:max-h-full"
      ></img>
      <div className="absolute bottom-0 left-[50%] -translate-x-[50%]">
        <Icons />
      </div>
    </div>
  )
}

export function Logo() {
  return (
    <div>
      <img
        src={logo}
        loading="eager"
        className="h-screen md:max-h-[1100px] md:max-w-[1200px] lg:w-auto lg:max-w-[1600px]"
      ></img>
    </div>
  )
}

function REGenImg() {
  return (
    <div className="flex justify-center">
      <img
        src={reGen}
        loading="eager"
        className="hidden md:block md:max-w-[900px] lg:max-w-[1300px]"
      ></img>
      <img
        src={mobileReGen}
        loading="eager"
        className="block w-[90%] translate-y-[650%] md:hidden"
      ></img>
    </div>
  )
}

export default function MainImage() {
  return (
    <div className="relative z-0 flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute left-0 h-screen">
        <LeftFrame />
      </div>

      {/* <Transition className="absolute hidden md:block" custom={{ delay: 2 }}>
        <Logo />
      </Transition> */}
      <Transition
        className="absolute bottom-0 z-10 md:bottom-auto"
        custom={{ delay: 1 }}
      >
        <GirlImg />
      </Transition>
      <Transition className="absolute z-20" custom={{ delay: 2.5 }}>
        <REGenImg />
      </Transition>

      <Transition className="absolute right-0 h-screen" custom={{ delay: 1 }}>
        <RightFrame />
      </Transition>
    </div>
  )
}
