import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
  return (
    <div className='card w-[95%] bg-white flex flex-col rounded-md'>
      <div className="top flex px-[15px] pb-[2px] py-[25px]">
        <div className="content_side w-[100%] ">
          <div className="flex gap-2 justify-between">
            <Skeleton width={100} height={20} />
            <Skeleton width={50} height={20} />
          </div>
          <Skeleton width={200} height={20} />
        </div>
      </div>
      <div className="mid w-full border-b">
        <Skeleton width={150} height={20} style={{ margin: '10px 15px' }} />
        <Skeleton width={150} height={20} style={{ margin: '10px 15px' }} />
        <Skeleton width={150} height={20} style={{ margin: '10px 15px' }} />
      </div>
      <div className="bottom flex">
        <div className="left_btn text-sm w-[50%] border-r py-[15px] px-[15px] flex justify-center items-center">
          <Skeleton width={100} height={20} />
        </div>
        <div className="right_btn w-[50%] border-l py-[15px] px-[15px] flex justify-center items-center">
          <Skeleton width={100} height={20} />
        </div>
      </div>
    </div>
  );
}

export default SkeletonCard;
