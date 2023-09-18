import React from 'react'
import Video1 from "../../assets/converter.js - fileConvertBox - Visual Studio Code 2023-08-13 00-03-06.mp4"
import SingleVideo from './SmallComp/SingleVideo'
import { videoDataType } from '../../DataSource/TsTypes'



const VideoSlide = () => {

    const videodata:videoDataType[] = [
        {
            id:"asdjfaksdjffnalksasdihfaiuosdfhf",
            name:"video1",
            userName:"Abinash subedi",
            video:Video1,
        },
        {
            id:"asdgf87f4gfajcbjagfyu",
            name:"video1",
            userName:"Akash rai",
            video:Video1,
        },
    ]

  return (
    <div className='w-full h-full'  >
        <div className="w-full  overflow-auto scrollbarDesign h-full">
            {
                videodata?.map((item:videoDataType) => {
                    return(
                        <SingleVideo item={item} key={item?.id} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default VideoSlide