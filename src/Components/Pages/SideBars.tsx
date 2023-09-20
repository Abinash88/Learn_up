import React from 'react'
import { FaCogs, FaHome, FaHandshake, FaTrophy } from 'react-icons/fa';


const SideBars = () => {
 

  return (
    <div className='lg:w-[250px] md:w-[100px] w-full  h-auto md:h-full '>
        <div className="p-5 h-full w-full mx-auto">
            <div className="w-full flex md:flex-col md:justify-normal justify-between flex-row items-center md:items-start h-full">
                <div className="logo w-full ">
                    <a className='lg:text-[25px] md:text-[17px] text-[22px]  font-bold lg:text-start md:text-center text-start  text-red-500 block w-full ' href="/">Learn Up</a>
                </div>
                <nav className='w-full md:mt-5 md:border-b border-gray-400 md:pb-4'>
                    <ul className='flex md:flex-col md:space-x-0 space-x-3 md:space-y-2 space-y-0 flex-row'>
                        <li> <a href="/"><FaHome className="icon"/> <span className='lg:block hidden'>For You</span></a></li>
                        <li><a href="/Setting"><FaCogs className="icon"/> <span className='lg:block hidden'>Match Skills</span></a></li>
                        <li><a href="/"><FaTrophy className="icon"/> <span className='lg:block hidden'>Following</span></a></li>
                        <li><a href="/"><FaHandshake className="icon"/> <span className='lg:block hidden'>Hire Pro</span></a></li>
                        <li><a href="/"><FaTrophy className="icon"/> <span className='lg:block hidden'>Compete</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default SideBars