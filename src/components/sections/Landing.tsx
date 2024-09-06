import { motion } from "framer-motion"
import LoadingPage from './Loading/page'
import useLoading from '@/components/hooks/useLoading'
import MainImage from './MainImg/MainImg'
import MobileStickyRedacted from './StickyRedacted/MobileStickyRedacted'
import DesktopStickyRedacted from './StickyRedacted/DesktopStickyRedacted'
import React, { useEffect } from 'react';


export default function LandingPage() {
  const { loadingComplete, startLoadingAnimation } = useLoading();

  useEffect(() => {
    // Disable scrolling when loading is active
    if (!loadingComplete) {
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling after loading completes
      document.body.style.overflow = 'auto';
    }

    // Clean up in case the component unmounts or loading status changes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [loadingComplete]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5
      }
    }
  };

  const loadingVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: 50, transition: { duration: 0.5 } }
  };

  return (
    <div className="h-[500vh] w-full bg-red-600">
      {loadingComplete && (
        <div className="sticky md:top-[50%] top-5 z-10 h-0 w-full">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="absolute flex md:hidden h-screen w-full"
          >
            <MobileStickyRedacted />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="absolute hidden md:block md:translate-y-[-50%] h-screen w-full"
          >
            <DesktopStickyRedacted />
          </motion.div>
        </div>
      )}

      <div className="relative w-full h-[100vh] flex items-center">
        {!loadingComplete && (
          <motion.div
            className="absolute left-0 bottom-[20%]"
            variants={loadingVariants}
            initial="initial"
            animate={startLoadingAnimation ? "animate" : "initial"}
          >
            <LoadingPage />
          </motion.div>
        )}
        {loadingComplete && (
          <motion.div
            className="relative w-full min-h-screen overflow-x-hidden"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <MainImage />
          </motion.div>
        )}
      </div>
    </div>
  );
}
