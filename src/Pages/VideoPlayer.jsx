import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../data";
import YouTube from "react-youtube";

export const VideoPlayer = () => {

    const { id } = useParams();
    const {videoURL,videoName,videoCreater,channelImg} = data?.find((video) => video.id == id);
   
    const onReady = (event) => {
        event.target.playVideo(); // Trigger playback manually
      };
    
      const opts = {
        height: '325',
      };

    return (
        <>
            <div className="flex items-center justify-center flex-col mt-8 youtube-container">
                {/* <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoURL}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube video"
                    
                /> */}
                <YouTube videoId={videoURL} onReady={onReady} opts={opts}/>
                 <p className='font-semibold my-6 mx-2 md:text-xl'>{videoName}</p>
                <div className="flex">
                    <div className='flex items-center justify-center'>
                        <img className='w-10 rounded' src={channelImg} alt='channelName'/>
                        <p className='m-0 mx-3'>{videoCreater}</p>
                    </div>
                    <button className="bg-gray-800 text-white p-4 md:m-2 rounded-xl">Add to playlist</button>
                </div>
            </div>
        </>
    );
};
