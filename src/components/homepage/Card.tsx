import clsx from 'clsx'
import React, { FC } from 'react'

interface CardProps {
  className?: string
  data: any
}

const Card: FC<CardProps> = ({ className, data }) => {
  const convertCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(value)
  }
  const endCampaign = (value: number) => {
    if (value === 0) {
      return 'Campaign Selesai'
    }
    return value + ' hari lagi'
  }

  return (
    <div
      className={clsx(
        ' flex flex-col bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 ',
        className
      )}
    >
      <div className="w-full overflow-hidden rounded-t-md h-48">
        <img src={data.image} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col p-3">
        <h6 className="font-medium mt-2 capitalize text-gray-600">
          {data.title}
        </h6>

        <div className="w-full bg-gray-200 rounded-full h-2.5 my-3 ">
          <div
            className="bg-ocean-500 h-2.5 rounded-full"
            style={{
              width: `${Number(data.donation_percentage * 100) / 100}%`
            }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h6>Terkumpul</h6>
            <p className="text-sm">{convertCurrency(data.donation_received)}</p>
          </div>
          <div className="flex flex-col">
            <h6>Sisa Hari</h6>
            <p className="text-sm"> {endCampaign(data.days_remaining)} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
