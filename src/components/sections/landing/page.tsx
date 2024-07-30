import girlImg from 'assets/img/sections/landing/character.jpg'
import logo from 'assets/img/sections/landing/logo.jpg'
import rLetter from 'assets/img/sections/landing/r.png'
import eLetter from 'assets/img/sections/landing/e.png'
import reGen from 'assets/img/sections/landing/re-gen.jpg'
import { motion } from "framer-motion"
import LoadingPage from '../loading/page'
import { useEffect, useState } from 'react'
import { Transition } from '@/components/animation/slideIn'


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

function RLetter () {
    return (
        <div>
            <img src={rLetter} className='h-[150px]'></img>
        </div>
    )
}

function ELetter () {
    return (
        <div>
            <img src={eLetter} className='h-[150px]'></img>
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

export default function LandingPage() {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [startLoadingAnimation, setStartLoadingAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartLoadingAnimation(true);
        }, 5500); // Keep LoadingPage for 5 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (startLoadingAnimation) {
            const animationTimer = setTimeout(() => {
                setLoadingComplete(true);
            }, 500); // Match the duration of loading animation

            return () => clearTimeout(animationTimer);
        }
    }, [startLoadingAnimation]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5
            }
        }
    };

    const loadingVariants = {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 0, y: 50, transition: { duration: 0.5 } }
    };

    return (
        <div className='relative w-full h-screen flex justify-center items-center bg-red-600'>
            {!loadingComplete && (
                <motion.div 
                    className='absolute left-[20%] bottom-[20%]'
                    variants={loadingVariants}
                    initial="initial"
                    animate={startLoadingAnimation ? "animate" : "initial"}
                >
                    <LoadingPage />
                </motion.div>
            )}
            {loadingComplete && (
                <motion.div 
                    className='relative w-full h-screen flex justify-center items-center'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Transition className='absolute' custom={{ delay: 1 }}>
                        <Logo />
                    </Transition>
                    <Transition className='absolute' custom={{ delay: 1.5, x: -300 }}>
                        <RLetter />
                        <ELetter />
                    </Transition>
                    <Transition className='absolute' custom={{ delay: 0.5 }}>
                        <GirlImg />
                    </Transition>
                    <Transition className='absolute' custom={{ delay: 2.5, x: 300 }}>
                        <div className='transform translate-y-[150px]'>
                            <REGenImg />
                        </div>
                    </Transition>
                </motion.div>
            )}
        </div>
    );
}