import clsx from 'clsx'
import React, { FC } from 'react'

interface CardProps {
  className?: string
}

const Card: FC<CardProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        ' flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ',
        className
      )}
    >
      <div className="w-full overflow-hidden rounded-t-md h-48">
        <img
          src="https://via.placeholder.com/150"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-3">
        <h6 className="font-medium mt-2 capitalize text-gray-600">
          Bantu Adik Dhanu sampai Sembuh
        </h6>

        <div className="w-full bg-gray-200 rounded-full h-2.5 my-3 ">
          <div
            className="bg-ocean-500 h-2.5 rounded-full"
            style={{ width: '45%' }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm">Rp 71.151.133</p>
          <p className="text-sm"> 88 hari lagi</p>
        </div>
      </div>
    </div>
  )
}

export default Card
