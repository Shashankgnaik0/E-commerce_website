import videobg from '../assets/videos/pexels_videos_1943483 (1080p).mp4'

const Main = () => {
  return (
    <div className='w-full flex  xl:flex-row flex-col justify-center min-h-screen gap-10'>
        <video src={videobg} autoPlay muted loop  />
    </div>
  )
}

export default Main