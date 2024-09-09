import { motion } from 'framer-motion'
import LoadingPage from './Loading/page'
import useLoading from '@/components/hooks/useLoading'
import MainImage from './MainImg/MainImg'
import MobileStickyRedacted from './StickyRedacted/MobileStickyRedacted'
import DesktopStickyRedacted from './StickyRedacted/DesktopStickyRedacted'
import FireBg from './fire/fire'
import React, { useEffect } from 'react'

export default function LandingPage() {
  const { loadingComplete, startLoadingAnimation } = useLoading()

  useEffect(() => {
    // Disable scrolling when loading is active
    if (!loadingComplete) {
      document.body.style.overflow = 'hidden'
    } else {
      // Re-enable scrolling after loading completes
      document.body.style.overflow = 'auto'
    }

    // Clean up in case the component unmounts or loading status changes
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [loadingComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  }

  const loadingVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: 50, transition: { duration: 0.5 } }
  }

  return (
    <div className="h-[500vh] w-full">
      <div className="relative h-[400vh] bg-[#b31e1e]">
        {loadingComplete && (
          <div className="sticky top-5 z-10 h-0 w-full md:top-[50%] ">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="absolute flex h-screen w-full md:hidden"
            >
              <MobileStickyRedacted />
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="absolute hidden h-screen w-full md:block md:translate-y-[-50%]"
            >
              <DesktopStickyRedacted />
            </motion.div>
          </div>
        )}

        <div className="relative flex h-[100vh] w-full items-center">
          {!loadingComplete && (
            <motion.div
              className="absolute bottom-[20%] left-0"
              variants={loadingVariants}
              initial="initial"
              animate={startLoadingAnimation ? 'animate' : 'initial'}
            >
              <LoadingPage />
            </motion.div>
          )}
          {loadingComplete && (
            <motion.div
              className="relative min-h-screen w-full overflow-x-hidden"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <MainImage />
            </motion.div>
          )}
        </div>

        <div className="h-[150vh] bg-[#b31e1e]"></div>

        <FireBg />
        <div className=" h-[100vh] w-full bg-black"></div>
      </div>

      <div className="h-[100vh]  w-full bg-black"></div>
    </div>
  )
}
