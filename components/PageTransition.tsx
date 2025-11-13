'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    // Add page entrance animation
    document.body.classList.add('page-transitioning')
    
    const timer = setTimeout(() => {
      document.body.classList.remove('page-transitioning')
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{children}</>
}
