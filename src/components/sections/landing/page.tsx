import girlImg from 'assets/img/sections/landing/character.jpg'
import logo from 'assets/img/sections/landing/logo.jpg'
import reWord from 'assets/img/sections/landing/re.png'
import reGen from 'assets/img/sections/landing/re-gen.jpg'
import { motion } from "framer-motion"
import LoadingPage from '../loading/page'
import { useEffect, useState } from 'react'


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

    const itemVariants = {
        hidden: { opacity: 0, x: 0, y: 0 },
        visible: custom => ({
            opacity: 1,
            x: custom.x || 0,
            y: custom.y || 0,
            transition: { duration: 1, delay: custom.delay || 0 }
        })
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
                    <motion.div className='absolute' variants={itemVariants} custom={{ delay: 1 }}>
                        <Logo />
                    </motion.div>
                    <motion.div className='absolute' variants={itemVariants} custom={{ delay: 1.5, x: -200 }}>
                        <REImg />
                    </motion.div>
                    <motion.div className='absolute' variants={itemVariants} custom={{ delay: 0.5 }}>
                        <GirlImg />
                    </motion.div>
                    <motion.div className='absolute' variants={itemVariants} custom={{ delay: 2.5, x: 300 }}>
                        <div className='transform translate-y-[150px]'>
                            <REGenImg />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}