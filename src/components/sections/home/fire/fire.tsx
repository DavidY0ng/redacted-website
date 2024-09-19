import fire from '@/assets/img/sections/fire/fire.gif'

export default function FireBg() {
  return (
    <div className="relative mx-auto flex h-[700px] justify-center overflow-hidden bg-[#b31e1e] ">
      <img
        src={fire}
        loading="eager"
        className="absolute h-[1000px] md:h-[1600px] w-full bottom-0 z-[100]"
      ></img>
    </div>
  )
}
