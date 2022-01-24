import React, { FC, useEffect, useState } from 'react'
import useSWR from 'swr'
import Card from './Card'
import axios from 'axios'
import Alert from 'components/common/Alert'
import SkeletonCard from 'components/common/SkeletonCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filterAtom } from 'recoil/filter'
import { kitabisaProps } from 'types/data'

const fetcher = (url: string) =>
  axios
    .get(url, {
      method: 'GET',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        mode: 'no-cors'
      }
    })
    .then((res) => res.data)

const ListCard: FC = () => {
  const sortData = useRecoilValue(filterAtom)
  const sortingData = (a: kitabisaProps, b: kitabisaProps) => {
    if (sortData === 'asc') {
      return a.donation_target - b.donation_target
    }
    return b.donation_target - a.donation_target
  }
  const { data, error } = useSWR(
    'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json',
    fetcher
  )

  if (error) {
    return (
      <div className="col-span-full">
        <Alert title="Gagal!">Ada kegagalan dalam memuat data: {error} </Alert>
      </div>
    )
  }

  if (!data) {
    return (
      <>
        <SkeletonCard className="col-span-4" />
        <SkeletonCard className="col-span-4" />
        <SkeletonCard className="col-span-4" />
      </>
    )
  }

  const dataFilter = data.data.sort((a: kitabisaProps, b: kitabisaProps) =>
    sortingData(a, b)
  )

  return (
    <>
      {dataFilter?.map((item: kitabisaProps) => (
        <Card key={item.id} data={item} className="col-span-4" />
      ))}
    </>
  )
}

export default ListCard
