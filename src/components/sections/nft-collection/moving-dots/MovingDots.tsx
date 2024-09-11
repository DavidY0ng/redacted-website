import React from 'react'
import loadingDots from '@/assets/img/nft-collection/pixel.png'
import style from './dots.module.css'

const MovingDots = () => {
  return (
    <div className={`${style['marquee-container']} w-[50px]`}>
      <div className={`${style.marquee}`}>
        <img src={loadingDots} alt="Loading dots" className="w-full" />
        <img src={loadingDots} alt="Loading dots" className="w-full" />
      </div>
    </div>
  )
}

export default MovingDots
