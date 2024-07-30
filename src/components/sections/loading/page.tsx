import * as React from "react"
import { Progress } from "../../ui/progress"
import { AnimatedText } from "@/components/animation/staggerText";
import style from './style.module.css'

function LoadingProgress() {
  const [progress, setProgress] = React.useState(0)
  const duration = 5000; // 5 seconds
  const steps = 100; // Number of steps
  const interval = duration / steps; // Time between each step

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          return 100
        }
        return prevProgress + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center space-x-5">
          <div className={style.trapeziumWrapper}>
          <div className={style.progressBar} style={{ width: `${progress}%` }}>

            <Progress value={progress} className="w-[500px] border-b-2 border-r-2 animate-pulse" />
          </div>
          </div>
        
        <LoadingFont progress={progress} />
    </div>
   
    )
}

function LoadingFont({ progress}:{progress:number}) {
    const letters = "LOADING"
    
    return (
        <div>
            <div className="text-lg text-white flex">
                    <AnimatedText text={letters} repeatDelay={5000} className="animate-pulse"></AnimatedText>
                <span className="ml-2">{Math.round(progress)}%</span>
            </div>
        </div>
    )
}

export default function LoadingPage() {
    return (
        <div className="bg-red-700 h-screen relative">
            <div className="absolute bottom-[20%] left-[10%]">
                <div className="flex items-center space-x-5">
                    <LoadingProgress />
                </div>
            </div>
        </div>
      
    )
}

