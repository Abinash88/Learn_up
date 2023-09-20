import React from 'react'
import VideoSlide from '../HomeComp/VideoSlide'

const Home = () => {
  return (
    <div className='flex-1 w-full  px-5  h-[100vh]  '>
        <div className="w-full h-full">
          <div className="h-full w-full flex ">
            <VideoSlide/>
          </div>
        </div>
    </div>
  )
}

export default Home