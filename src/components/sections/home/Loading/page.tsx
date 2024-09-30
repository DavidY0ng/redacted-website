import * as React from 'react'
import { Progress } from '../../../ui/progress'
import { AnimatedText } from '@/components/animation/staggerText'
import style from './style.module.css'
import slantedTrapezium from 'assets/img/sections/loading/slanted trapezium.png'
import square from 'assets/img/sections/loading/square.png'
import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

function LoadingProgress({
  onProgressComplete
}: {
  onProgressComplete: () => void
}) {
  const [progress, setProgress] = React.useState(0)
  const duration = 5000 // 5 seconds
  const steps = 100 // Number of steps
  const interval = duration / steps // Time between each step

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          onProgressComplete() // Trigger the callback when progress reaches 100
          return 100
        }
        return prevProgress + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [interval, onProgressComplete])

  return (
    <div className="items-center space-x-5 md:flex">
      <div className={style.trapeziumWrapper}>
        <div className={style.progressBar} style={{ width: `${progress}%` }}>
          <Progress
            value={progress}
            className="w-[300px] animate-pulse border-b-2 border-r-2 md:w-[500px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <LoadingFont progress={progress} />
        </div>

        <div className="flex">
          <LoadingTrapezium />
        </div>
      </div>
    </div>
  )
}

function LoadingFont({ progress }: { progress: number }) {
  const letters = 'LOADING'

  return (
    <div>
      <div className="flex text-xl text-white font-eurostile">
        <AnimatedText
          text={letters}
          repeatDelay={3000}
          className="animate-pulse"
        ></AnimatedText>
        <span className="ml-2 text-lg">{Math.round(progress)}%</span>
      </div>
    </div>
  )
}

export function LoadingTrapezium() {
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  const controls3 = useAnimation()
  const controls4 = useAnimation()
  const controls5 = useAnimation()

  const startBlinking = async (controls: any) => {
    while (true) {
      await controls.start({ opacity: 0, transition: { duration: 0.2 } })
      await controls.start({ opacity: 1, transition: { duration: 0.2 } })
      await new Promise((resolve) => setTimeout(resolve, Math.random() * 1500))
    }
  }

  useEffect(() => {
    startBlinking(controls1)
    startBlinking(controls2)
    startBlinking(controls3)
    startBlinking(controls4)
    startBlinking(controls5)
  }, [controls1, controls2, controls3, controls4, controls5])

  return (
    <div className="flex items-end">
      <motion.img
        src={slantedTrapezium}
        className="h-5 w-4"
        animate={controls1}
      />
      <motion.img
        src={slantedTrapezium}
        className="h-5 w-4"
        animate={controls2}
      />
      <motion.img
        src={slantedTrapezium}
        className="h-5 w-4"
        animate={controls3}
      />
      <motion.img
        src={slantedTrapezium}
        className="h-5 w-4"
        animate={controls4}
      />
      <div className="flex items-end pl-1">
        <motion.img src={square} className="size-2" animate={controls5} />
      </div>
    </div>
  )
}

export default function LoadingPage() {
  const [isCompleted, setIsCompleted] = React.useState(false)

  const handleProgressComplete = () => {
    setIsCompleted(true)
  }

  return (
    <motion.div
      className="items-center space-x-5 md:flex overflow-hidden"
      initial={{ opacity: 1, y: 0 }} // Start at full opacity and initial position
      animate={isCompleted ? { opacity: 0, y: 50 } : {}} // Trigger fade out and slide down when completed
      transition={{ duration: 0.5 }} // Transition duration of 0.5s
    >
      <LoadingProgress onProgressComplete={handleProgressComplete} />
    </motion.div>
  )
}
