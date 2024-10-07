import { useState, useEffect, useCallback } from 'react'

interface UseLoadingProgressOptions {
  duration?: number
  steps?: number
}

export function useLoadingProgress({
  duration = 5000,
  steps = 100
}: UseLoadingProgressOptions = {}) {
  const [progress, setProgress] = useState(0)
  const [isLoadingFinished, setIsLoadingFinished] = useState(false)

  const interval = duration / steps

  const onProgressComplete = useCallback(() => {
    setIsLoadingFinished(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          onProgressComplete()
          return 100
        }
        return prevProgress + 1
      })
    }, interval)

    return () => clearInterval(timer)
  }, [interval, onProgressComplete])

  return { progress, isLoadingFinished }
}
