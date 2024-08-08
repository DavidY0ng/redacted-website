
import { motion, useScroll, useTransform } from 'framer-motion';
import r from 'assets/img/sections/landing/r.png';
import e from 'assets/img/sections/landing/e.png';
import './style.css'
import ConveroFont from '../../../assets/font/CONVERO.woff';


function CompleteWord() {
    return (
        <div className='text-[60px] h1 font-bold font-convero'>
            DACTED
        </div>
    );
}

export default function Redacted() {
    const { scrollY } = useScroll();
    
    const eRight = useTransform(scrollY, 
        [0, 1500, 1900], 
        ['-65px', '3px', '3px']
    );
    
    const eTop = useTransform(scrollY, 
        [1600, 2000], 
        ['60px', '0px']
    );

    const completeWordOpacity = useTransform(scrollY, 
        [2000, 2600], 
        [0, 1]
    );

    return (
        <div className='h-[200vh]'>
    <div className='flex flex-col h-[2500px] bg-gray-500 text-white items-center'>

        <div className='flex sticky top-[50%]'>
            <div className='text-[60px] h1 font-convero'>
                R
            </div>
            <motion.div 
                className='text-[60px] h1 font-bold font-convero'
                style={{ 
                    x: eRight,
                    y: eTop
                }}
            >
                E
            </motion.div>
            <motion.div 
                className='text-[60px] h1 font-bold ml-[10px]'
                style={{ 
                    opacity: completeWordOpacity
                }}
            >
                <CompleteWord />
            </motion.div>
        </div>
        
    </div>
</div>

    );
}
