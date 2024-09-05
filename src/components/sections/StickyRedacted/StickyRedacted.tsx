import { motion, useScroll, useTransform } from 'framer-motion'
import './style.css'
import { Transition } from '@/components/animation/slideIn'
import r from 'assets/img/sections/landing/r.png'
import e from 'assets/img/sections/landing/e.png'
import d from 'assets/img/sections/landing/d.png'
import a from 'assets/img/sections/landing/a.png'
import c from 'assets/img/sections/landing/c.png'
import t from 'assets/img/sections/landing/t.png'

function LetterR() {
  return (
    <div>
      <img src={r} className="h-[100px]"></img>
    </div>
  )
}

function LetterE() {
  return (
    <div>
      <img src={e} className="h-[100px]"></img>
    </div>
  )
}

function CompleteWord() {
  return (
    <div className="flex">
      {/* <img src={d} className="h-[100px]"></img>
      <img src={a} className="h-[100px]"></img>
      <img src={c} className="h-[100px]"></img>
      <img src={t} className="h-[100px]"></img>
      <img src={e} className="h-[100px]"></img>
      <img src={d} className="h-[100px]"></img> */}
    </div>
  )
}

export default function Redacted() {
  const { scrollY } = useScroll()
  const letterScale = useTransform(scrollY, [0, 500], [1, 0.5]);
  const rLeft = useTransform(scrollY,[0, 1000],['0%', '-40vw'])
  const rCenter = useTransform(scrollY,[0, 1000],['0px', '40vh'])

  const eLeft = useTransform(scrollY,[0, 1000],['0px','-40vw'])
  const eOffsetX = useTransform(scrollY, [0, 1000], ['0px', '60px']);
  const eOffsetY = useTransform(scrollY, [0, 1000], ['0px', '-109px']);
  const eTop = useTransform(scrollY, [0, 1000], ['0px', '40vh'])

  const completeWordOpacity = useTransform(scrollY, [2000, 2600], [0, 1])

  return (
    <div className="h-full w-full relative flex justify-center">
      <Transition className={''} custom={{ delay: 2 }}>
        <motion.div className="pb-3" style={{scale: letterScale, x:rLeft, y:rCenter, }}>
          <LetterR />
        </motion.div>
        <div className="flex">
            <motion.div className="" style={{scale: letterScale, x: eLeft,y: eTop, translateX: eOffsetX, translateY: eOffsetY}}>
                <LetterE />
            </motion.div>
            {/* <motion.div className="" style={{x: eRight,y: eTop, opacity: completeWordOpacity}}>
                <CompleteWord />
            </motion.div> */}
        </div>
      </Transition>
    </div>
  )
}
