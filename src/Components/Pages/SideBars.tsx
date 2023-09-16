import React from 'react'
import { FaCogs, FaHome, FaHandshake, FaTrophy } from 'react-icons/fa';


const SideBars = () => {
  return (
    <div className='w-[300px] h-full '>
        <div className="p-5 h-full w-full mx-auto">
            <div className="w-full h-full">
                <div className="logo w-full ">
                    <a className='text-[25px] text-gray-600 font-bold    ' href="/"><span className='text-red-600'>Learn</span>-Up</a>
                </div>
                <nav className='w-full mt-5 border-b border-gray-400 pb-4'>
                    <ul className=''>
                        <li> <a href="/"><FaHome className="icon"/> <span>For You</span></a></li>
                        <li><a href="/Setting"><FaCogs className="icon"/> <span>Match Skills</span></a></li>
                        <li><a href="/"><FaHandshake className="icon"/> <span>Hire Pro</span></a></li>
                        <li><a href="/"><FaTrophy className="icon"/> <span>Compete</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default SideBars