import '../global.css'

import LandingPage from './sections/home/Landing'
// import Intro from './sections/intro/Intro'
import About from './sections/about/About'
import NFTCollection from './sections/nft-collection/Nft-collection'
import Footer from './sections/footer/Footer'
import ThreeLogos from './sections/three-logos/ThreeLogos'
import HumanRace from './sections/human-race/HumanRace'
import GrabTicket from './sections/grab-ticket/GrabTicket'
// import JourneyBegin from './sections/grab-ticket/JourneyBegin'
import GenesisPass from './sections/genesis-pass/GenesisPass'
import AboutGenesisPass from './sections/about-genesis-pass/AboutGenesisPass'
import Squad from './sections/squad/Squad'
import Outro from './sections/outro/Outro'
import REGlitch from './sections/re-glitch/REGlitch'
import { useEffect } from 'react'

const ScrollContainer = ({ children }) => {
  useEffect(() => {
    const handleWheel = (e) => {
      // Adjust this number to change scroll speed
      // Higher numbers = slower scrolling (need more scrolling)
      const scrollFactor = 1.7

      window.scrollBy({
        top: e.deltaY / scrollFactor,
        behavior: 'auto'
      })

      // Prevent default scroll
      e.preventDefault()
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return <>{children}</>
}

function App() {

  return (
    <>
      <ScrollContainer>
        <LandingPage />
        {/* <Intro /> */}
        <About />
        <HumanRace />
        <NFTCollection />
        <GrabTicket />
        {/* <JourneyBegin /> */}
        <ThreeLogos />
        <REGlitch />
        <GenesisPass />
        <AboutGenesisPass />
        <Squad />
        <Outro />
        <Footer />
      </ScrollContainer>
    </>
  )
}

export default App
