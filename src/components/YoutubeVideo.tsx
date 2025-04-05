import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { 
  ssr: false // Isso desativa a renderização no servidor
});

const VideoPlayer = () => {
  return (
    <div className="flex justify-center">
      <ReactPlayer
        url="https://youtu.be/t-Qew-clWJM"
        className="rounded-md shadow-2xl overflow-hidden border-1 border-gray-500 mb-16"
        controls
        width="1200px"
        height="500px"
      />
    </div>
  )
}

export default VideoPlayer;