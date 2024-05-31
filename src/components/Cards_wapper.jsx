import React from 'react';
import Card from './Card';
import data from '../data.json';

const Cards_wrapper = () => {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    return new Date(dateString).toLocaleString(undefined, options);
  }

  return (
    <div className='w-full flex justify-center items-center flex-col'>
      <div className="w-[95vw] flex flex-col justify-start items-center overflow-scroll py-[20px] gap-5 rounded-lg">
        {data.map((item, index) => (
          <Card
            key={index}
            ItemType={item.ItemType}
            RequestedByName={item.RequestedByName}
            subject={item.Subject}
            Status={item.Status}
            CreatedOn={formatDate(item.CreatedOn)}
            Department={item.Department}
          />
        ))}
      </div>
      <div className="h-[100px] w-full">
        </div>
    </div>
  )
}

export default Cards_wrapper;
