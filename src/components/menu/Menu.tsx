import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import icons from 'assets/img/sections/landing/icons/index'
import image from '@/assets/img/menu/index'

const menuVariants = {
  hidden: {
    width: '100px',
    opacity: 0,
    transition: {
      width: { duration: 0.3 },
      opacity: { duration: 0.2 }
    }
  },
  visible: {
    width: '500px',
    opacity: 1,
    transition: {
      width: { duration: 0.5 },
      opacity: { duration: 0.3, delay: 0.1 }
    }
  }
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
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden">
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="shadow-lg backdrop-blur-md bg-white/30 border border-white/20"
        style={{ maxWidth: '500px', margin: '0 auto' }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-between p-4"
        >
          {menuList.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="flex flex-col items-center"
            >
              <img
                src={image[item.name]}
                alt={item.name}
                className="w-[50px] h-auto mb-2"
              />
              <span className="text-xs capitalize">{item.name}</span>
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
    <div className="relative flex items-center justify-center gap-3 w-[500px]">
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
