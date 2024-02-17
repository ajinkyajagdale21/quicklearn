import './App.css'
import { Navbar } from './Components/Navbar'
import { HomePage } from './Pages/HomePage'
import { Route, Routes } from 'react-router-dom'
import { VideoPlayer } from './Pages/VideoPlayer'


const App=()=> {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/video/:id" element={<VideoPlayer/>} />
      </Routes>

    </>
  )
}

export default App
