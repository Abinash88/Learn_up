import React from "react";
import { FaPlus } from "react-icons/fa";

interface ButtonsType {
  BtnName: string;
}

type videoDataType = {
  icons:React.ReactNode,
  title:string,
};

export const Button = ({ BtnName }: ButtonsType) => {
  return (
    <button className="text-red-500 flex items-center space-x-2 hover:border px-1 border  border-transparent hover:border-red-500">
      <span>{BtnName}</span> <FaPlus />
    </button>
  );
};

export const VideoSideBtn = ( {icons,title}:videoDataType) => {
  return (
    <button className="text-white bg-blue-600 hover:bg-blue-700 text-[15px] w-[60px] h-[60px] transition-all duration-00 rounded-full flex  justify-center items-center space-x-2 ">
      <span title={title} className="text-[30px]">{icons}</span>
    </button>
  );
};
