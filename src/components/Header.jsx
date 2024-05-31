import React, { useEffect } from 'react';
import '../App.css'
import headerBg from '../Images/planyourtrip.jpg';
import SearchBar from './SearchBar';
import LogoImg from '../Images/dwtclogo.png';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {

  useEffect(() => {
    const handleScroll = () => {
      const headerBox = document.querySelector('.header_box');
      const headerBack = document.querySelector('.header_back');

      if (window.scrollY > headerBack.offsetHeight) {
        headerBox.classList.add('sticky');
      } else {
        headerBox.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="header_back h-[150px] flex justify-center items-center w-full relative mb-10">
        <div className="bg-black opacity-[0.3] w-full h-full absolute"></div>
        <img src={headerBg} className='h-[100%] w-full' alt="" />
        <div className="h-[30px] w-full absolute px-5 flex top-[20px] justify-between items-center">
          <img src={LogoImg} className='w-[45px]' alt="" />
          <div className="text-gray-200"><GiHamburgerMenu size={"30px"} /></div>
        </div>
        <div className="header_box w-[90%] h-[70px] bg-white absolute z-99 top-[120px] rounded-md flex justify-center items-center">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header;
