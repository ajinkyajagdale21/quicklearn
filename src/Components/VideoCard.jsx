import React from 'react'
import { Link } from 'react-router-dom'

export const VideoCard = ({el}) => {
  return (
    <Link to={`/video/${el.id}`}>
    
    <div className='border-t-4 m-5 text-center'>
      <img src={el.thumbnail} className='' alt='thumbnailImg'/>
      <p className='font-semibold my-2'>{el.videoName}</p>
      <div className='flex items-center justify-center'>
        <img className='w-10 rounded' src={el.channelImg} alt='channelName'/>
        <p className='m-0 mx-3'>{el.videoCreater}</p>
      </div>
    </div>
    </Link>
  )
}
