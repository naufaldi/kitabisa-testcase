import clsx from 'clsx'
import React, { FC } from 'react'

type ButtonVariant = 'primary' | 'secondary'
type ButtonSize = 'small' | 'medium' | 'large'
interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}
const Button: FC<ButtonProps> = ({
  children,
  disabled,
  className,
  variant = 'primary', // default value
  size = 'medium', // default value
  onClick,
  ...props
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      className={clsx(
        'inline-flex items-center rounded-md transition-all',
        variant === 'primary' && 'bg-ocean-500 text-white hover:bg-ocean-600',
        variant === 'secondary' && 'bg-secondary text-white',
        size === 'small' && 'px-4 py-2',
        size === 'medium' && 'px-6 py-3',
        size === 'large' && 'px-8 py-4',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
