import re from 'assets/img/about/re.webp'
import generationz from 'assets/img/about/generationz.webp'
import nft from 'assets/img/about/nft.webp'
import description from 'assets/img/about/description.webp'
import dot from 'assets/img/about/dot.webp'
import loading from 'assets/img/about/loading.webp'
import { LeftFrame, RightFrame } from '@/components/frame/Frame'

export default function About() {
  return (
    <div className="relative h-screen bg-[#b31e1e]">
      <div className="absolute flex h-full flex-col justify-center gap-3 px-10">
        <img src={loading} className="w-1/2"></img>
        <img src={re}></img>
        <img src={generationz}></img>
        <img src={nft}></img>
        <div className="flex flex-col gap-3 mt-10 w-3/4">
          <img src={dot} className='w-[6%]'></img>
          <img src={description} className='w-full'></img>
        </div>
      </div>

      <div className="absolute left-0 h-screen">
        <LeftFrame />
      </div>
      <div className="absolute right-0 h-screen">
        <RightFrame />
      </div>
    </div>
  )
}
