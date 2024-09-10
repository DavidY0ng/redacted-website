import character from '@/assets/img/nft-collection/index'
import bg from '@/assets/img/nft-collection/bg.webp'
import fivek from '@/assets/img/nft-collection/5k.webp'
import description from '@/assets/img/nft-collection/description.png'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'

function MobileNFT() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const moveUp1 = useTransform(scrollYProgress, [0, 1], ['0px', '-400px'])
  const moveUp2 = useTransform(scrollYProgress, [0, 1], ['0px', '-600px'])
  const moveUpSlow = useTransform(scrollYProgress, [0, 1], ['0px', '-200px'])

  return (
    <div ref={ref} className="relative h-[200vh] w-full bg-black">
      <img src={bg} className="absolute size-full"></img>

      <motion.div
        style={{ y: moveUp1 }}
        initial={{ y: 0 }}
        animate={{ y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute right-[21%] top-[45%] z-10 w-1/2"
      >
        <img src={character.character1} className="w-full" alt="Character 1" />
      </motion.div>
      <motion.div
        style={{ y: moveUp1 }}
        initial={{ y: 0 }}
        animate={{ y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-[20%] left-1/2  z-10 w-1/3"
      >
        <img
          src={character.character2}
          className="w-full -translate-x-1/2"
          alt="Character 2"
        />
      </motion.div>
      <motion.div
        style={{ y: moveUp2 }}
        initial={{ y: 0 }}
        animate={{ y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute left-[30%] top-[30%]  z-10 w-1/4"
      >
        <img src={character.character3} className="w-full" alt="Character 2" />
      </motion.div>
      <img
        src={character.character5}
        className="absolute bottom-[18%] left-[10%] z-10 w-1/4"
      ></img>
      <img
        src={character.character6}
        className="absolute bottom-[22%] right-[10%] z-10 w-1/4"
      ></img>
      <img
        src={character.character7}
        className="absolute bottom-[10%] right-[32%] z-10 w-1/4"
      ></img>
      <motion.div
        style={{ y: moveUp2 }}
        initial={{ y: 0 }}
        animate={{ y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute left-[12%] top-[15%]  z-10 w-1/4"
      >
        <img src={character.character8} className="w-full" alt="Character 8" />
      </motion.div>
      <motion.div
        style={{ y: moveUp1 }}
        initial={{ y: 0 }}
        animate={{ y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5 }}
        className="absolute right-0 top-[10%] z-10 w-1/2"
      >
        <img src={character.character9} className="w-full" alt="Character 9" />
      </motion.div>

      <div className="absolute flex h-full justify-center px-10">
        <div className=" flex h-full flex-col items-center justify-center">
          <img src={fivek} className="mb-5"></img>
          <div className="flex w-full justify-end">
            <img src={description} className="w-1/2"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function NFTCollection() {
  return (
    <>
      <MobileNFT />
    </>
  )
}
