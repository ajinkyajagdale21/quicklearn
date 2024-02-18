import './App.css'
import { Navbar } from './Components/Navbar'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { VideoPlayer } from './Pages/VideoPlayer'
import { useEffect, useState } from 'react'
import { PlaylistPage } from './Pages/PlaylistPage'
import { PlaylistDetail } from './Pages/PlaylistDetail'

const App=()=> {
  const [playListData,setPlaylistData]=useState([
    {
      id:'1',
      playlistName: 'Watch Later',
      playListItems:[]
    }
  ])
  const [items, setItems] = useState([]);
  
  return (
  <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/video/:id" element={<VideoPlayer playListData={playListData} setPlaylistData={setPlaylistData}/>} />
        <Route path="/playlist" element={<PlaylistPage playListData={playListData}/>} />
        <Route path="/playlist/:id" element={<PlaylistDetail playListData={playListData} items={items} setItems={setItems}/>} />
      </Routes>

    </>
  )
}

export default App
