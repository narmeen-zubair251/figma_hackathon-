import React from 'react'

const Page = () => {
  return (
    <div className='w-[1316px] h-[1000px]'>
    <div className='w-[1316px] h-[410px] ' style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
           <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'> 404 Error</h1>
           <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'>404</span></p>
    </div>
    <div>
  <h1 className='w-[161px] h-[104px] text-[#FF9F0D] ml-[570px] mb-3 mt-[150px] font-inter font-[700] text-[96px]'>404</h1>
  <h2 className='w-[630px] h-[40px] font-inter ml-[380px] font-[700] mb-3 text-[32px] text-[#333333] 
'>Oops! Look likes something going wrong</h2>
<p className='w-[490px] h-[32px] font-inter ml-[460px]  font-normal text-[18px] '>
Page Cannot be found! we’ll have it figured out in no time.</p>

<p className='w-[490px] h-[52px] font-inter ml-[520px]  font-normal text-[18px] '>Menwhile, cheek out these fresh ideas:</p>

<button className='w-[197px] h-[58px] bg-[#FF9F0D] font-inter ml-[570px] rounded-[6px] text-white'>Go to home</button>

    </div>
    
    
    
    </div>

  )
}

export default Page ;