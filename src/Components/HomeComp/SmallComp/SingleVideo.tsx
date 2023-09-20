import { FaPuzzlePiece } from "react-icons/fa";
import { videoDataType } from "../../../DataSource/TsTypes";
import { HiMiniEllipsisHorizontal } from "react-icons/hi2";
import { Button, VideoSideBtn } from "../../../UI/Button";

const FSingleVideo = ({ item }: { item: videoDataType }) => {
  return (
    <>
      <div className="lg:w-[700px] max-width-[100%] w-full h-[100vh] px-5 relative flex items-center scroll_page   bg-white rounded-md">
        <div className=" h-full flex w-[90%]  flex-col items-start space-y-5 ">
          <div className="flex flex-col items-start justify-between w-full">
            <div className=" flex items-start  rounded-md  justify-between  py-4   w-full space-x-5">
              <div className="image w-[70px]   h-[70px] rounded-full overrflow-hidden border">
                <img src="/userImage.png" alt="" />
              </div>

              <div className="flex-1">
                <h2 className="text-[17px] text-gray-600 font-semibold cursor-pointer hover:underline    inline border-gray-400">
                  {item?.userName}
                </h2>
                <h5 className="text-gray-500 ">2hr ago</h5>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center space-x-4">
                  <div className="follow">
                    <Button BtnName="Follow" />
                  </div>
                  <HiMiniEllipsisHorizontal className="text-[30px] cursor-pointer p-[3px] hover:bg-gray-100 rounded-full text-gray-800" />
                </div>
              </div>
            </div>

            <div className="text my-1">Crazy react course</div>
          </div>

          <div className="w-full h-[650px] rounded-md flex items-center bg-gray-700  mx-auto">
            <video
              className="w-full h-auto"
              controlsList="nodownload"
              controls
              autoPlay
            >
              <source src={item?.video} />
            </video>
          </div>
        </div>

        <div className="buttons mx-2 ">
          <div className="mt-2">
            <VideoSideBtn icons={<FaPuzzlePiece />} title="Challenge" />
          </div>
        </div>

        <div className="h-full bg-red-500  w-[400px] absolute right-[-400px] p-4">
          {item.userName}
        </div>
      </div>
    </>
  );
};

export default SingleVideo;
