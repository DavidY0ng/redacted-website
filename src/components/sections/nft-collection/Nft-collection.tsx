import character from '@/assets/img/nft-collection/index'
import bg from '@/assets/img/nft-collection/bg.webp'
import fivek from '@/assets/img/nft-collection/5k.webp'
import description from '@/assets/img/nft-collection/description.png'

export default function NFTCollection() {
  return (
    <div className="relative h-[200vh] w-full bg-black">
      <img src={bg} className="absolute size-full"></img>

      <img
        src={character.character1}
        className="absolute  right-[21%] top-[40%] z-10 w-1/2 -translate-y-1/2"
      ></img>
      <img
        src={character.character2}
        className="absolute bottom-[30%] left-1/2 w-1/3 -translate-x-1/2"
      ></img>
      <img
        src={character.character3}
        className="absolute left-[30%] top-[22%] z-10 w-1/4"
      ></img>
      <img
        src={character.character5}
        className="absolute left-[10%] bottom-[18%] z-10 w-1/4"
      ></img>
      <img
        src={character.character6}
        className="absolute right-[10%] bottom-[22%] z-10 w-1/4"
      ></img>
      <img
        src={character.character7}
        className="absolute right-[32%] bottom-[10%] z-10 w-1/4"
      ></img>
      <img
        src={character.character8}
        className="absolute left-[12%] top-[10%] z-10 w-1/4"
      ></img>
      <img
        src={character.character9}
        className="absolute right-[0%] top-[5%] z-10 w-1/2"
      ></img>

      <div className="absolute flex h-full justify-center px-10">
        <div className=" flex h-full flex-col items-center justify-center">
          <img src={fivek} className="mb-5"></img>
          <div className="flex w-full justify-end">
            <img src={description} className="w-1/2"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
