import canister from '@/assets/img/genesis-pass/canister.gif'
import element1 from '@/assets/img/genesis-pass/1.webp'
import element2 from '@/assets/img/genesis-pass/2.webp'

function MobileGenesisPass() {
  return (
    <div className="relative h-[120vh] bg-black md:hidden md:h-screen">
      <div className="flex size-full max-w-[1400px] flex-col justify-center  pt-10">
        <div className="flex w-full justify-center md:h-full md:items-center">
          <div className="relative w-[400px] md:w-full">
            <img src={element1} className="w-[50px] translate-x-[27px]"></img>
            <div className="font-euroblack text-center text-[56px] leading-[0.8em] text-white md:text-[110px] lg:text-[150px]">
              GENESIS PASS
            </div>
          </div>
        </div>

        <div className="relative mx-auto h-[500px] w-[360px] md:w-[500px]">
          <div className="absolute top-[-12%] flex  w-full justify-center md:top-[-15%]">
            <div className="absolute bottom-[30%] right-5 flex flex-col items-end text-sm text-white">
              <p className="font-eurostile">THE KEY INTO</p>
              <p className="font-eurostile">THE ECO SYSTEM</p>
              <img src={element2} className="w-[140px]"></img>
            </div>
            <img
              src={canister}
              alt="Canister"
              className="z-10 size-[600px] object-cover md:size-[700px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopGenesisPass() {
  return (
    <div className="relative hidden h-[120vh] bg-black md:flex md:h-[120vh]">
      <div className="mx-auto flex size-full max-w-[1400px] flex-col justify-center">
        <div className="flex w-full justify-center md:h-full md:items-center">
          <div className="relative w-[400px] md:w-[750px] lg:w-[1000px]">
            <div className="flex w-full justify-center ">
              <img
                src={element1}
                className="absolute left-0 mx-[50px] w-[50px] translate-y-[-5px] lg:left-[-2%] lg:w-[80px] lg:translate-y-[-10px]"
              ></img>
            </div>

            <div className="font-euroblack text-center text-[56px] leading-[0.8em] text-white md:text-[110px] lg:text-[160px]">
              GENESIS PASS
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 mx-auto size-[600px]  -translate-x-1/2 -translate-y-2/3 md:w-[700px] lg:w-[1000px]">
          <div className="absolute top-[-12%] flex  w-full justify-center md:top-[5%] lg:top-0">
            <div className="absolute bottom-[15%] right-5 flex flex-col items-end text-sm text-white">
              <p className="font-eurostile lg:text-[20px]">
                THE KEY INTO THE ECOSYSTEM
              </p>
              <img src={element2} className="w-1/2 md:w-1/3 lg:w-[350px]"></img>
            </div>
            <img
              src={canister}
              alt="Canister"
              className="z-10 size-[600px] object-cover md:size-[700px] lg:size-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function GenesisPass() {
  return (
    <>
      <MobileGenesisPass />
      <DesktopGenesisPass />
    </>
  )
}
