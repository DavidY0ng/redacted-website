import React, { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import useIsMobile from '@/components/hooks/useIsMobile'
import leftArrow from '@/assets/img/carousel/left_arrow.png'
import rightArrow from '@/assets/img/carousel/right_arrow.png'

interface CarouselProps {
  images: string[]
  itemsToShow?: number
  loop?: boolean
  gap?: string
  mobileImages?: string[]
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  itemsToShow = 1,
  loop = false,
  gap = '16px',
  mobileImages
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const isMobile = useIsMobile()

  const imagesToUse = useMemo<string[]>(
    () => (isMobile && mobileImages ? mobileImages : images),
    [isMobile, mobileImages, images]
  )
  const totalItems = imagesToUse.length
  const itemsPerView = Math.min(itemsToShow, totalItems)
  const maxIndex = Math.max(totalItems - itemsPerView, 0)

  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  const handleNavigation = (direction: 'prev' | 'next') => {
    setCurrentIndex((prevIndex) => {
      if (direction === 'prev') {
        return prevIndex > 0 ? prevIndex - 1 : loop ? maxIndex : 0
      } else {
        return prevIndex < maxIndex ? prevIndex + 1 : loop ? 0 : maxIndex
      }
    })
  }

  const gapValue = parseInt(gap)
  const containerHeight = isMobile ? '100vh' : 'auto'

  return (
    <div
      className="relative flex items-center py-4"
      style={{ height: containerHeight }}
    >
      <Button
        onClick={() => handleNavigation('prev')}
        className="z-10 ml-2 mr-4 bg-transparent hover:bg-transparent"
        disabled={!loop && currentIndex === 0}
        variant="ghost"
        size="icon"
        aria-label="Previous image"
      >
        <img
          src={leftArrow}
          alt="Previous"
          width={24}
          height={24}
          className="opacity-70 transition-opacity hover:opacity-100"
        />
      </Button>

      <div
        className="flex-1 overflow-hidden"
        style={{ height: '100%', padding: isMobile ? '0' : '7.5%' }}
      >
        <motion.div
          className={`flex ${isMobile ? 'flex-col' : ''}`}
          animate={
            isMobile
              ? { y: -currentIndex * (100 / itemsPerView) + '%' }
              : { x: -currentIndex * (100 / itemsPerView) + '%' }
          }
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          style={{
            gap: gap,
            height: '100%',
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
                      height: `calc((100% - ${
                        (itemsPerView - 1) * gapValue
                      }px) / ${itemsPerView})`,
                      width: '100%',
                      objectFit: 'contain' as const
                    }
                  : {
                      width: `${100 / itemsPerView}%`,
                      height: '85%',
                      objectFit: 'cover' as const
                    }
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
          ))}
        </motion.div>
      </div>

      <Button
        onClick={() => handleNavigation('next')}
        className="z-10 ml-4 mr-2 bg-transparent hover:bg-transparent"
        disabled={!loop && currentIndex >= maxIndex}
        variant="ghost"
        size="icon"
        aria-label="Next image"
      >
        <img
          src={rightArrow}
          alt="Next"
          width={24}
          height={24}
          className="opacity-70 transition-opacity hover:opacity-100"
        />
      </Button>
    </div>
  )
}

export default Carousel
