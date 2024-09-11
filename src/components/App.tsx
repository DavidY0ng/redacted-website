import LandingPage from './sections/home/Landing'
import Intro from './sections/intro/Intro'
import About from './sections/about/About'
import NFTCollection from './sections/nft-collection/Nft-collection'
import Footer from './footer/Footer'
import '../global.css'

function App() {
  return (
    <>
      <LandingPage />
      <Intro />
      <About />
      <NFTCollection />
      <Footer />
    </>
  )
}

export default App
