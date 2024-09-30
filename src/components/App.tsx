import '../global.css'

import LandingPage from './sections/home/Landing'
import Intro from './sections/intro/Intro'
import About from './sections/about/About'
import NFTCollection from './sections/nft-collection/Nft-collection'
import Footer from './sections/footer/Footer'
import ThreeLogos from './sections/three-logos/ThreeLogos'
import HumanRace from './sections/human-race/HumanRace'
import GrabTicket from './sections/grab-ticket/GrabTicket'
import GenesisPass from './sections/genesis-pass/GenesisPass'
import AboutGenesisPass from './sections/about-genesis-pass/AboutGenesisPass'
import Squad from './sections/squad/Squad'
import Outro from './sections/outro/Outro'
import REGlitch from './sections/re-glitch/REGlitch'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // Scroll to top after a short delay when refresh page
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0)
    }, 6000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <LandingPage />
      <Intro />
      <About />
      <HumanRace />
      <NFTCollection />
      <GrabTicket />
      <ThreeLogos />
      <REGlitch />
      <GenesisPass />
      <AboutGenesisPass />
      <Squad />
      <Outro />
      <Footer />
    </>
  )
}

export default App
