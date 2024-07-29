import * as React from "react"
import { Progress } from "../../components/ui/progress"

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
        <Progress value={progress} className="w-[500px] bg-transparent" />
        <LoadingFont progress={progress} />
    </div>
   
    )
}

function LoadingFont({ progress }) {
    return (
        <div>
            <div className="text-lg text-white">
                LOADING {Math.round(progress)}%
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