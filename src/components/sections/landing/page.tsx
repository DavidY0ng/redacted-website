import girlImg from 'assets/img/sections/landing/character.jpg'
import logo from 'assets/img/sections/landing/logo.jpg'
import reWord from 'assets/img/sections/landing/re.png'
import reGen from 'assets/img/sections/landing/re-gen.jpg'
import { motion } from "framer-motion"


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
        hidden: { opacity: 0, x: 0 },
        visible: custom => ({
            opacity: 1,
            x: custom.x || 0,
            transition: { duration: 1, delay: custom.delay || 0 }
        })
    };

    return (
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
            <motion.div className='absolute' variants={itemVariants} custom={{ delay: 1.5, x: 300 }}>
                <REGenImg />
            </motion.div>
        </motion.div>
    );
}