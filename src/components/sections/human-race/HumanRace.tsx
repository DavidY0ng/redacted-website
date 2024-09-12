import character from '@/assets/img/human-race/character.webp'
import character_gif from '@/assets/img/human-race/character-gif.gif'
import character_gif_cropped from '@/assets/img/human-race/character-gif-cropped.gif'
import loading from '@/assets/img/human-race/loading.webp'
import React from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { RightFrame, LeftFrame } from '@/components/frame/Frame'

function DesktopHumanRace() {
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
    <div className="relative bg-black h-[200vh] hidden md:block">
      <div className="sticky top-0 h-screen overflow-hidden flex justify-center items-center">
        <div className="relative w-full max-w-[1600px] h-full">
          <motion.img
            src={character}
            alt="Static character"
            className="absolute left-0 w-full h-full "
            initial={{ opacity: 1 }}
            animate={controls}
            variants={{
              visible: { opacity: 0 },
              hidden: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            src={character_gif_cropped}
            alt="Character GIF"
            className="absolute left-0 w-[92%] h-full "
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="absolute left-0 h-screen">
          <LeftFrame />
        </div>
        <div className="absolute right-0 h-screen">
          <RightFrame />
        </div>
      </div>

      <div ref={ref} className="h-screen" />
    </div>
  )
}

export default function HumanRace() {
  return (
    <>
      <DesktopHumanRace />
    </>
  )
}
