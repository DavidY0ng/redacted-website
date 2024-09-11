import logo1 from '@/assets/img/three-logos/1.webp'
import logo2 from '@/assets/img/three-logos/2.webp'
import logo3 from '@/assets/img/three-logos/3.webp'

export default function ThreeLogos() {
  return (
    <div className="relative h-screen bg-black">
      <div className=" mx-auto flex h-full max-w-[1400px] flex-col items-center justify-around gap-10 py-[100px] md:flex-row">
        <img
          src={logo1}
          className="w-[160px] md:w-[25%] md:max-w-[250px]"
        ></img>
        <img
          src={logo2}
          className="w-[100px] md:w-[15%] md:max-w-[100px]"
        ></img>
        <img src={logo3} className="w-[130px] md:w-1/5 md:max-w-[170px]"></img>
      </div>
    </div>
  )
}
