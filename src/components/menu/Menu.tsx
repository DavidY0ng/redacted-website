import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import icons from 'assets/img/sections/landing/icons/index'
import image from '@/assets/img/menu/index'

const menuVariants = {
  hidden: {
    width: '40px',
    height: '40px',
    opacity: 0,
    transition: {
      width: { duration: 0.5 },
      opacity: { duration: 0.9 }
    }
  },
  visible: {
    height: '80px',
    width: '500px',
    opacity: 1,
    transition: {
      width: { duration: 0.5 },
      opacity: { duration: 0.5, delay: 0.1 }
    }
  }
}

const imageContainerVariants = {
  normal: { width: '50px' },
  exit: { width: 'auto', transition: { duration: 0.01 } }
}

function MenuList() {
  const menuList = [
    { name: 'home', path: '' },
    { name: 'about', path: '' },
    { name: 'nft', path: '' },
    { name: 'pass', path: '' },
    { name: 'discord', path: '' },
    { name: 'team', path: '' },
    { name: 'x', path: '' }
  ]

  return (
    <div className="absolute bottom-[7px] left-1/2 -translate-x-1/2 overflow-hidden">
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex items-start justify-center rounded-full border border-white/20 bg-white/30 shadow-lg backdrop-blur-md"
        style={{ maxWidth: '500px', margin: '0 auto' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          exit={{ opacity: 1 }}
          className="flex items-center justify-between gap-4 p-4"
        >
          {menuList.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="group relative flex flex-col items-center"
            >
              <motion.div
                variants={imageContainerVariants}
                initial="normal"
                exit="exit"
                className="flex h-[50px] items-center justify-center rounded-full transition-all duration-300 group-hover:bg-red-500"
              >
                <img
                  src={image[item.name]}
                  alt={item.name}
                  className="h-auto w-[40px]"
                />
              </motion.div>
              {/* <span className="text-xs capitalize">{item.name}</span> */}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const menuTriggerRef = useRef(null)

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (menuTriggerRef.current && menuTriggerRef.current.contains(e.target)) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return (
    <div className="relative flex w-[500px] items-center justify-center gap-3">
      <img
        src={icons.icon1}
        loading="eager"
        alt="Icon 1"
        className="h-[50px]"
      />
      <div
        ref={menuTriggerRef}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <img
          src={icons.icon2}
          loading="eager"
          alt="Icon 2"
          className="h-[50px] hover:cursor-pointer"
        />
        <AnimatePresence>
          {isMenuOpen && <MenuList mousePosition={mousePosition} />}
        </AnimatePresence>
      </div>
      <img
        src={icons.icon3}
        loading="eager"
        alt="Icon 3"
        className="h-[50px]"
      />
    </div>
  )
}
