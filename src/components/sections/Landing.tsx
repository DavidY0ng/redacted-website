import { motion } from "framer-motion"
import LoadingPage from './Loading/page'
import useLoading from '@/components/hooks/useLoading'
import MainImage from './MainImg/MainImg'
import StickyRedacted from './StickyRedacted/StickyRedacted'


export default function LandingPage() {
    const { loadingComplete, startLoadingAnimation } = useLoading();

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
        <div className="h-screen w-full bg-red-600 ">
             {/* {loadingComplete && (
                <div className="sticky top-[50%]  z-10 h-0 w-full">
                    <motion.div  variants={containerVariants}
                        initial="hidden"
                        animate="visible" 
                        className="w-full flex flex-col translate-y-[-50%] items-center">
                            <StickyRedacted />
                    </motion.div>
                </div>
             )} */}

            <div className='relative w-full h-[100vh] flex items-center'>
                {!loadingComplete && (
                    <motion.div 
                        className='absolute left-0 bottom-[20%]'
                        variants={loadingVariants}
                        initial="initial"
                        animate={startLoadingAnimation ? "animate" : "initial"}
                    >
                        <LoadingPage />
                    </motion.div>
                )}
                {loadingComplete && (
                <motion.div
                    className='relative w-full min-h-screen overflow-x-hidden'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <MainImage />


                </motion.div>
                )}
            </div>



        </div>

    );
}