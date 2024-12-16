import React from 'react'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { BsHandbag } from "react-icons/bs";



//Header Section//
//Navigation Links//
const Header = () => {
  return (
    <div className=' flex  w-[1316px] h-[87px] mt-45 pl-300 bg-black text-white  '>
     <div >
     <ul className='flex pt-[48px] gap-8 pr-[350px] pl-[70px] '>
      <li className='font-inter  hover:text-[#FF9F0D]'>
        <Link href="/" className='hover:text:[#FF9F0D]'>Home</Link>
      <Image  src="/images/dot.png" alt="dot" width={100} height={100} className='w-[7px] h-[7px] ml-[13px]' />
      </li>
      <li className='font-inter'><Link href="/menu" className='hover:text-[#FF9F0D]'>Menu</Link></li>
      <li className='font-inter'><Link href="/blog" className='hover:text-[#FF9F0D]'>Blog</Link></li>
      <li className='font-inter'><Link href="/pages"className='hover:text-[#FF9F0D]' >Pages</Link></li>
      <span><li className='flex font-inter'><Link href="/about"className='hover:text-[#FF9F0D]'>About</Link><FaAngleDown className='mt-[7px] h-[12px]'/></li> </span>
      <li className='font-inter'><Link href="/shop"className='hover:text-[#FF9F0D]'>Shop</Link></li>
      <li className='font-inter'><Link href="/contact"className='hover:text-[#FF9F0D]'>Contact</Link></li>
    </ul>
     </div>
   
    {/* Top Heading Section */}
  <div className="w-[109px] h-[32px] ml-[10px]  text-white justify-center items-center  px-4">
        
   <div >
   <h2 className="text-[24px] font-bold hover:text-[#FF9F0D] ml-[-300px] font-inter" ><span className="text-[#FF9F0D]">Food</span>tuck</h2> 
   </div>
   {/* Input Section */}
 <div className=''>
    <button className=" w-[310px] h-[50px] flex justify-center items-center border-[1px] border-[#FF9F0D] hover:text-[#FF9F0D]  gap-[10px] rounded-[27px]">
          <input
            type="text"
            placeholder="Search..."
            className=" text[12px] font-[inter] font-normal opacity-[50%] text-[black] bg-black hover:text-[#FF9F0D] "
          />
          <CiSearch className="w-[24px] h-[24px] " />
        </button>

        {/* ShoppingBag Icon */}
        <div className='text-white'> <BsHandbag className='w-[30px] h-[20px] mt-[-30px]  ml-[310px] hover:text-[#FF9F0D]'/> </div>
       </div>
       </div> 
       </div>
    
  )
}



export default Header ;

