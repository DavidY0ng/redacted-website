import React from 'react'
import { Transition } from '@/components/animation/slideIn'
import girlImg from 'assets/img/sections/landing/character.webp'
import girl_gif from 'assets/img/sections/landing/girl-gif.gif'
import logo from 'assets/img/sections/landing/eye.webp'
import reGen from 'assets/img/sections/landing/re-gen.webp'
import mobileReGen from 'assets/img/sections/landing/mobile/re-gen.png'
import { WholeStandardFrame } from '@/components/frame/Frame'
import { motion } from 'framer-motion'
import { useLoadingProgress } from '@/components/hooks/useLoadingProgress'

function GirlImg() {
  const { isLoadingFinished } = useLoadingProgress()

  const desktopVariants = {
    initial: { rotate: 40, scale: 0.6, x: 600, opacity: 0 },
    animate: {
      rotate: 0,
      scale: 1,
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 1.2 }
    }
  }

  return (
    <div className="">
      {/* desktop girl */}
      <motion.div
        className="hidden md:flex"
        variants={desktopVariants}
        initial="initial"
        animate={isLoadingFinished ? 'animate' : 'initial'}
      >
        <img
          src={girl_gif}
          loading="eager"
          className="h-screen md:max-w-[400px] lg:max-w-[600px]"
          alt="Animated girl character"
        />
      </motion.div>

      {/* mobile girl */}
      <img
        src={girl_gif}
        loading="eager"
        className="block h-screen max-h-[550px] w-full md:hidden md:max-h-full"
        alt="Animated girl character (mobile)"
      />
    </div>
  )
}

export function Logo() {
  const { isLoadingFinished } = useLoadingProgress()

  const imageVariants = {
    initial: { rotate: 50, opacity: 0, scale: 0.9 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        opacity: { duration: 3 },
        scale: { duration: 2 },
        rotate: { duration: 2 }
      }
    }
  }

  return (
    <div className="absolute hidden md:block">
      <div className="overflow-hidden">
        <motion.img
          src={logo}
          loading="eager"
          className="h-screen w-full object-cover"
          alt="Logo"
          variants={imageVariants}
          initial="initial"
          animate={isLoadingFinished ? 'animate' : 'initial'}
        />
      </div>
    </div>
  )
}

function REGenImg() {
  const { isLoadingFinished } = useLoadingProgress()

  const regenVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 2.2 }
    }
  }
  return (
    <motion.div
      variants={regenVariants}
      initial="initial"
      animate={isLoadingFinished ? 'animate' : 'initial'}
      className="flex justify-center"
    >
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
    </motion.div>
  )
}

function Frame() {
  const { isLoadingFinished } = useLoadingProgress()
  const frameVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 2.2 }
    }
  }
  return (
    <motion.div
      variants={frameVariants}
      initial="initial"
      animate={isLoadingFinished ? 'animate' : 'initial'}
      className="h-screen"
    >
      <WholeStandardFrame />
    </motion.div>
  )
}

export default function MainImage() {
  return (
    <div className="relative z-0 flex h-screen items-center justify-center overflow-hidden">
      {/* <Transition className="absolute hidden md:block" custom={{ delay: 2 }}>
        <Logo />
      </Transition> */}
      <div className="absolute bottom-0 z-10 md:bottom-auto">
        <GirlImg />
      </div>
      <div className="absolute z-20">
        <REGenImg />
      </div>
      <Frame />
    </div>
  )
}
