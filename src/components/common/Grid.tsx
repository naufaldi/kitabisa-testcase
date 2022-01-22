import clsx from 'clsx'
import React, { FC, ReactNode } from 'react'

const Grid: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className
}) => {
  return (
    <div
      className={clsx(
        'grid grid-cols-4 gap-x-4 lg:grid-cols-12 lg:gap-x-6',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Grid
