import React, { FC, useEffect, useState } from 'react'
import useSWR from 'swr'
import Card from './Card'
import axios from 'axios'
import Alert from 'components/common/Alert'
import SkeletonCard from 'components/common/SkeletonCard'
import { useRecoilState, useRecoilValue } from 'recoil'
import { filterAtom } from 'recoil/filter'

const fetcher = (url: any) =>
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

  console.log('data', data.data)

  const sortAsc = data.data.sort(
    (a: any, b: any) => a.donation_target - b.donation_target
  )
  const sortDsc = data.data.sort(
    (a: any, b: any) => b.donation_target - a.donation_target
  )

  console.log('sortAsc', sortAsc)
  console.log('sortDsc', sortDsc)
  return (
    <>
      {sortData === 'asc'
        ? sortAsc?.map((item: any) => (
            <Card key={item.id} data={item} className="col-span-4" />
          ))
        : sortDsc?.map((item: any) => (
            <Card key={item.id} data={item} className="col-span-4" />
          ))}
    </>
  )
}

export default ListCard
