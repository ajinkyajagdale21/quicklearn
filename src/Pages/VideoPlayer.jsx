import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import { Modal } from "../Components/Modal";

export const VideoPlayer = ({playListData,setPlaylistData}) => {

    const { id } = useParams();
    const videoData= data?.find((video) => video.id == id);
    const {videoURL,videoName,videoCreater,channelImg} = videoData  
    const onReady = (event) => {
        event.target.playVideo(); 
      };
    
      const opts = {
        height: '325',
      };

      const [isOpen, setIsOpen] = useState(false);

      const handleOpenModal = () => setIsOpen(true);
      const handleCloseModal = () => setIsOpen(false);

    return (
        <>
            <div className="flex items-center justify-center flex-col mt-8 youtube-container">
                <iframe
                    src={`https://www.youtube.com/embed/${videoURL}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube video"
                />
                 <p className='font-semibold my-6 mx-2 md:text-xl'>{videoName}</p>
                <div className="flex">
                    <div className='flex items-center justify-center'>
                        <img className='w-10 rounded' src={channelImg} alt='channelName'/>
                        <p className='m-0 mx-3'>{videoCreater}</p>
                    </div>
                    <button className="bg-gray-800 text-white px-4 py-1 md:p-4 md:m-2 rounded-xl" onClick={handleOpenModal} >Add to playlist</button>
                    <Modal open={isOpen} onClose={handleCloseModal} playListData={playListData} setPlaylistData={setPlaylistData} videoData={videoData}></Modal>
                </div>
            </div>
        </>
    );
};
