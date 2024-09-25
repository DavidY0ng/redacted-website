import { useState, useEffect, useCallback } from 'react'

const MOBILE_BREAKPOINT = 640

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false
  )

  const checkIsMobile = useCallback(() => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
  }, [])

  useEffect(() => {
    // Check on initial load
    checkIsMobile()

    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile)

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [checkIsMobile])

  return isMobile
}

export default useIsMobile
