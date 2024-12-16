import React from 'react'
import Image from 'next/image'

const Chefs = () => {
  return (
    <div  className='w-[1316px] h-[700px] bg-[black]'>
<h3 className=' text-[#FF9F0D]  font-[400]  text-[32px]  font-Great_Vibes ml-[570px] w-[177px] h-[40px] text-center items-center'>Chefs</h3>
<h1 className='w-[446px] h-[56px] ml-[500px] mb-9 text-[white] font-[700] text-[48px] font-inter'><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h1>
<div className='bg-black flex justify-center gap-[15px] ml-[40px] mr-[40px]' >
        <div>
            <Image src="/images/card1.png" alt="Card1" width={312} height={391} className='mt-[10px]  rounded-[6px]'/>
        </div>
        <div>
        <Image src="/images/card2.png" alt="Card2" width={312} height={391} className=' mt-[10px] rounded-[6px]'/>
        </div>
        <div>
        <Image src="/images/card3.png" alt="Card3" width={312} height={391} className=' mt-[10px] rounded-[6px]'/>
        </div>
        <div className=''> 
        <Image src="/images/card4.png" alt="Card4" width={312} height={391} className=' mt-[10px] rounded-[6px]'/>
        </div>
      
</div>
  <div className=' w-[1316px] h-[100px] mt-[30px] flex justify-center'>
    <button className='  w-[155px] h-[50px] text-[white] border-[#FF9F0D] border-[1px] text-center font-inter rounded-[25px] '>See More</button>
  </div>

    </div>
  )
}

export default Chefs