import React from 'react'
import VideoSlide from '../HomeComp/VideoSlide'

const Home = () => {
  return (
    <div className='flex-1 w-full p-5 h-[100vh] bg-gray-50'>
        <div className="w-full h-full">
          <div className="h-full scrollbarDesign overflow-auto ">
            <VideoSlide/>
          </div>
        </div>
    </div>
  )
}

export default Home