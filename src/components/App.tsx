import LandingPage from './sections/home/Landing'
import Intro from './sections/intro/Intro'
import About from './sections/about/About'
import NFTCollection from './sections/nft-collection/Nft-collection'

function App() {
  return (
    <>
      <LandingPage />
      <Intro />
      <About />
      <NFTCollection />
      <div className='h-[100vh] bg-blue-500'></div>
    </>
  )
}

export default App
