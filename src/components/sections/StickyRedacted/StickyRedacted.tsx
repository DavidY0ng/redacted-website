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
      <img src={r} className="h-[300px]"></img>
    </div>
  )
}

function LetterE() {
  return (
    <div>
      <img src={e} className="h-[300px]"></img>
    </div>
  )
}

function CompleteWord() {
  return (
    <div className="flex">
      {/* <img src={d} className="h-[300px]"></img> */}
      {/* <img src={a} className="h-[300px]"></img> */}
      {/* <img src={c} className="h-[300px]"></img> */}
      {/* <img src={t} className="h-[300px]"></img> */}
      {/* <img src={e} className="h-[300px]"></img> */}
      {/* <img src={d} className="h-[300px]"></img> */}
    </div>
  )
}

export default function Redacted() {
  const { scrollY } = useScroll()

  const eRight = useTransform(
    scrollY,
    [0, 1500, 2100],
    ['0px', '170px', '170px']
  )

  const eTop = useTransform(scrollY, [1600, 2000], ['0px', '-158px'])

  const completeWordOpacity = useTransform(scrollY, [2000, 2600], [0, 1])

  return (
    <div className="">
      <Transition className={''} custom={{ delay: 2 }}>
        <div className="pb-3">
          <LetterR />
        </div>
        <div className="flex">
          <motion.div
            className=""
            style={{
              x: eRight,
              y: eTop
            }}
          >
            <LetterE />
          </motion.div>
          <motion.div
            className=" "
            style={{
              x: eRight,
              y: eTop,
              opacity: completeWordOpacity
            }}
          >
            <CompleteWord />
          </motion.div>
        </div>
      </Transition>
    </div>
  )
}
