import * as React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Transition } from '@/components/animation/slideIn'
import r from 'assets/img/sections/landing/r.png'
import e from 'assets/img/sections/landing/e.png'
import d from 'assets/img/sections/landing/d.png'
import a from 'assets/img/sections/landing/a.png'
import c from 'assets/img/sections/landing/c.png'
import t from 'assets/img/sections/landing/t.png'

function LetterR() {
  return (
    <div>
      <img src={r} className="md:h-[80px]"></img>
    </div>
  )
}

function LetterE() {
  return (
    <div>
      <img src={e} className="md:h-[80px]"></img>
    </div>
  )
}

function CompleteWord() {
  const letters = [d, a, c, t, e, d]; // Array of image sources

  return (
    <div className="flex gap-1">
      {letters.map((letter, index) => (
        <img key={index} src={letter} className="md:h-[80px]" />
      ))}
    </div>
  );
}

export default function Redacted() {
    const { scrollY } = useScroll();
    const [letterScaleRange, setLetterScaleRange] = React.useState([3.3, 1]); // Default for larger screens
    const [rPosition, setRPosition] = React.useState({ top: '-200px', left: '0px' });
    const [ePosition, setEPosition] = React.useState({ top: '200px', left: '-105px' });
  
    React.useEffect(() => {
      // Media query for screen size between 768px and 1024px
      const mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1024px)');
  
      // Function to update scale and positions based on screen size
      const handleScreenResize = (event:any) => {
        if (event.matches) {
          setLetterScaleRange([2.5, 1]); // Set scale to 2.5 for screens 768px - 1024px
          setRPosition({ top: '-200px', left: '75px' }); // Adjust R's position
          setEPosition({ top: '100px', left: '-30px' }); // Adjust E's position
        } else {
          setLetterScaleRange([3.3, 1]); // Set scale to 3.3 for other screens
          setRPosition({ top: '-200px', left: '0px' }); // Default R position
          setEPosition({ top: '200px', left: '-105px' }); // Default E position
        }
      };
  
      // Add event listener for the media query
      mediaQuery.addEventListener('change', handleScreenResize);
  
      // Call the function on initial render
      handleScreenResize(mediaQuery);
  
      // Cleanup event listener on component unmount
      return () => {
        mediaQuery.removeEventListener('change', handleScreenResize);
      };
    }, []);
  
    const letterScale = useTransform(scrollY, [0, 500], letterScaleRange);
    const rLeft = useTransform(scrollY, [0, 1000], [rPosition.left, '0%']);
    const rTop = useTransform(scrollY, [0, 1000], [rPosition.top, '0%']);
  
    const eLeft = useTransform(scrollY, [0, 1000], [ePosition.left, '0%']);
    const eTop = useTransform(scrollY, [0, 1000], [ePosition.top, '0%']);
  
    const completeWordOpacity = useTransform(scrollY, [1000, 1500], [0, 1]);
    const completeWordVisibility = useTransform(scrollY, [1000, 1001], ['none', 'block']);
  
    return (
      <div className="h-full w-full relative flex justify-center">
        <Transition className={'w-full flex gap-1 justify-center items-center'} custom={{ delay: 2 }}>
          <motion.div className="" style={{ scale: letterScale, x: rLeft, y: rTop }}>
            <LetterR />
          </motion.div>
          <motion.div className="" style={{ scale: letterScale, x: eLeft, y: eTop }}>
            <LetterE />
          </motion.div>
          <motion.div className="" style={{ opacity: completeWordOpacity }}>
            <CompleteWord />
          </motion.div>
        </Transition>
      </div>
    );
  }
  
  


  
