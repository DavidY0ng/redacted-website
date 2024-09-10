import re from 'assets/img/about/re.webp'
import generationz from 'assets/img/about/generationz.webp'
import nft from 'assets/img/about/nft.webp'
import description from 'assets/img/about/description.webp'
import dot from 'assets/img/about/dot.webp'
import loading from 'assets/img/about/loading.webp'
import { LeftFrame, RightFrame } from '@/components/frame/Frame'

export default function About() {
  return (
    <div className="relative h-screen   bg-[#b31e1e]">
      <div className="flex justify-center">
        <div className="absolute flex h-full max-w-[1200px] flex-col justify-center gap-3 px-10">
          <img src={loading} className="block w-1/2 md:hidden"></img>
          <img src={re} className="w-full max-w-[80%] md:max-w-[50%]"></img>
          <img src={generationz}></img>
          <img src={nft} className="block md:hidden "></img>
          {/* desktop */}
          <div className="md:flex md:gap-10">
            <div className="hidden w-full items-start justify-end md:flex">
              <img src={loading} className=" w-1/2 pt-2"></img>
            </div>
            <div className="mt-10 flex w-3/4 flex-col gap-3 md:mt-0 md:w-full md:items-start">
              <img src={nft} className="hidden w-full md:flex"></img>
              <img src={dot} className="flex w-[6%] md:hidden"></img>
              <div className="flex w-2/3 justify-start md:mt-10">
                <img src={dot} className="hidden w-[5%] md:flex"></img>
              </div>
              <img src={description} className="w-full"></img>
            </div>
          </div>
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
