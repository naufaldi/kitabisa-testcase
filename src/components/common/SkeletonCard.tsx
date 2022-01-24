import clsx from 'clsx'
import React, { FC } from 'react'

const SkeletonCard: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={clsx(
        ' flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ',
        className
      )}
    >
      <div className="w-full rounded-t-md h-48 animate-pulse bg-slate-200"></div>
      <div className="flex flex-col p-3 animate-pulse">
        <div className="bg-slate-200 mt-2 h-6"></div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 my-3 "></div>
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col w-6/12 space-y-2">
            <div className="h-5 w-3/12 bg-slate-200"></div>
            <div className="h-4 w-6/12 bg-slate-200"></div>
          </div>
          <div className="flex flex-col items-end w-6/12 space-y-2">
            <div className="h-5 w-5/12 bg-slate-200"></div>
            <div className="h-4 w-2/12 bg-slate-200"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonCard
