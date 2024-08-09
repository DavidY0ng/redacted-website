import { useState, useEffect } from 'react';

export default function useLoading() {
    const [loadingComplete, setLoadingComplete] = useState(false);
    const [startLoadingAnimation, setStartLoadingAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartLoadingAnimation(true);
        }, 5500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (startLoadingAnimation) {
            const animationTimer = setTimeout(() => {
                setLoadingComplete(true);
            }, 500);

            return () => clearTimeout(animationTimer);
        }
    }, [startLoadingAnimation]);

    return { loadingComplete, startLoadingAnimation };
}