import dragon_girl_mobile from '@/assets/img/grab-ticket/dragon-girl-mobile.gif'
import dragon_girl_desktop from '@/assets/img/grab-ticket/dragon-girl-desktop.gif'
import coming_soon from '@/assets/img/grab-ticket/coming-soon.png'
import element from '@/assets/img/grab-ticket/element.png'
import { WholeStandardFrame } from '@/components/frame/Frame'

export default function GrabTicket() {
  return (
    <div className="bg-red relative h-screen w-full">
     
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="absolute z-10 left-0 flex flex-col w-1/3 justify-center h-screen gap-5 ml-7">
          <img src={element} className="md:w-2/3 xl:w-1/2"></img>
          <div className="font-euroblack md:text-[60px] lg:text-[80px] xl:text-[100px] leading-none text-white mb-5">
            GRAB YOUR TICKET
          </div>
          <img src={coming_soon} className="md:w-2/3 xl:w-1/2"></img>
        </div>
      </div>
      <img
        src={dragon_girl_desktop}
        className="absolute right-0 h-screen w-full"
      ></img>
       <WholeStandardFrame />
    </div>
  )
}
