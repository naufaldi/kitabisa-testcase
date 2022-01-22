import React, { FC } from 'react'

const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-5 mx-auto max-w-screen-sm lg:max-w-screen-xl">
      {children}
    </div>
  )
}

export default Container
