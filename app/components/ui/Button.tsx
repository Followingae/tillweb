'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
    const baseStyles = 'font-medium rounded-pill transition-all duration-300 inline-flex items-center justify-center'

    const variants = {
      primary: 'bg-coral text-cream hover:bg-coral-dark shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed',
      secondary: 'border-2 border-navy text-navy hover:bg-navy hover:text-cream disabled:opacity-50 disabled:cursor-not-allowed',
      ghost: 'text-navy hover:bg-navy/10 disabled:opacity-50 disabled:cursor-not-allowed'
    }

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-12 py-4 text-lg'
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
export default Button
