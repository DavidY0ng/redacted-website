import REglitch from '@/assets/img/re-glitch/logo-sticker.mp4'

export default function REGlitch() {
  return (
    <div className="relative flex h-screen items-center justify-center bg-black">
      <video loop autoPlay muted src={REglitch}></video>
    </div>
  )
}
