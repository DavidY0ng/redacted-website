import fire from '@/assets/img/sections/fire/fire.gif'

export default function FireBg() {
  return (
    <div className="relative mx-auto flex h-[700px] justify-center overflow-hidden bg-[#b31e1e] ">
      <img
        src={fire}
        loading="eager"
        className="absolute bottom-0 z-10 h-[500px] w-full md:h-[1000px] lg:h-[1300px] xl:h-[1600px]"
      ></img>
    </div>
  )
}
