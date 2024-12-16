import Image from 'next/image'
import React from 'react'

const OurMenu = () => {
  return (
 
  <div className='w-[1316px] h-[756px]  bg-black'>
   
       <h3 className='w-[200px] h-[40px] ml-[550px] font-normal text-[32px] text-[#FF9F0D]'>Choose & pick</h3>
    <h1 className='w-[358px] h-[46px] ml-[470px] font-Helvetica font-[700] text-[48px] text-[white]'><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h1>
    
<div className='w-[1056px] h-[28px] flex justify-evenly items-center mt-[70px] ml-[100px]'>
    <p className='w-[95px] h-[28px] text-[#FF9F0D] font-inter font-[700] text-[20px]'>Breakfast</p>
    <p className='w-[58px] h-[28px] text-[white] font-inter font-[400] text-[20px]'> Lunch</p>
    <p className='w-[62px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Dinner</p>
    <p className='w-[74px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Dessert</p>
    <p className='w-[50px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Drink</p>
    <p className='w-[58px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Snack</p>
    <p className='w-[59px] h-[28px] text-[white] font-inter font-[400] text-[20px]'>Soups</p>
</div>

    {/* Our Menu Main Image */}
<div className='w-[515px] h-[406px] ml-[50px] mt-[70px] flex'
     style={{backgroundImage:"url('/images/ourmenu1.png')"}}>
     <Image src="/images/ourmenu2.png " alt="image2 " width={366} height={362} className='ml-[70px] mt-[20px]'/>
   
   {/* Image 01 */}
<div className='w-[376px] h-[406px] ml-[60px] '>
  <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/lettuceleaf.png " alt="image2 " width={80} height={79} />
  <div>
     <h1 className='w-[123px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Lettuce Leaf</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
  </div>
     </div>

     {/* Image 02 */}
     <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/breakfast.png " alt="image2 " width={80} height={79} />
  <div>
     <h1 className='w-[180px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Fresh Breakfast</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>14.5$</p>
    
  </div>
     </div>


    {/* Image 03 */}
     <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/butter.png " alt="image2 " width={80} height={79} />
  <div>
     <h1 className='w-[180px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
  </div>
     </div>


      {/* Image 04 */}
     <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/bread.png " alt="image2 " width={80} height={79} />
  <div>
     <h1 className='w-[180px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
  </div>
     </div>
</div>


{/* Image 05 */}
<div className='w-[376px] h-[406px] ml-[10px] '>
  <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/cheese.png " alt="image5 " width={80} height={79} />
  <div>
     <h1 className='w-[123px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Lettuce Leaf</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
  </div>
     </div>

     {/* Image 06 */}
     <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/butter.png " alt="image6 " width={80} height={79} />
  <div>
     <h1 className='w-[180px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Fresh Breakfast</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>14.5$</p>
    
  </div>
     </div>


    {/* Image 07 */}
     <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/beef.png " alt="image7 " width={80} height={79} />
  <div>
     <h1 className='w-[180px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
  </div>
     </div>


      {/* Image 08 */}
     <div className='w-[376px] h-[79px] flex gap-4 mb-4'>
  <Image src="/images/mushroom.png " alt="image8 " width={80} height={79} />
  <div>
     <h1 className='w-[180px] h-[28px] font-inter font-[700] text-[20px] text-[white]'>Mild Butter</h1>
     <p className='w-[287px] h-[22px] font-inter font-normal text-[14px] text-white'>Lacus nisi, et ac dapibus velit in consequat.</p>
     <p className='w-[49px] h-[26px] font-inter font-[700] text-[18px] text-[#FF9F0D]'>12.5$</p>
     
  </div>
     </div>




























</div>






















  </div> 
    
    
    
    
    
    </div>
 
  )
}

export default OurMenu