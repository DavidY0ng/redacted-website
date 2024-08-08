
import { motion, useScroll, useTransform } from 'framer-motion';
import r from 'assets/img/sections/landing/r.png';
import e from 'assets/img/sections/landing/e.png';

function CompleteWord() {
    return (
        <div className='text-[60px] h1 font-bold'>
            DACTED
        </div>
    );
}

export default function Redacted() {
    const { scrollY } = useScroll();
    
    const eRight = useTransform(scrollY, 
        [0, 300, 600], 
        ['0%', '100%', '100%']
    );
    
    const eTop = useTransform(scrollY, 
        [500, 800], 
        ['90px', '0px']
    );

    const completeWordOpacity = useTransform(scrollY, 
        [1200, 1800], 
        [0, 1]
    );

    return (
        <div className='h-[200vh]'>
            <div className='flex items-center flex-col h-[2500px] bg-gray-500'>
                <div className='sticky top-[50%] text-[60px] h1'>
                    R
                </div>
                <motion.div 
                    className='sticky top-[50%] text-[60px] h1 font-bold'
                    style={{ 
                        x: eRight,
                        y: eTop
                    }}
                >
                    E
                </motion.div>
                <motion.div 
                    className='sticky top-[50%] text-[60px] h1 font-bold'
                    style={{ 
                        opacity: completeWordOpacity
                    }}
                >
                    <CompleteWord />
                </motion.div>
            </div>
        </div>
    );
}
