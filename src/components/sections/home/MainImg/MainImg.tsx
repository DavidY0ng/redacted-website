import React from 'react'
import { Transition } from '@/components/animation/slideIn'
import girlImg from 'assets/img/sections/landing/character.webp'
import girl_gif from 'assets/img/sections/landing/girl-gif.gif'
import mobileGirlImg from 'assets/img/sections/landing/mobile/character.png'
import logo from 'assets/img/sections/landing/eye.webp'
import reGen from 'assets/img/sections/landing/re-gen.webp'
import mobileReGen from 'assets/img/sections/landing/mobile/re-gen.png'
import { Icons, WholeStandardFrame } from '@/components/frame/Frame'
import { motion } from 'framer-motion'
import Menu from '@/components/menu/Menu'

function GirlImg() {
  return (
    <div className="">
      {/* desktop girl */}
      <motion.div
        className="hidden md:flex"
        initial={{ rotate: 40, scale: 0.6, x: 900 }}
        animate={{ rotate: 0, scale: 1, x: 0 }}
        transition={{ duration: 2 }}
      >
        <img
          src={girl_gif}
          loading="eager"
          className=" h-screen  md:max-w-[400px] lg:max-w-[600px]"
        ></img>
      </motion.div>

      {/* mobile girl */}
      <img
        src={girl_gif}
        loading="eager"
        className="block h-screen max-h-[550px] w-full md:hidden md:max-h-full"
      ></img>
    </div>
  )
}

export function Logo() {
  return (
    <motion.div
      className="absolute hidden md:block"
      initial={{ opacity: 0, rotate: 50, scale: 0.9 }}
      animate={{ opacity: 1, rotate: 0, scale: 1 }}
      transition={{
        opacity: { duration: 3 }, // Opacity transition lasts 1 second
        rotate: { delay: 1, duration: 1 }, // Rotation starts after opacity
        scale: { delay: 1, duration: 1 } // Scale starts after opacity
      }}
    >
      <div className="overflow-hidden">
        <img
          src={logo}
          loading="eager"
          className="h-screen w-full object-cover"
        ></img>
      </div>
    </motion.div>
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
      {/* <Transition className="absolute hidden md:block" custom={{ delay: 2 }}>
        <Logo />
      </Transition> */}
      <Transition
        className="absolute bottom-0 z-10 md:bottom-auto"
        custom={{ delay: 1.5 }}
      >
        <GirlImg />
      </Transition>
      <Transition className="absolute z-20" custom={{ delay: 4 }}>
        <REGenImg />
      </Transition>

      {/* frame */}
      <Transition className="h-screen" custom={{ delay: 3.5 }}>
        <WholeStandardFrame />
      </Transition>
    </div>
  )
}
