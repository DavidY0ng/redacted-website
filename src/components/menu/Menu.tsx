import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import icons from 'assets/img/sections/landing/icons/index'
import image from '@/assets/img/menu/index'

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
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-0 left-0 w-[500px] p-4 rounded shadow-lg flex gap-4 justify-between backdrop-blur-md bg-white/30 border border-white/20"
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
