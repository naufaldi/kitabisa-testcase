import AscIcon from 'components/assets/AscIcon'
import DscIcon from 'components/assets/DscIcon'
import Button from 'components/common/Button'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { filterAtom } from 'recoil/filter'

const Filter: FC = () => {
  const [sort, setSort] = useRecoilState(filterAtom)
  // console.log('sort', sort)
  const handleClickGoal = () => {
    setSort('asc-goal')
  }
  const handleClickDays = () => {
    setSort('asc-days')
  }
  return (
    <div className="col-span-4 flex items-center justify-end space-x-3 lg:col-span-4 lg:col-end-13">
      <Button
        variant="primary"
        size="small"
        className="text-sm lg:text-base"
        onClick={handleClickGoal}
      >
        <AscIcon className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
        Sort by Goal
      </Button>
      <Button
        variant="primary"
        size="small"
        className="text-sm lg:text-base"
        onClick={handleClickDays}
      >
        <AscIcon className="mr-2 h-4 w-4 lg:h-6 lg:w-6" />
        Sort by Days
      </Button>
    </div>
  )
}

export default Filter
