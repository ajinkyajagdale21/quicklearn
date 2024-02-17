import React from 'react'
import { VideoCard } from '../Components/VideoCard'
import {data} from '../data'

export const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
     {
      data.map(el=> <VideoCard el={el}/> )
     }
     </div>
  )
}
