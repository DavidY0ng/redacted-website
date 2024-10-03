import dragon_girl_mobile from '@/assets/img/grab-ticket/dragon-girl-mobile.gif'
import dragon_girl_desktop from '@/assets/img/grab-ticket/dragon-girl-desktop.gif'
import JourneyBeginFrame from '@/components/frame/JourneyBeginFrame'
import Menu from '@/components/menu/Menu'

function DesktopJourneyBegin() {
  return (
    <div className="bg-red relative hidden h-[200vh] w-full md:block">
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="absolute flex h-screen flex justify-center gap-5 pt-[100px]">
          <div className="font-euroblack mb-5 leading-none text-white md:text-[60px] lg:text-[80px] xl:text-[100px] w-2/3 text-center">
            LET THE JOURNEY BEGIN
          </div>
        </div>
      </div>
      <img
        src={dragon_girl_desktop}
        className="absolute bottom-0 h-[140vh] w-full"
      ></img>
      <div className="absolute z-10 bottom-0 left-1/2 -translate-x-1/2">
        <Menu />
      </div>
      <JourneyBeginFrame />
    </div>
  )
}

function MobileJourneyBegin() {
  return (
    <div className="bg-red relative block h-screen w-full md:hidden">
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="absolute left-[13%] z-10 mt-10 flex w-2/3 flex-col">
          <div className="font-euroblack mb-3 text-[55px] leading-none text-white">
            GRAB YOUR TICKET
          </div>
        </div>
      </div>
      <img src={dragon_girl_mobile} className="absolute h-screen w-full"></img>
      <JourneyBeginFrame />
    </div>
  )
}

export default function JourneyBegin() {
  return (
    <>
      <DesktopJourneyBegin />
      <MobileJourneyBegin />
    </>
  )
}
