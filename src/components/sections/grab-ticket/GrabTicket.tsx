import dragon_girl_mobile from '@/assets/img/grab-ticket/dragon-girl-mobile.gif'
import dragon_girl_desktop from '@/assets/img/grab-ticket/dragon-girl-desktop.gif'
import coming_soon from '@/assets/img/grab-ticket/coming-soon.png'
import element from '@/assets/img/grab-ticket/element.png'
import { WholeStandardFrame } from '@/components/frame/Frame'

function DesktopGrabTicket() {
  return (
    <div className="bg-red relative hidden h-screen w-full md:block">
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="absolute left-0 z-10 ml-7 flex h-screen w-1/3 flex-col justify-center gap-5">
          <img src={element} className="md:w-2/3 xl:w-1/2"></img>
          <div className="font-euroblack mb-5 leading-none text-white md:text-[60px] lg:text-[80px] xl:text-[100px]">
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

function MobileGrabTicket() {
  return (
    <div className="bg-red relative block h-screen w-full md:hidden">
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="absolute left-[13%] z-10 mt-10 flex w-2/3 flex-col">
          <img src={element} className="w-1/2 max-w-[200px]"></img>
          <div className="font-euroblack mb-3 text-[55px] leading-none text-white">
            GRAB YOUR TICKET
          </div>
          <img src={coming_soon} className="w-3/4 max-w-[250px]"></img>
        </div>
      </div>
      <img src={dragon_girl_mobile} className="absolute h-screen w-full"></img>
      <WholeStandardFrame />
    </div>
  )
}

export default function GrabTicket() {
  return (
    <>
      <DesktopGrabTicket />
      <MobileGrabTicket />
    </>
  )
}
