import Image from 'next/image'
import React from 'react'

const Clients = () => {
  return (
    <div className='w-[1316px] h-[1300px] bg-black'>
        <div className='ml-40'>
     <h3 className='w-[128px] h-[40px] font-Great_Vibes font-normal text-[32px] text-[#FF9F0D]'>Testimonials</h3>       
      <h1 className=' w-[599px] h-[56px] font-Helvetica font-[700] text-[48px] text-white'>What our client are saying</h1>  
        </div>
        
        {/* Clients */}
           
     <div className='w-[668px] h-[400px] bg-white ml-[450px] mt-[100px]'>
        <div className='relative -top-20  flex justify-center'>
  <Image src="/images/Text2.png " alt="text " width={659} height={351}/>
     </div> 
     </div> 

     <div className='w-[86px] h-[16px] mt-[60px] ml-[730px] flex gap-2'>
     <div className='w-[15px] h-[16px] bg-[#FF9F0D] rounded-full'></div>
     <div  className='w-[15px] h-[16px] bg-[#FF9F0D4D] rounded-full'> </div>
     <div  className='w-[15px] h-[16px] bg-[#FF9F0D4D] rounded-full'></div>
     <div  className='w-[15px] h-[16px] bg-[#FF9F0D4D] rounded-full' > </div>
     </div>
   
   <div className='w-[1316px] h-[385px] border-[1px] mt-[120px] '>
    <Image src="/images/bannerimage.png" alt="banner" width={1316} height={558}/>
   </div>




</div>
  )
}

export default Clients