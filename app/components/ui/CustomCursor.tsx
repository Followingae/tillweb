'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || typeof window === 'undefined') return
    if (!cursorRef.current) return

    const cursor = cursorRef.current

    const moveCursor = (e: MouseEvent) => {
      if (!cursor) return

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2
      })
    }

    const handleMouseEnter = () => {
      if (!cursor) return
      gsap.to(cursor, { scale: 2, duration: 0.3 })
    }

    const handleMouseLeave = () => {
      if (!cursor) return
      gsap.to(cursor, { scale: 1, duration: 0.3 })
    }

    window.addEventListener('mousemove', moveCursor)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [isMounted])

  return (
    <div
      ref={cursorRef}
      className="fixed w-2 h-2 bg-coral rounded-full pointer-events-none z-[9999] hidden lg:block"
      style={{ left: '-4px', top: '-4px' }}
    />
  )
}
