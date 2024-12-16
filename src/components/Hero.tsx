import React from 'react'
import Image from 'next/image'


//Hero  Section//
const Hero = () => {
  return (
  <section className='flex '> 
    <div className=' w-[1316px] h-[600px]   flex  pt-[100px] bg-black'>
   <div >
   <div>
    <h3 className=' '><span className=' text-[#FF9F0D]  text-[32px] pl-[70px] font-Great_Vibes'>Its Quick & Amusing!</span></h3>
  
    <h1 className='w-[650px] h-[15px] pl-[70px] pt-[30px]  text-[white]   font-[700] text-[60px] font-inter'><span className='text-[#FF9F0D]'>Th</span>e Art of speed Food Quality </h1>
   
    <p className='w-[450px] h-[48px] font-inter font-[400]   text-[16px]  text-[white]  mt-[40px] pt-[165px] pl-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Varius sed pharetra dictum neque massa congue</p>
  
  <div className='h-[80px] w-[190px]  mt-[60px]  ml-[80px]  font-inter font-normal text-[16px] '>
    <button className='  w-[190px] h-[60px] bg-[#FF9F0D] text-[#E0DFDF] text-center border-none rounded-[30px] '>See Menu</button>
  </div>
 </div>
  {/* Hero Image Section */}
    <div className=' mt-[-400px] ml-[700px]'>
    <Image src="/images/image1.png" alt="image" width={500} height={300}/>
        </div>  
   </div>
    </div>
    </section>
   

   
  )
}



export default Hero


