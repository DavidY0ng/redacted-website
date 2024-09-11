import LandingPage from './sections/home/Landing'
import Intro from './sections/intro/Intro'
import About from './sections/about/About'
import NFTCollection from './sections/nft-collection/Nft-collection'
import Footer from './footer/Footer'
import ThreeLogos from './sections/three-logos/ThreeLogos'
import '../global.css'

function App() {
  return (
    <>
      <LandingPage />
      <Intro />
      <About />
      <NFTCollection />
      <ThreeLogos />
      <Footer />
    </>
  )
}

export default App
