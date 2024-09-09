import fire from "@/assets/img/sections/fire"

export default function FireBg() {
    return (
      <div className="flex bg-[#b31e1e] justify-center overflow-hidden h-[700px] relative max-w-[1400px] mx-auto ">
        <img src={fire.fire1} loading='lazy' className="h-[700px] hidden md:block absolute left-0 bottom-0 translate-y-[150px]  translate-x-[-300px] lg:translate-x-0 opacity-80 z-[100]"></img>
        <img src={fire.fire2} loading='lazy' className="h-[800px] absolute left-0 md:left-[10%] lg:left-[20%] bottom-0 translate-y-[200px] translate-x-[-130px] opacity-80 z-[100]"></img>
        <img src={fire.fire3} loading='lazy' className="h-[700px] hidden lg:block absolute bottom-0 translate-y-[150px] translate-x-[50px] opacity-80 z-[100]"></img>
        <img src={fire.fire3} loading='lazy' className="h-[700px] absolute right-0 md:right-[10%] lg:right-[15%] bottom-0 translate-y-[150px] translate-x-[130px] opacity-80 z-[100]"></img>
        <img src={fire.fire4} loading='lazy' className="h-[700px] hidden md:block absolute right-0 bottom-0 translate-y-[150px] translate-x-[300px] lg:translate-x-[140px] opacity-80 z-[100]"></img>
      </div>
    );
  }
  