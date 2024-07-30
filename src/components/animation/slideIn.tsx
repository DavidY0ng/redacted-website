import React from 'react';
import { motion } from 'framer-motion';

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

const transitionVariants = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: custom => ({
        opacity: 1,
        x: custom.x || 0,
        y: custom.y || 0,
        transition: { duration: 1, delay: custom.delay || 0 }
    })
};

export const AnimatedContainer = ({ children, className }) => {
    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {children}
        </motion.div>
    );
};

export const Transition = ({ children, className, custom }) => {
    return (
        <motion.div
            className={className}
            variants={transitionVariants}
            custom={custom}
        >
            {children}
        </motion.div>
    );
};