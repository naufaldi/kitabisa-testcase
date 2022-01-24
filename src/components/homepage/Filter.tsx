import AscIcon from 'components/assets/AscIcon'
import Button from 'components/common/Button'
import React, { FC } from 'react'
import { useRecoilState } from 'recoil'
import { filterAtom } from 'recoil/filter'

const Filter: FC = () => {
  const [sort, setSort] = useRecoilState(filterAtom)
  console.log('sort', sort)
  return (
    <div className="col-span-2 lg:col-span-3 lg:col-end-13 flex justify-start items-center">
      <Button variant="primary" size="small" className="text-sm lg:text-base">
        <AscIcon className="h-4 w-4 lg:h-6 lg:w-6 mr-2" />
        Sort by Goal
      </Button>
    </div>
  )
}

export default Filter
