import { motion, useScroll, useTransform } from 'framer-motion'
import { Transition } from '@/components/animation/slideIn'
import r from 'assets/img/sections/landing/r.webp'
import e from 'assets/img/sections/landing/e.webp'
import d from 'assets/img/sections/landing/d.webp'
import a from 'assets/img/sections/landing/a.webp'
import c from 'assets/img/sections/landing/c.webp'
import t from 'assets/img/sections/landing/t.webp'
import { useEffect, useState } from 'react'

function LetterR() {
  return (
    <div>
      <img src={r} className="h-[30px]"></img>
    </div>
  )
}

function LetterE() {
  return (
    <div>
      <img src={e} className="h-[30px]"></img>
    </div>
  )
}

function CompleteWord() {
  const letters = [d, a, c, t, e, d] // Array of image sources

  return (
    <div className="flex gap-1">
      {letters.map((letter, index) => (
        <img key={index} src={letter} className="h-[30px]" />
      ))}
    </div>
  )
}

// export default function Redacted() {
//   const { scrollY } = useScroll()
//   const phoneHeight = typeof window !== 'undefined' ? window.innerHeight : 800 // Fallback to 800px if window is not defined

//   // Calculate the initial positions based on phone height
//   const initialRCenterPosition = `-${phoneHeight * 1.5}px`

//   // Conditionally set the multiplier for the letter E based on screen height
//   const eMultiplier = phoneHeight <= 720 ? 0.99 : 0.8
//   const initialECenterPosition = `-${phoneHeight * eMultiplier}px`

//   const letterScale = useTransform(scrollY, [0, 500], [3, 1])
//   const rLeft = useTransform(scrollY, [0, 800], ['420%', '0%'])
//   const rTop = useTransform(scrollY, [0, 800], [initialRCenterPosition, '0%'])

//   const eLeft = useTransform(scrollY, [0, 800], ['310%', '0%'])
//   // const eOffsetX = useTransform(scrollY, [0, 1000], ['0px', '47px'])
//   // const eOffsetY = useTransform(scrollY, [0, 1000], ['0px', '-108px'])
//   const eTop = useTransform(scrollY, [0, 800], [initialECenterPosition, '0%'])

//   const completeWordOpacity = useTransform(scrollY, [800, 1300], [0, 1])

//   return (
//     <div className="h-full w-full relative flex justify-center">
//       <Transition
//         className={'w-[500px] flex gap-1 justify-center items-center'}
//         custom={{ delay: 2 }}
//       >
//         <motion.div
//           className=""
//           style={{ scale: letterScale, x: rLeft, y: rTop }}
//         >
//           <LetterR />
//         </motion.div>
//         <motion.div
//           className=""
//           style={{ scale: letterScale, x: eLeft, y: eTop }}
//         >
//           <LetterE />
//         </motion.div>
//         <motion.div className="" style={{ opacity: completeWordOpacity }}>
//           <CompleteWord />
//         </motion.div>
//       </Transition>
//     </div>
//   )
// }

export default function Redacted() {
  const { scrollY } = useScroll()
  const [rInitialTop, setRInitialTop] = useState('100%')
  const [eInitialTop, setEInitialTop] = useState('450%')

  useEffect(() => {
    const updatePositions = () => {
      const viewportHeight = window.innerHeight
      if (viewportHeight > 800) {
        setRInitialTop('-1100%')
        setEInitialTop('-750%')
      } else {
        setRInitialTop('-990%')
        setEInitialTop('-660%')
      }
    }

    // Set initial positions
    updatePositions()

    // Update positions when window is resized
    window.addEventListener('resize', updatePositions)
    return () => window.removeEventListener('resize', updatePositions)
  }, [])

  const letterScale = useTransform(scrollY, [0, 500], [3, 1])
  const rLeft = useTransform(scrollY, [0, 800], ['420%', '0%'])
  const rTop = useTransform(scrollY, [0, 800], [rInitialTop, '0%'])

  const eLeft = useTransform(scrollY, [0, 800], ['310%', '0%'])
  const eTop = useTransform(scrollY, [0, 800], [eInitialTop, '0%'])

  const completeWordOpacity = useTransform(scrollY, [800, 1300], [0, 1])

  return (
    <div className="h-full w-full relative flex justify-center">
      <Transition
        className="w-[500px] flex gap-1 justify-center items-center"
        custom={{ delay: 2 }}
      >
        <motion.div
          className=""
          style={{ scale: letterScale, x: rLeft, y: rTop }}
        >
          <LetterR />
        </motion.div>
        <motion.div
          className=""
          style={{ scale: letterScale, x: eLeft, y: eTop }}
        >
          <LetterE />
        </motion.div>
        <motion.div className="" style={{ opacity: completeWordOpacity }}>
          <CompleteWord />
        </motion.div>
      </Transition>
    </div>
  )
}
