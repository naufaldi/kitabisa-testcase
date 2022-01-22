import AscIcon from 'components/assets/AscIcon'
import Button from 'components/common/Button'
import React, { FC } from 'react'

const Filter: FC = () => {
  return (
    <div className="col-span-3 col-end-13 flex justify-start items-center">
      <Button variant="primary" size="small">
        <AscIcon className="h-6 w-6 mr-2" />
        Sort by Goal
      </Button>
    </div>
  )
}

export default Filter
