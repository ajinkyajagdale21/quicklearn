import { useState } from 'react';
import { Link } from 'react-router-dom';
import playlistIcon from '../assets/playlist.svg'

export const Navbar = () => {

  return (
    <nav className="py-5 px-6 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-2xl md:text-3xl font-semibold">Quick Learn</h1>
      </Link>
      <Link to="/playlist">
      <span className='font-semibold flex items-center'> 
        <img src={playlistIcon} alt='playlist' className='w-7'/>
        <p className='py-0 px-1'>Playlist</p>
      </span>
      </Link>
    </nav>
  )
}
