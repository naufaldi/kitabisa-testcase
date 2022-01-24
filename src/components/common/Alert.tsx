import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

const Alert: FC<{
  className?: string
  children: ReactNode
  title?: string
}> = ({ className, children, title, ...props }) => {
  return (
    <div
      className={clsx(
        'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800',
        className
      )}
      role="alert"
      {...props}
    >
      <span className="font-medium">{title}</span> {children}
    </div>
  )
}

export default Alert
