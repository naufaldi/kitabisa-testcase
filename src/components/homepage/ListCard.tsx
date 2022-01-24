import React, { FC } from 'react'
import useSWR from 'swr'
import Card from './Card'
import axios from 'axios'

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
  const { data, error } = useSWR(
    'https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json',
    fetcher
  )
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  console.log('data', data.data)
  return (
    <>
      {data?.data.map((item: any) => (
        <Card key={item.id} data={item} className="col-span-4" />
      ))}
    </>
  )
}

export default ListCard
