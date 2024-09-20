import { motion } from 'framer-motion'
import LoadingPage from './Loading/page'
import useLoading from '@/components/hooks/useLoading'
import MainImage from './MainImg/MainImg'
import MobileStickyRedacted from './StickyRedacted/MobileStickyRedacted'
import DesktopStickyRedacted from './StickyRedacted/DesktopStickyRedacted'
import { Transition } from '@/components/animation/slideIn'
import FireBg from './fire/fire'
import React, { useEffect, useState } from 'react'
import { Logo } from './MainImg/MainImg'

export default function LandingPage() {
  const { loadingComplete, startLoadingAnimation } = useLoading()
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    // Show loading page on initial load or refresh
    setShowLoading(true)

    // Simulate loading process
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 6000) // Adjust time as needed

    return () => clearTimeout(timer)
  }, [])

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
      {showLoading ? (
        <motion.div
          className="bg-red fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute bottom-[20%] left-0">
            <LoadingPage />
          </div>
        </motion.div>
      ) : (
        <div className="relative h-[400vh] bg-[#b31e1e]">
          {loadingComplete && (
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
          )}
          <div className="flex justify-center bg-gray-500 ">
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
            </motion.div>
          </div>

          <div className="h-[150vh] bg-[#b31e1e]"></div>

          <FireBg />
          <div className="h-screen w-full bg-black"></div>
        </div>
      )}

      <div className="h-screen w-full bg-black"></div>
    </div>
  )
}
