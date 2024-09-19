import '../global.css'

import LandingPage from './sections/home/Landing'
import Intro from './sections/intro/Intro'
import About from './sections/about/About'
import NFTCollection from './sections/nft-collection/Nft-collection'
import Footer from './footer/Footer'
import ThreeLogos from './sections/three-logos/ThreeLogos'
import HumanRace from './sections/human-race/HumanRace'
import GrabTicket from './sections/grab-ticket/GrabTicket'
import GenesisPass from './sections/genesis-pass/GenesisPass'
import AboutGenesisPass from './sections/about-genesis-pass/AboutGenesisPass'

function App() {
  return (
    <>
      <LandingPage />
      <Intro />
      <About />
      <HumanRace />
      <NFTCollection />
      <GrabTicket />
      <ThreeLogos />
      <GenesisPass />
      <AboutGenesisPass />
      <Footer />
    </>
  )
}

export default App
