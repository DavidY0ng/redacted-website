import { motion } from 'framer-motion'
import LoadingPage from './Loading/page'
import MainImage from './MainImg/MainImg'
import MobileStickyRedacted from './StickyRedacted/MobileStickyRedacted'
import DesktopStickyRedacted from './StickyRedacted/DesktopStickyRedacted'
import FireBg from './fire/fire'
import React, { useEffect, useState } from 'react'
import { Logo } from './MainImg/MainImg'
import Menu from '@/components/menu/Menu'
import { useLoadingProgress } from '../../hooks/useLoadingProgress'

export default function LandingPage() {
  const { isLoadingFinished } = useLoadingProgress({ duration: 5000 })
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    if (isLoadingFinished) {
      setShowLoading(false)
    }
  }, [isLoadingFinished])

  // Handle toggling the scroll state when loading is active
  useEffect(() => {
    if (showLoading) {
      document.body.style.overflow = 'hidden' // Disable scroll
    } else {
      document.body.style.overflow = 'auto' // Re-enable scroll
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showLoading])

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
    initial: {
      opacity: 1,
      y: 0,
      zIndex: 50 // Start with z-index 50
    },
    animate: {
      opacity: 0,
      y: 50,
      zIndex: 0, // End with z-index 0
      transition: {
        duration: 0.5,
        // Ensure z-index changes at the end of the animation
        zIndex: { delay: 0.5 }
      }
    }
  }

  return (
    <div className="relative h-[500vh] w-full">
      <div className="relative h-[400vh] bg-[#b31e1e]">
        <div className="sticky top-5 z-10 h-0 w-full md:top-[50%]">
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
            className="absolute z-[110] hidden h-screen w-full md:block md:translate-y-[-50%]"
          >
            <DesktopStickyRedacted />
          </motion.div>
        </div>

        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="relative z-10 flex h-screen w-full items-center">
          <motion.div
            className="relative min-h-screen w-full overflow-x-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <MainImage />
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 z-[999]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.3 }}
            >
              <Menu />
            </motion.div>
          </motion.div>
        </div>

        <div className="h-[150vh] bg-[#b31e1e]"></div>

        <FireBg />
        <div className="h-screen w-full bg-black"></div>
      </div>

      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-red"
        variants={loadingVariants}
        initial="initial"
        animate={isLoadingFinished ? 'animate' : 'initial'}
      >
        <div className="absolute bottom-[20%] left-0">
          <LoadingPage />
        </div>
      </motion.div>

      <div className="h-screen w-full bg-black"></div>
    </div>
  )
}
