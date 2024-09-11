import character from '@/assets/img/human-race/character.webp'
import character_gif from '@/assets/img/human-race/character-gif.gif'
import loading from '@/assets/img/human-race/loading.webp'
import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const HumanRace = () => {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    once: false,
    amount: 0.5
  })

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  return (
    <div className="relative bg-black h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.img
          src={character}
          alt="Static character"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={controls}
          variants={{
            visible: { opacity: 0 },
            hidden: { opacity: 1 }
          }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={character_gif}
          alt="Character GIF"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={controls}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 }
          }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div ref={ref} className="h-screen" />
    </div>
  )
}

export default HumanRace
