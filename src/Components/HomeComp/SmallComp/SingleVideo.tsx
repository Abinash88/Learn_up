import React from "react";
import { videoDataType } from "../../../DataSource/TsTypes";


const SingleVideo = ({ item }: { item: videoDataType }) => {
  return (
    <div className="w-[600px] h-auto my-5 bg-white rounded-md">
      <div className=" h-full flex w-[90%] mx-auto flex-col items-start space-y-5 ">
        <div className="flex flex-col ">
          <div className=" flex items-start py-2 h-[15%]  w-full space-x-5">
            <div className="image w-[70px]  overflow-hidden h-[70px] rounded-full border">
              <img src="/userImage.png" alt="" />
            </div>

            <div className="flex-1">
              <h2 className="text-[17px] text-gray-600 cursor-pointer hover:border-b inline border-gray-400">
                {item?.userName}
              </h2>
              <h5 className="text-gray-500 font-semibold">2hr ago</h5>
            </div>

            <div className="">
              <FaXmark/>
            </div>
          </div>
          
          <div className="text my-2">
            Crazy react course
          </div>
        </div>

        <div className="w-full h-[600px] rounded-md flex items-center bg-gray-700  mx-auto">
          <video className="w-full h-auto" controls autoPlay>
            <source src={item?.video} />
          </video>
        </div>

        <div className="h-[10%] w-full bg-red-500">
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
