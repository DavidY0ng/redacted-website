import canister from '@/assets/img/genesis-pass/canister.gif'
import element1 from '@/assets/img/genesis-pass/1.webp'
import element2 from '@/assets/img/genesis-pass/2.webp'

export default function GenesisPass() {
  return (
    <div className="relative bg-black h-[120vh]">
      <div className="h-full w-full max-w-[1400px] pt-10 flex flex-col justify-center">
        <div className="flex justify-center">
          <div className="relative w-[400px]">
            <img src={element1} className="w-[50px] translate-x-[27px]"></img>
            <div className="font-euroblack text-white text-[56px] text-center leading-[0.8em]">
              GENESIS PASS
            </div>
          </div>
        </div>

        <div className="relative h-[500px] ">
          <div className="text-white absolute bottom-[30%] right-5 flex flex-col items-end text-sm">
            <p className="font-eurostile">THE KEY INTO</p>
            <p className="font-eurostile">THE ECO SYSTEM</p>
            <img src={element2} className="w-[140px]"></img>
          </div>
        </div>
        <div className="absolute top-[28%] left-1/2 transform -translate-x-1/2 w-full">
          <img
            src={canister}
            alt="Canister"
            className="w-[600px] h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  )
}
