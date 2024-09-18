import character from '@/assets/img/human-race/character.webp'
import character_gif_cropped from '@/assets/img/human-race/character-gif-cropped.gif'
import character_mobile from '@/assets/img/human-race/character-mobile.webp'
import fire_hand from '@/assets/img/human-race/fire hand.gif'
import loading from '@/assets/img/human-race/loading.webp'
import React, { useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { RightFrame, LeftFrame } from '@/components/frame/Frame'

function DesktopHumanRace() {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    amount: 0.5
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  return (
    <div className="relative hidden h-[200vh] bg-black md:block">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative size-full max-w-[1600px]">
          <motion.img
            src={character}
            alt="Static character"
            className="absolute left-0 size-full"
            initial={{ opacity: 1 }}
            animate={controls}
            variants={{
              visible: { opacity: 0 },
              hidden: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute right-0 top-1/2 mr-10 flex w-1/2 -translate-y-1/2 flex-col gap-5"
            initial={{ opacity: 1 }}
            animate={controls}
            variants={{
              visible: { opacity: 0 },
              hidden: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-end">
              <img
                src={loading}
                className="w-1/3 max-w-[270px]"
                alt="Loading"
              />
            </div>
            <div className="font-euroblack text-right leading-none text-red-600 md:text-[45px] lg:text-[6vw] xl:text-[90px]">
              HEADLINE HERE
            </div>
            <div className="font-eurostile text-right text-white md:text-[18px] lg:text-[2vw] xl:text-[28px]">
              <p>Lorum ipsum</p>
              <p>Lorum ipsum Lorum ipsum</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-0 top-0 size-full overflow-hidden "
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={character_gif_cropped}
              alt="Character GIF"
              className="h-full w-[92%] "
            />
          </motion.div>
        </div>
        <div className="absolute left-0 h-screen">
          <LeftFrame />
        </div>
        <div className="absolute right-0 h-screen">
          <RightFrame />
        </div>
      </div>

      <div ref={ref} className="h-[170vh]" />
      <div className="h-screen" />
    </div>
  )
}

function MobileHumanRace() {
  const controls = useAnimation()
  const ref = React.useRef(null)
  const isInView = useInView(ref, {
    amount: 0.5
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, isInView])

  return (
    <div className="relative block h-[200vh] bg-black md:hidden">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="relative size-full max-w-[1600px]">
          <motion.img
            src={character_mobile}
            alt="Static character"
            className="absolute left-0 size-full"
            initial={{ opacity: 1 }}
            animate={controls}
            variants={{
              visible: { opacity: 0 },
              hidden: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-5"
            initial={{ opacity: 1 }}
            animate={controls}
            variants={{
              visible: { opacity: 0 },
              hidden: { opacity: 1 }
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex w-full max-w-[330px] flex-col items-center justify-center">
              <div className="">
                <img src={loading} className="w-2/5" alt="Loading" />
              </div>
              <div className="font-euroblack text-center text-[47px] leading-none text-red-600">
                HEADLINE HERE
              </div>
            </div>

            <div className="font-eurostile text-center text-[20px] text-white">
              <p>Lorum ipsum</p>
              <p>Lorum ipsum Lorum ipsum</p>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-0 top-0 size-full overflow-hidden "
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={fire_hand}
              alt="Character GIF"
              className="h-full w-[92%] "
            />
          </motion.div>
        </div>
        <div className="absolute left-0 h-screen">
          <LeftFrame />
        </div>
        <div className="absolute right-0 h-screen">
          <RightFrame />
        </div>
      </div>

      <div ref={ref} className="h-[170vh]" />
      <div className="h-screen" />
    </div>
  )
}

export default function HumanRace() {
  return (
    <>
      <MobileHumanRace />
      <DesktopHumanRace />
    </>
  )
}
