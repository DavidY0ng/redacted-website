import { LeftFrame, RightFrame } from '@/components/frame/Frame'
import angel from 'assets/img/intro/angel.webp'
import desktop_angel from 'assets/img/intro/desktop-angel.webp'
import character from 'assets/img/intro/character.webp'
import frame from 'assets/img/intro/frame.webp'
import { Transition } from '@/components/animation/slideIn'
import Menu from '@/components/menu/Menu'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const ref = useRef(null)
  const isInView = useInView(ref)

  const imageVariants = {
    hidden: { x: '100%' },
    visible: {
      x: 0,
      transition: {
        duration: 1.6
      }
    }
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.8,
        duration: 0.5
      }
    }
  }

  return (
    <div className="relative h-screen bg-black overflow-hidden" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={imageVariants}
      >
        <img
          src={angel}
          loading="lazy"
          className="absolute h-screen w-full md:hidden"
          alt="Angel (mobile)"
        />
        <img
          src={desktop_angel}
          loading="lazy"
          className="absolute hidden h-screen w-full md:block"
          alt="Angel (desktop)"
        />
      </motion.div>
      <div className="flex justify-center">
        <div className="absolute mx-auto flex h-screen w-full max-w-[1600px] flex-col items-center justify-around p-10 md:flex-row md:justify-between">
          <motion.div
            className="flex w-full justify-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
          >
            <Font />
          </motion.div>

          <motion.div
            className="flex w-full justify-center"
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeInVariants}
          >
            <Character />
          </motion.div>
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
