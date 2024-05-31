import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { FaHome } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { MdMiscellaneousServices } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import naffaImage from "../Images/naffa.png";

const Navigation = () => {
  return (
    <div className="navigation w-full h-[5.2rem] fixed bottom-0">
      <div className="inner-navigation w-full h-full bg-black rounded-tl-[20px] rounded-tr-[20px] text-white flex justify-between items-center px-10">
        <Link to="/home" className='text-[13px] flex justify-center items-center flex-col'>
          <FaHome size={"1.3rem"} />Home
        </Link>
        <Link to="/directory" className='text-[13px] flex justify-center items-center flex-col'>
          <LuUsers2 size={"1.3rem"} />Directory
        </Link>
        <div className='text-[13px] flex justify-center items-center flex-col relative'>
          <div className="naffa_img_wrapper w-[4.5rem] h-[4.5rem] overflow-hidden rounded-full absolute top-[-70px]">
            <img src={naffaImage} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
        <Link to="/services" className='text-[13px] flex justify-center items-center flex-col'>
          <MdMiscellaneousServices size={"1.3rem"} />Services
        </Link>
        <Link to="/events" className='text-[13px] flex justify-center items-center flex-col'>
          <MdEventNote size={"1.3rem"} />Events
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
