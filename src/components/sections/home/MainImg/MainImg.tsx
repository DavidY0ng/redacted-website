import React, { useEffect, useState } from 'react'
import girl_gif from 'assets/img/sections/landing/girl-gif.gif'
import logo from 'assets/img/sections/landing/eye.webp'
import reGen from 'assets/img/sections/landing/re-gen.webp'
import mobileReGen from 'assets/img/sections/landing/mobile/re-gen.png'
import { WholeStandardFrame } from '@/components/frame/Frame'
import { motion } from 'framer-motion'
import { useLoadingProgress } from '@/components/hooks/useLoadingProgress'

function MobileGirlImg() {
  const [mobileHeight, setMobileHeight] = useState('470px')

  useEffect(() => {
    const updateMobileHeight = () => {
      const viewportHeight = window.innerHeight
      // Set mobile height based on viewport height
      // For taller phones, use 75% of viewport height
      // For shorter phones, use 500px as minimum
      const calculatedHeight = Math.max(500, viewportHeight * 0.65)
      setMobileHeight(`${calculatedHeight}px`)
    }

    // Set initial height
    updateMobileHeight()

    // Update height when window is resized
    window.addEventListener('resize', updateMobileHeight)
    return () => window.removeEventListener('resize', updateMobileHeight)
  }, [])

  return (
    <div className="">
      {/* mobile girl */}
      <img
        src={girl_gif}
        loading="eager"
        style={{ height: mobileHeight }}
        className="block w-full md:hidden object-cover"
        alt="Animated girl character (mobile)"
      />
    </div>
  )
}

function DesktopGirlImg() {
  const { isLoadingFinished } = useLoadingProgress()
  // const [maxWidth, setMaxWidth] = useState('450px')

  // useEffect(() => {
  //   const handleHeightResize = () => {
  //     const screenHeight = window.innerHeight

  //     if (screenHeight <= 700) {
  //       // For shorter screens
  //       setMaxWidth('380px')
  //     } else if (screenHeight <= 900) {
  //       // For medium-height screens
  //       setMaxWidth('420px')
  //     } else if (screenHeight <= 1000) {
  //       // For taller screens
  //       setMaxWidth('500px')
  //     } else if (screenHeight <= 1100) {
  //       // For taller screens
  //       setMaxWidth('500px')
  //     } else {
  //       // For taller screens
  //       setMaxWidth('450px')
  //     }
  //   }
  //   // Add event listener for resize
  //   window.addEventListener('resize', handleHeightResize)

  //   // Call the function on initial render
  //   handleHeightResize()

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleHeightResize)
  //   }
  // }, [])

  const desktopVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: 1 }
    }
  }

  return (
    <div>
      <motion.div
        className="hidden md:flex"
        variants={desktopVariants}
        initial="initial"
        animate={isLoadingFinished ? 'animate' : 'initial'}
      >
        <img
          src={girl_gif}
          loading="eager"
          className="h-screen object-fit md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px]"
          alt="Animated girl character"
        />
      </motion.div>
    </div>
  )
}

export function Logo() {
  const { isLoadingFinished } = useLoadingProgress()

  const imageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        opacity: { duration: 1, delay: 1 }
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
      transition: { duration: 1, delay: 3 }
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
        className="hidden md:block md:max-w-[900px] lg:max-w-[1300px] object-cover"
      ></img>
      <img
        src={mobileReGen}
        loading="eager"
        className="block w-[90%] translate-y-[650%] md:hidden object-cover"
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
      transition: { duration: 1, delay: 1.8 }
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
    <div className="relative z-0 flex md:h-screen items-center justify-center overflow-hidden">
      {/* <Transition className="absolute hidden md:block" custom={{ delay: 2 }}>
        <Logo />
      </Transition> */}
      <div className="absolute bottom-0 z-10 md:bottom-auto">
        <MobileGirlImg />
        <DesktopGirlImg />
      </div>
      <div className="absolute z-20">
        <REGenImg />
      </div>
      <Frame />
    </div>
  )
}
