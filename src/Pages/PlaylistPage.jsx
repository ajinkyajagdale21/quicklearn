import React from 'react'
import playlistImg from '../assets/playlist.svg'
import { Link } from 'react-router-dom'

export const PlaylistPage = ({playListData}) => {
  return (
    <div>
        <h1 className='mt-5 text-xl md:text-3xl text-center font-bold'>All playlists</h1>
        <div className='mt-12'>
        {playListData?.map(el=>
        <div key={el.id} className='flex items-center justify-center '>
            <img src={playlistImg}/>
            <h1 className='font-semibold mx-2 text-sm md:text-xl'>{el.playlistName}</h1>  
            <Link to={`${el.id}`}>
            <button className='bg-gray-800 text-white py-1 px-3 md:py-3 md:px-6 md:m-2 rounded-xl'>Enter</button>
            </Link>
        </div>    
        )}
        </div>
    </div>
  )
}
