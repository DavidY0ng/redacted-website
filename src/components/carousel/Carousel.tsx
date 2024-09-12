'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  id: number
  name: string
  position: string
  mobileImage: string
  desktopImage: string
}

interface CarouselProps {
  items: CarouselItem[]
  loop?: boolean
}

export default function Carousel({ items, loop = true }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)
  const [isMobile, setIsMobile] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIsMobile(width < 640)
      if (containerRef.current) {
        if (isMobile) {
          setCardsPerView(3)
        } else {
          const containerWidth = containerRef.current.offsetWidth
          const cardWidth = 250
          const gap = 16
          const possibleCards = Math.floor(
            (containerWidth + gap) / (cardWidth + gap)
          )
          setCardsPerView(Math.max(1, Math.min(possibleCards, items.length)))
        }
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [items.length])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + cardsPerView
      if (nextIndex < items.length) {
        return nextIndex
      } else if (loop) {
        return 0
      }
      return prevIndex
    })
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - cardsPerView
      if (nextIndex >= 0) {
        return nextIndex
      } else if (loop) {
        return Math.max(0, items.length - cardsPerView)
      }
      return prevIndex
    })
  }

  const cardVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  }

  const visibleItems = items.slice(currentIndex, currentIndex + cardsPerView)

  return (
    <div className="relative mx-auto w-[85%]">
      <h2 className="mb-8 text-4xl font-bold text-white">MEET THE SQUAD</h2>
      <div className="flex min-h-96 items-center" ref={containerRef}>
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 -translate-x-full rounded-full p-2 text-white"
          aria-label="Previous slide"
          disabled={currentIndex === 0 && !loop}
        >
          <ChevronLeft size={24} />
        </button>
        <div className="w-full overflow-hidden">
          {isMobile ? (
            <div className="flex flex-col items-center gap-4">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full max-w-[200px] overflow-hidden rounded-lg"
                >
                  <img
                    src={item.mobileImage}
                    alt={item.name}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          ) : (
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentIndex}
                className="flex flex-row justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {visibleItems.map((item) => (
                  <motion.div
                    key={item.id}
                    className="w-[250px] overflow-hidden rounded-lg"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={direction}
                  >
                    <img
                      src={item.desktopImage}
                      alt={item.name}
                      className="h-auto w-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 translate-x-full rounded-full p-2 text-white"
          aria-label="Next slide"
          disabled={currentIndex + cardsPerView >= items.length && !loop}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}
