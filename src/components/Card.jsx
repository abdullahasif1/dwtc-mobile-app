import React, { useState, useEffect } from 'react';
import { FaRegEye } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { SlCalender } from "react-icons/sl";
import SkeletonCard from './SkeletonCard';

const Card = ({ ItemType, RequestedByName, subject, Status, CreatedOn, Department }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className='card w-[95%] bg-white flex flex-col rounded-md'>
      <div className="top flex px-[15px] pb-[2px] py-[25px]">
        <div className="content_side w-[100%] ">
          <div className="flex gap-2 justify-between">
            <h2 className='itemtype font-semibold'>{ItemType}</h2>
            <span className="status inline-flex  items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
              {Status}
            </span>
          </div>
          <p className='text-[14px] font-semibold'>{subject}</p>
        </div>
      </div>
      <div className="mid w-full border-b">
        <span className='break-words px-[15px] pb-2 text-[14px] lowercase text-blue-800 no-underline font-normal'>{RequestedByName}</span>
        <p className='px-[15px] text-[14px] pb-2 flex text-gray-500 items-center gap-2 '><SlCalender />{CreatedOn}</p>
        <p className='px-[15px] text-[14px] pb-2 flex text-gray-500 items-center gap-2 '><HiOutlineBuildingOffice />{Department}</p>
      </div>
      <div className="bottom flex">
        <div className="left_btn text-sm w-[50%] border-r py-[15px] px-[15px] flex justify-center items-center">
          <h3 className='font-semibold flex items-center gap-2'><TbHandClick />Take Action</h3>
        </div>
        <div className="right_btn w-[50%] border-l py-[15px] px-[15px] flex justify-center items-center">
          <h3 className='font-semibold text-sm flex items-center gap-2'><FaRegEye />View Details</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
