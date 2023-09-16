import React from "react";
import { videoDataType } from "../../../DataSource/TsTypes";

const SingleVideo = ({ item }: { item: videoDataType }) => {
  return (
    <div className="w-[500px] h-auto my-5">
      <div className="w-full ">
        <div className=" flex items-center  space-x-5">
          <div className="image w-[60px] overflow-hidden h-[60px] rounded-full border">
            <img src="/userImage.png" alt="" />
          </div>

          <div className="flex-1">
            <h2 className="text-[17px] text-gray-600 cursor-pointer hover:border-b inline border-gray-400">
              {item?.userName}
            </h2>
          </div>
        </div>


        <div className="w-[80%] mx-auto">
          <video controls autoPlay>
            <source src={item?.video} />
          </video>
        </div>

        <div className="">

        </div>
      </div>
    </div>
  );
};

export default SingleVideo;
