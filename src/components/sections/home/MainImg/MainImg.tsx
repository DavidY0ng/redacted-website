import React from 'react';
import { Transition } from '@/components/animation/slideIn'
import girlImg from 'assets/img/sections/landing/character.webp'
import mobileGirlImg from 'assets/img/sections/landing/mobile/character.png'
import logo from 'assets/img/sections/landing/eye.webp'
import reGen from 'assets/img/sections/landing/re-gen.webp'
import mobileReGen from 'assets/img/sections/landing/mobile/re-gen.png'
import images from 'assets/img/sections/landing/frame-elements/index';
import icons from 'assets/img/sections/landing/icons/index'



function GirlImg () {
    return (
        <div className=''>
            <img src={girlImg} loading='eager' className='md:max-w-[1200px] lg:max-w-[1400px] md:max-h-[1000px] hidden md:flex h-screen'></img>
            <img src={mobileGirlImg} loading='eager' className='block md:hidden h-screen w-full'></img>
            <div className='absolute bottom-0 left-[50%] -translate-x-[50%]'>
                <Icons/>
            </div>
        </div>
    )
}

function Logo () {
    return (
        <div>
            <img src={logo} loading='eager' className='md:max-w-[1200px] lg:w-auto lg:max-w-[1400px] md:max-h-[1000px] h-screen'></img>
        </div>
    )
}

function REGenImg () {
    return (
        <div className='flex justify-center'>
            <img src={reGen} loading='eager' className='md:max-w-[900px] lg:max-w-[1300px] hidden md:block'></img>
            <img src={mobileReGen} loading='eager' className='block md:hidden w-[90%]'></img>
        </div>
    )
}

function LeftFrame () {
    return (
        <div className='flex flex-col gap-10 h-screen items-center justify-center relative'>
            <img src={images.leftFrame1} loading='eager' className='h-3 top-0 absolute mt-2'></img>
            <img src={images.leftFrame2} loading='eager' className='h-[35%] absolute top-20'></img>
            <img src={images.leftFrame3} loading='eager' className='h-3'></img>
            <img src={images.leftFrame4} loading='eager' className='h-[35%] absolute bottom-20'></img>
            <img src={images.leftFrame5} loading='eager' className='h-3 bottom-0 absolute mb-2'></img>
        </div>
    )
}

function RightFrame () {
    return (
        <div className='flex flex-col gap-10 h-screen items-center justify-center relative'>
            <img src={images.rightFrame1} loading='eager' className='h-3 top-0 absolute mt-2'></img>
            <img src={images.rightFrame2} loading='eager' className='h-[35%] absolute top-20'></img>
            <img src={images.rightFrame3} loading='eager' className='h-3'></img>
            <img src={images.rightFrame4} loading='eager' className='h-[35%] absolute bottom-20'></img>
            <img src={images.rightFrame5} loading='eager' className='h-3 bottom-0 absolute mb-2'></img>
        </div>
    )
}

function Icons() {
    return (
        <div className='flex justify-center items-center gap-3'>
            <img src={icons.icon1} loading='eager' className='h-[50px]'></img>
            <img src={icons.icon2} loading='eager' className='h-[50px]'></img>
            <img src={icons.icon3} loading='eager' className='h-[50px]'></img>
        </div>
    )
}

export default function MainImage() {
    return (
        <div className='relative z-0 flex justify-center items-center h-screen overflow-hidden'>
            <div className='absolute left-0 h-screen'>
                <LeftFrame />
            </div>
            
            <Transition className='absolute hidden md:block' custom={{ delay: 2 }}>
                <Logo />
            </Transition>
            <Transition className='absolute' custom={{ delay: 1 }}>
                <GirlImg />
            </Transition>
            <Transition className='absolute' custom={{ delay: 2.5}}>
                <REGenImg />
            </Transition>

            <div className='absolute right-0 h-screen'>
                <RightFrame/>
            </div>
            
        </div>
    );
}