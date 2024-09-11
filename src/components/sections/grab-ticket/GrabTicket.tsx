import mobile1 from '@/assets/img/grab-ticket/360x800.mp4'
import mobile2 from '@/assets/img/grab-ticket/1080x2400.mp4'
import desktop1 from '@/assets/img/grab-ticket/1920x1080.mp4'
import desktop2 from '@/assets/img/grab-ticket/3360x2800.mp4'

export default function GrabTicket() {
  return (
    <div className="relative h-screen bg-red">
      <video
        src={mobile1}
        className="size-full"
        loop
        autoPlay
        muted
        playsInline
      ></video>
    </div>
  )
}
