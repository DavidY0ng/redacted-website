import React from 'react';
import { Transition } from '@/components/animation/slideIn'
import girlImg from 'assets/img/sections/landing/character.jpg'
import logo from 'assets/img/sections/landing/logo.jpg'
import rLetter from 'assets/img/sections/landing/r.png'
import eLetter from 'assets/img/sections/landing/e.png'
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

function REGenImg () {
    return (
        <div>
            <img src={reGen} className='h-[200px] opacity-50'></img>
        </div>
    )
}

export default function MainImage() {
    return (
        <div className='relative z-0 flex justify-center bg-gray-500 items-center h-screen'>
            <Transition className='absolute' custom={{ delay: 1 }}>
                <Logo />
            </Transition>
            <Transition className='absolute' custom={{ delay: 0.5 }}>
                <GirlImg />
            </Transition>
            <Transition className='absolute' custom={{ delay: 2.5, x: 300 }}>
                <div className='transform translate-y-[150px]'>
                    <REGenImg />
                </div>
            </Transition>
        </div>
    );
}