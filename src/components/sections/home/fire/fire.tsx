import fire from "@/assets/img/sections/fire"

export default function FireBg() {
    return (
      <div className="flex bg-[#b31e1e] justify-center overflow-hidden h-[700px] relative ">
        <img src={fire.fire1} className="h-[700px] hidden absolute left-0 bottom-0"></img>
        <img src={fire.fire2} className="h-[800px] absolute left-0 bottom-0 translate-y-[200px]  translate-x-[-100px] opacity-80"></img>
        <img src={fire.fire3} className="h-[700px] absolute bottom-0 translate-y-[150px] translate-x-[100px] opacity-80"></img>
        <img src={fire.fire4} className="h-[700px] hidden absolute right-0 bottom-0"></img>
      </div>
    );
  }
  