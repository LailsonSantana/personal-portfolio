import ReactPlayer from 'react-player'

const VideoPlayer = () => {
  return (
    <div className="flex justify-center">
      <ReactPlayer
        url="https://youtu.be/t-Qew-clWJM"
        className="rounded-md shadow-2xl overflow-hidden border-1 border-gray-500 mb-16"
        controls
        width="600px"
        height="350px"
      />
    </div>
  )
}

export default VideoPlayer;