'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Track mouse movement
    window.addEventListener('mousemove', moveCursor)

    // Add hover listeners to interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea')
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter)
        el.addEventListener('mouseleave', handleMouseLeave)
      })

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter)
          el.removeEventListener('mouseleave', handleMouseLeave)
        })
      }
    }

    // Initial setup
    const cleanup = updateInteractiveElements()

    // Observe DOM changes to catch dynamically added elements
    const observer = new MutationObserver(updateInteractiveElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cleanup()
      observer.disconnect()
    }
  }, [cursorX, cursorY])

  // Hide on mobile/tablet
  if (typeof window !== 'undefined' && window.innerWidth < 1024) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0
        }}
      >
        <motion.div
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.5 : 1
          }}
          transition={{ duration: 0.2 }}
          className="w-full h-full border-2 border-cream rounded-full"
        />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: isVisible ? 1 : 0,
          translateX: 12,
          translateY: 12
        }}
      >
        <div className="w-full h-full bg-cream rounded-full" />
      </motion.div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}
