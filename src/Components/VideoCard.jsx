import { Link } from 'react-router-dom'

export const VideoCard = ({el}) => {
  const {id,thumbnail,videoName,channelImg,videoCreater} = el
  return (
    <Link to={`/video/${id}`}>
    <div className='border-t-4 m-5 text-center'>
      <img src={thumbnail} className='' alt='thumbnailImg'/>
      <p className='font-semibold my-2'>{videoName}</p>
      <div className='flex items-center justify-center'>
        <img className='w-10 rounded' src={channelImg} alt='channelName'/>
        <p className='m-0 mx-3'>{videoCreater}</p>
      </div>
    </div>
    </Link>
  )
}
