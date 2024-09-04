import React from 'react';
import { Transition } from '@/components/animation/slideIn'
import girlImg from 'assets/img/sections/landing/character.png'
import mobileGirlImg from 'assets/img/sections/landing/mobile/character.png'
import logo from 'assets/img/sections/landing/eye.png'
import reGen from 'assets/img/sections/landing/re-gen.png'
import mobileReGen from 'assets/img/sections/landing/mobile/re-gen.png'


function GirlImg () {
    return (
        <div>
            <img src={girlImg} className='max-w-[1400px] hidden md:flex'></img>
            <img src={mobileGirlImg} className='flex md:hidden h-screen'></img>
        </div>
    )
}

function Logo () {
    return (
        <div>
            <img src={logo} className='max-w-[1400px]'></img>
        </div>
    )
}



function REGenImg () {
    return (
        <div className='flex justify-center'>
            <img src={reGen} className='max-w-[1400px] hidden md:flex'></img>
            <img src={mobileReGen} className='flex md:hidden w-[90%]'></img>
        </div>
    )
}

export default function MainImage() {
    return (
        <div className='relative z-0 flex justify-center items-center h-screen w-full flex-grow'>
            <Transition className='absolute hidden md:block' custom={{ delay: 1 }}>
                <Logo />
            </Transition>
            <Transition className='absolute' custom={{ delay: 0.5 }}>
                <GirlImg />
            </Transition>
            <Transition className='absolute bottom-[20%] flex ' custom={{ delay: 2.5}}>
                <REGenImg />
            </Transition>
        </div>
    );
}