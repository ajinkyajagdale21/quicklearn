import {useEffect, useRef, useState} from 'react'

export const Modal = ({ open, onClose, playListData, setPlaylistData,videoData }) => {
  
    const modalRef = useRef(null);
    const [nextPlaylistId, setNextPlaylistId] = useState(2);
    const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
   };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []); 

    
    const [selectedPlaylists, setSelectedPlaylists] = useState([]);
    const [playListName,setPlaylistName]=useState("")

    const handleCheckboxChange = (event) => {
      const updatedSelectedPlaylists = event.target.checked
        ? [...selectedPlaylists, event.target.value]
        : selectedPlaylists.filter((name) => name !== event.target.value);
  
      const updatedPlayListData = playListData.map((playlist) => {
        if (playlist.playlistName === event.target.value) {
          return {
            ...playlist,
            playListItems: updatedSelectedPlaylists.includes(playlist.playlistName)
              ? [...playlist.playListItems, videoData] 
              : playlist.playListItems.filter((item) => item !== videoData), 
          };
        }
        return playlist;
      });
  
      setSelectedPlaylists(updatedSelectedPlaylists);
      setPlaylistData(updatedPlayListData);
    };

    const AddplaylistName = (e)=>{
        setPlaylistName(e.target.value)
    }

    const AddPlaylist = () => {
      if (playListName !== '') {
        setPlaylistData((prev) => [
          ...prev,
          {
            id: nextPlaylistId,
            playlistName: playListName,
            playListItems: selectedPlaylists,
          },
        ]);
        setNextPlaylistId(nextPlaylistId + 1);
      }

    };


    if (!open) return null;  

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 sm:px-6 lg:px-8">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
      <div
        ref={modalRef}
        className="inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 sm:px-6">
          <h2 className="text-xl leading-6 font-bold text-gray-900">Add to playlist</h2>
          <button onClick={onClose} className="btn-close">
            ❌
          </button>
        </div>
        <div>
          {playListData?.map((el) => (
            <div key={el.playlistName}>
              <input
                type="checkbox"
                id={`checkbox-${el.playlistName}`}
                value={el.playlistName}
                checked={selectedPlaylists.includes(el.playlistName)}
                onChange={handleCheckboxChange}
                className='mx-6 my-5'
              />
              <label>{el.playlistName}</label>
            </div>
          ))}
        </div>
        <div>
          <input
            placeholder='Enter playlist title'
            className='mx-4 my-4 px-2 py-2 border-2 border-gray-800 rounded-lg'
            onChange={AddplaylistName}
            value={playListName}
          />
          <button
            className='bg-gray-800 text-white px-3 py-2 md:m-1 rounded-xl mx-3 md:mx-0'
            onClick={AddPlaylist}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
