import React from 'react'

import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-[1316px] h-[740px] pt-[10%] bg-[black]  gap-[87px] '>
       <div className=' h-[142px]'>
       <h1 className='text-[white] font-inter pl-[100px] font-[700] text-[32px] border-bottom-[2px] border-[#FF9F0D]'>  <span  className='text-[#FF9F0D]'>St</span>ill You Need Our Support ?</h1>
       <div className='w-[458px] h-[24px] pl-[100px] font-inter font-normal text-[16px] text-[white]'>
       Don’t wait make a smart & logical quote here. Its pretty easy.</div>
       <div className='mt-[-52px] pl-[700px] flex'>
       <input
            type="text"
            placeholder=" Enter Your Email"
            className="w-[259px] h-[56px] border-none text[16px] font-inter  font-normal pl-[25px] rounded-[1px] text-white  bg-[#FF9F0D]"/>
    <div className='w-[159px] h-[56px]'>
      <p className=' w-[125px] h-[55px] border-none   rounded-[1px] font-inter  font-normal text-16px flex justify-center items-center text-[#FF9F0D] bg-[white]'>Subscribe Now </p>
    </div>
    </div>
    </div>

    {/* About Us Section */}
     <div className='pl-[100px] '>
      <h2 className='w-[114px] h-[32px] mt-3 font-inter  font-[700] text-[white] text-[24px]'>About Us.</h2>
      <p className='w-[312px] h-[95px] font-inter mt-4 font-normal text-[16px] text-[white]'>orporate clients and leisure travelers has
      been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</p>
   </div>
   <div className='w-[68px] h-[60px] bg-[#FF9F0D] ml-[100px] mt-3 rounded-[2px] flex  '>
    <Image src="/images/clockwise.png " alt="clockwise" width={50} height={50} className=' ml-[9px] mt-[5px] '/>
    <div className='w-[137px] h-[16px] '>
     <p className=' w-[167px] pt-[-10px] ml-[15px] mb-[-90px] h-[16px] text-[white] font-inter font-normal text-[18px] '>Opening Houres</p>
   <p className=' w-[148px] ml-[15px] mt-[99px] h-[21px] text-[white] font-inter font-normal text-[14px]'>Mon - Sat(8.00 - 6.00)</p>
   <p  className=' w-[148px] ml-[15px] mt-[1px] h-[21px] text-[white] font-inter font-normal text-[14px]'>Sunday - Closed</p>
   </div>
  
   </div>

   {/* Useful Links Section */}
    <div className=' w-[240px] h-[40px] mt-[-210px] bg-[black]  pl-[450px]'>
    <h1 className='w-[124px] h-[32px] mb-3 font-inter text-[20px] font-[700] text-[white]'>Useful Links</h1>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>About</p>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>News</p>
            <p className='w-[165px] h-[24px] font-inter mb-3 text-[16px] font-normal text-[white]'>Partners</p>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>Team</p>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>menu</p>
            <p className='w-[165px] h-[24px] font-inter  text-[16px] font-normal text-[white]'>Contacts</p>
            </div>

   {/* Help Section */}
   <div className=' w-[240px] h-[40px] mt-[-40px] bg-[black]  pl-[700px]'>
       <h1 className='w-[124px] h-[42px] mb-3 font-inter text-[20px] font-[700] text-[white]'>Help?</h1>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>FAQ</p>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>Term & conditions</p>
            <p className='w-[165px] h-[24px] font-inter mb-3 text-[16px] font-normal text-[white]'>Reporting</p>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>Documentation</p>
            <p className='w-[175px] h-[24px] mb-3 font-inter text-[16px] font-normal text-[white]'>Support Policy</p>
            <p className='w-[165px] h-[24px] font-inter  text-[16px] font-normal text-[white]'>Privacy</p>
   </div>

   {/* Recent Post Section */}
   <div className="w-[240px] h-[40px] mt-[-40px] bg-[black]  pl-[950px]">
        <h1 className='w-[124px] h-[42px] mb-3 font-inter text-[20px] font-[700] text-[white]'>Recent Post</h1>
        <div className='w-[58px] h-[40px]'> 
        <Image src="/images/wings.png " alt="image.1" width={100} height={100} className='w-[48px] h-[45px]'/>
        <Image src="/images/mask.png " alt="image.2 " width={100} height={100} className='w-[48px] h-[45px] mt-2'/>
        <Image src="/images/wrap.png " alt="image.3 " width={100} height={100} className='w-[48px] h-[45px] mt-2'/>
        </div>
  <div className='pl-[10px] w-[100px]'>
        <p className='w-[150px] h-[24px] pl-[50px] opacity-[49%]  text-[white] font-inter font-normal mt-[-40px] text-[16px]'>20 Feb 2022</p>
        <p className='w-[198px] h-[12px] pl-[50px]   text-[white] font-inter font-normal mt-0 text-[16px]' >Keep Your Business </p>
        <p className='w-[150px] h-[24px] pl-[50px] opacity-[49%]  text-[white] font-inter font-normal mt-[12px] text-[16px]'>20 Feb 2022</p>
        <p className='w-[198px] h-[12px] pl-[50px]   text-[white] font-inter font-normal mt-2 text-[16px]' >Keep Your Business </p>
        <p className='w-[150px] h-[24px] pl-[50px] opacity-[49%]  text-[white] font-inter font-normal mt-[12px] text-[16px]'>20 Feb 2022</p>
        <p className='w-[198px] h-[12px] pl-[50px]   text-[white] font-inter font-normal mt-1 text-[16px]' >Keep Your Business </p>
        </div>
  </div>
   
  {/* Lower Section */}
  <div className='w-[1316px] h-[100px] bg-[#FF9F0D] mt-[340px] '>
       <p className=' w-[450px] h-[24px] font-inter font-normal text-[16px] text-white pl-[40px] pt-[40px]'>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
       <div className='ml-[900px] flex gap-[20px]'>
      <div className=' w-[36px] h-[33px] flex justify-center items-center bg-[white] color-[ #4F4F4F] rounded-[2px] '> 
     <FaFacebookF className='w-[15px] h-[25px] ' /></div>
      <div className='w-[36px] h-[33px] flex justify-center items-center bg-[white] color-[ #4F4F4F] rounded-[2px]'>
      <IoLogoTwitter className='w-[20px] h-[30px] ' />
     </div>
     <div className='w-[36px] h-[33px] flex justify-center items-center bg-[white] color-[ #4F4F4F] rounded-[2px]' >
     <IoLogoInstagram  className='w-[25px] h-[30px] '/>
     </div>
     <div className='w-[36px] h-[33px] text-[#FF9F0D] flex justify-center items-center bg-[white]  rounded-[2px]' >
  <FaYoutube className='w-[25px] h-[30px]   '/>
     </div>
     <div  className='w-[36px] h-[33px] flex justify-center items-center bg-[white]  rounded-[2px]'>
     <FaPinterest  className='w-[25px] h-[30px] '/>
     </div>
    </div>
      
       </div>
       </div>
    
  )
}

export default Footer