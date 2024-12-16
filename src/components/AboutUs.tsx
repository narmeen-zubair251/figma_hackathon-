// About Us Section//
import React from "react"
import Image from "next/image";
const AboutUs = () => {
    return (
      <div className=' w-[1316px] h-[850px] pt-[100px]  flex  bg-black'>
        <div className="">
            <h3 className=' text-[#FF9F0D]  font-[400]  text-[32px] ml-[70px] font-Great_Vibes '>About us</h3>
  <h1 className='w-[650px] h-[15px] pl-[70px] mt-[10px]  text-[white]  font-[700] sm:font-semibold text-[60px] font-inter'><span className='text-[#FF9F0D]'>We</span> Create the best foody product</h1>
   
   <p className='w-[536px] h-[110px]  font-inter font-[400]    text-[16px]  text-[white]  mt-[40px] pt-[165px] pl-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
   </p>
   {/* check Marks */}
  <div className="flex">
    <Image src="/images/check.png" alt="check " width={100} height={100}
    className="w-[17px] h-[12px] mt-[140px] ml-[70px]"/>
    <p className=" w-[425px] h-[26px] mt-[135px] ml-[20px] font-normal text-[18px] font-inter text-[white]"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
    </div>
   
    <div className="flex">
    <Image src="/images/check.png" alt="check " width={100} height={100}
    className="w-[17px] h-[12px] mt-[17px] ml-[70px]"/>
    <p className=" w-[550px] h-[26px] mt-[10px] ml-[20px] font-normal text-[18px] font-inter text-[white]">  Quisque diam pellentesque bibendum non dui volutpat fringilla .</p>
    </div>
    
    <div className="flex">
    <Image src="/images/check.png" alt="check " width={100} height={100}
    className="w-[17px] h-[12px] mt-[18px] ml-[70px]"/>
    <p className=" w-[425px] h-[26px] mt-[10px] ml-[20px] font-normal text-[18px] font-inter text-[white]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <div className="ml-[70px] mt-[40px]">
        <button className='  w-[190px] h-[60px] bg-[#FF9F0D] font-inter text-[#E0DFDF] text-center border-none rounded-[30px] '>Read More</button>
        </div>
        </div>

    {/* Image Section */}
    <div >
        <div>  
            <Image src="/images/eggs.png" alt="eggs" width={500} height={280} className="mt-[50px]"/>
        </div >
      
    <div className="flex w-[500px] h-[170px] gap-[10px] ">
    <div  className="ml-[5px] mt-[12.5px] ">
         <Image src="/images/second.png" alt="second" width={330} height={170}/>
         </div>
    
    <div className="ml-[5px] mt-[12.5px] ">
    <Image src="/images/third.png" alt="third" width={330} height={170} />
    </div>
    </div>
  
    </div>
    </div>
    )
  }  
  
   export default AboutUs ;
    
      
    

 