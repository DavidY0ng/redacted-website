import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CarouselProps {
  images: string[]
  itemsToShow?: number
  loop?: boolean
  gap?: string
  mobileImages?: string[]
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 640)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  itemsToShow = 1,
  loop = false,
  gap = '16px', // default gap
  mobileImages
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile()

  const imagesToUse = isMobile && mobileImages ? mobileImages : images
  const totalItems = imagesToUse.length

  const itemsPerView = Math.min(itemsToShow, totalItems)
  const maxIndex = Math.max(totalItems - itemsPerView, 0)

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [currentIndex, maxIndex])

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 1 >= 0) {
        return prevIndex - 1
      } else if (loop) {
        return maxIndex
      } else {
        return 0
      }
    })
  }

  const next = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 <= maxIndex) {
        return prevIndex + 1
      } else if (loop) {
        return 0
      } else {
        return maxIndex
      }
    })
  }

  const directionIconSize = 24

  // Calculate the container height on mobile
  const gapValue = parseInt(gap)
  const containerHeight = isMobile
    ? `calc((100vh / ${itemsPerView}) * ${itemsPerView} + ${
        (itemsPerView - 1) * gapValue
      }px)`
    : 'auto'

  return (
    <div className="relative flex items-center py-4">
      {/* Prev Icon */}
      <Button
        onClick={prev}
        className="z-10 ml-2 mr-4"
        disabled={!loop && currentIndex === 0}
        variant="default"
        size="icon"
        aria-label="Previous image"
      >
        <ChevronLeft size={directionIconSize} />
      </Button>

      {/* Carousel Container */}
      <div
        className="flex-1 overflow-hidden"
        style={{
          height: containerHeight,
          padding: isMobile ? '0' : '7.5%'
        }}
      >
        <motion.div
          className={`flex ${isMobile ? 'flex-col' : ''}`}
          animate={
            isMobile
              ? {
                  y: -currentIndex * (100 / itemsPerView) + '%'
                }
              : { x: -currentIndex * (100 / itemsPerView) + '%' }
          }
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            gap: gap,
            paddingTop: isMobile ? gap : '0',
            paddingBottom: isMobile ? gap : '0',
            overflow: 'visible'
          }}
        >
          {imagesToUse.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt=""
              className="shrink-0 cursor-pointer"
              style={
                isMobile
                  ? {
                      height: `calc((100vh / ${itemsPerView}) - ${gapValue}px)`,
                      width: '100%',
                      objectFit: 'contain'
                    }
                  : {
                      width: `${100 / itemsPerView}%`,
                      height: '85%',
                      objectFit: 'cover'
                    }
              }
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          ))}
        </motion.div>
      </div>

      <Button
        onClick={next}
        className="z-10 ml-4 mr-2"
        disabled={!loop && currentIndex >= maxIndex}
        variant="default"
        size="icon"
        aria-label="Next image"
      >
        <ChevronRight size={directionIconSize} />
      </Button>
    </div>
  )
}

export default Carousel
