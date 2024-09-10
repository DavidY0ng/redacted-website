import fire from '@/assets/img/sections/fire'

export default function FireBg() {
  return (
    <div className="relative mx-auto flex h-[700px] max-w-[1400px] justify-center overflow-hidden bg-[#b31e1e] ">
      <img
        src={fire.fire1}
        loading="lazy"
        className="absolute bottom-0 left-0 z-[100] hidden h-[700px] translate-x-[-300px]  translate-y-[150px] opacity-80 md:block lg:translate-x-0"
      ></img>
      <img
        src={fire.fire2}
        loading="lazy"
        className="absolute bottom-0 left-0 z-[100] h-[800px] translate-x-[-130px] translate-y-[200px] opacity-80 md:left-[10%] lg:left-[20%]"
      ></img>
      <img
        src={fire.fire3}
        loading="lazy"
        className="absolute bottom-0 z-[100] hidden h-[700px] translate-x-[50px] translate-y-[150px] opacity-80 lg:block"
      ></img>
      <img
        src={fire.fire3}
        loading="lazy"
        className="absolute bottom-0 right-0 z-[100] h-[700px] translate-x-[130px] translate-y-[150px] opacity-80 md:right-[10%] lg:right-[15%]"
      ></img>
      <img
        src={fire.fire4}
        loading="lazy"
        className="absolute bottom-0 right-0 z-[100] hidden h-[700px] translate-x-[300px] translate-y-[150px] opacity-80 md:block lg:translate-x-[140px]"
      ></img>
    </div>
  )
}
