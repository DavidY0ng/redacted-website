
import { motion, useScroll, useTransform } from 'framer-motion';
import r from 'assets/img/sections/landing/r.png';
import e from 'assets/img/sections/landing/e.png';
import './style.css'
import { Transition } from '@/components/animation/slideIn';



function CompleteWord() {
    return (
        <div className='text-[160px] h1 font-bold font-convero leading-none'>
            DACTED
        </div>
    );
}

export default function Redacted() {
    const { scrollY } = useScroll();

    const eRight = useTransform(scrollY,
        [0, 1500, 2100],
        ['0px', '170px', '170px']
    );

    const eTop = useTransform(scrollY,
        [1600, 2000],
        ['0px', '-158px']
    );

    const completeWordOpacity = useTransform(scrollY,
        [2000, 2600],
        [0, 1]
    );

    return (
        <div className='text-white'>
            <Transition className={''} custom={{ delay: 2, x: 300 }}>
            
                    <div className='text-[160px] h1 font-convero leading-none '>
                        R
                    </div>
                    <div className="flex">
                        <motion.div
                            className='text-[160px] h1 font-bold font-convero leading-none '
                            style={{
                                x: eRight,
                                y: eTop
                            }}
                        >
                            E
                        </motion.div>
                        <motion.div
                            className='text-[60px] h1 font-bold ml-[10px] '
                            style={{
                                x: eRight,
                                y: eTop,
                                opacity: completeWordOpacity
                            }}
                        >
                            <CompleteWord />
                        </motion.div>
                    </div>
                    
                
            </Transition>
        </div>
            
    );
}
