import girlImg from 'assets/img/sections/landing/character.jpg'
import logo from 'assets/img/sections/landing/logo.jpg'
import reWord from 'assets/img/sections/landing/re.png'
import reGen from 'assets/img/sections/landing/re-gen.jpg'


function GirlImg () {
    return (
        <div>
            <img src={girlImg} className='h-[800px]'></img>
        </div>
    )
}

function Logo () {
    return (
        <div>
            <img src={logo}></img>
        </div>
    )
}

function REImg () {
    return (
        <div>
            <img src={reWord}></img>
        </div>
    )
}

function REGenImg () {
    return (
        <div>
            <img src={reGen} className='h-[200px]'></img>
        </div>
    )
}

export default function LandingPage() {
    return (
        <div className='relative w-full h-screen flex justify-center items-center'>
            
            <div className='absolute'>
                <Logo />
            </div>
         
            <div className='absolute transform translate-x-[-200px]'>
                <REImg />
            </div>
            <div className='absolute'>
                <GirlImg />
            </div>
            <div className='absolute transform translate-x-[300px]'>
                <REGenImg />
            </div>

        </div>
    )
}