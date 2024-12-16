import { url } from 'inspector'
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
  
      // Top Heading Section
  <div className='w-[1316px] h-[4600px]'>
<div className='w-[1316px] h-[410px] ' style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
       <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'> About Us</h1>
       <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'>About</span></p>
</div>
   
  {/* Section 1 */}
<div className= 'bg-white w-[1296px] h-[800px]'>
 <div className='mt-[100px] flex gap-[20px]'>
    <Image src="/images/about1.png " alt="aboutimg1 "   width={336} height={436} className='mt-[10px] ml-[60px] rounded-[6px]'/>
 <div>
    <Image src="/images/wing.png " alt="aboutimg2 "  width={309} height={271} className=' rounded-[6px] mt-[50px]'/>
 <div>
 <Image src="/images/about3.png " alt="aboutimg3 "  width={309} height={271} className='rounded-[6px] mt-[20px] '/>

 </div>
 
 </div>
 </div> 

 <div className='ml-[750px] mt-[-750px] '>
    <h2 className='text-[#FF9F0D]  pt-[250px] w-[68px] h-[26px] font-Miniver'>About us </h2>
    <h1 className='text-black font-Helvetica font-[700]  text-[48px] w-[524px] h-[90px]  pt-[30px]'>
    Food is an important  part Of a balanced Diet 
    </h1>
    <p className='w-[526px] h-[26px] text-black font-normal font-Helvetica text-[16px] pt-[100px]'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <div className='pt-[120px] flex gap-[10px]'>
   <button className='w-[195px] h-[58px] bg-[#FF9F0D] font-inter font-[700] text-[18px]  rounded-[6px] '>Show More
   </button>
  <div className='  mt-[70px] '>
 </div>
   <Image src="/images/playbutton.png " alt="play button " width={100} height={100}  className='w-[60px] h-[60px] '/>
   <p className='w-[98px] h-[24px] text-black font-inter font-[700] tex-[16px] mt-[20px] '>
   Watch video</p>
</div>
  </div>
  </div>
  {/* Section 2 */}
 <div className='w-[1296] h-[865px] bg-white'>
    <div>
      <h1 className=' w-[361px] h-[56px] font-Helvetica font-[700] text-[48px] text-black ml-[525px]'>Why Choose us </h1>
<p className=' w-[579px] h-[48px] font-Helvetica font-normal text-[16px] ml-[500px] mt-[15px] '>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. 
</p>  
</div>

<div className='ml-[30px] mr-[30px] pt-[50px]'>
    <Image src="/images/aboutfull.png" alt="aboutfull" layout='responsive'  width={1296} height={386} />
</div>

<div className='w-[1296px] h-[360px] flex justify-evenly'>
 <div  className='w-[359px] h-[225px] mr-[20px]'>
   <Image src="/images/Student.png" alt="student"   width={100} height={100} className='w-[80px] h-[80px] ml-[180px] mb-4 mt-[70px]'/>
   <h1 className='w-[115px] h-[29px] ml-[165px] font-Helvetica text-[#333333] font-[700] mb-4 text-[24px]'>Best Chef</h1>
<p className='w-[319px] h-[46px] font-Helvetica font-normal text-[16px] text-[#333333] ml-[85px]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque</p>
<p className='w-[359px] h-[26px] font-Helvetica font-normal text-[16px] text-[#333333] ml-[130px] '>bibendum non dui volutpat </p> 
</div>
    {/* Section 3 */}
<div className='w-[359px] h-[225px]'>
    <Image src="/images/Coffee.png" alt="coffee"   width={100} height={100} className='w-[80px] h-[80px] ml-[180px] mb-4 mt-[70px]'/>
    <h1 className='w-[200px] h-[29px] ml-[145px] font-Helvetica text-[#333333] font-[700] mb-4 text-[24px]'>120 Item food</h1>
    <p className='w-[319px] h-[46px] font-Helvetica font-normal text-[16px] text-[#333333] ml-[85px]'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque</p>
   <p className='w-[359px] h-[26px] font-Helvetica font-normal text-[16px] text-[#333333] ml-[130px] '>bibendum non dui volutpat </p> 
</div>

<div className='w-[359px] h-[225px]'>
    <Image src="/images/Person.png" alt="person"   width={100} height={100} className='w-[80px] h-[80px] ml-[180px] mb-4 mt-[70px]'/>
    <h1 className='w-[235px] h-[29px] ml-[125px] font-Helvetica text-[#333333] font-[700] mb-4 text-[24px]'>Clean Environment</h1>
    <p className='w-[319px] h-[46px] font-Helvetica font-normal text-[16px] text-[#333333] ml-[85px]'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque</p>
   <p className='w-[200px] h-[26px] font-Helvetica font-normal text-[16px] text-[#333333] ml-[130px] '>bibendum non dui volutpat </p> 
</div> 
 </div>
 
     {/*Section 4  */}
 <div className='ml-[30px] mr-[30px] pt-[50px]'>
    <Image src="/images/Team Member.png" alt="team member" layout='responsive' width={100} height={100} className='w-[1159px] h-[384px]'/>
</div>

     {/* Section 5 */}
<div className='w-[1270px] h-[770px]  '>
<div className='ml-40'>
     <h3 className='w-[128px] h-[40px] font-Great_Vibes font-normal text-[32px] text-[#FF9F0D]'>Testimonials</h3>       
      <h1 className=' w-[599px] h-[56px] font-Helvetica font-[700] text-[48px] text-black'>What our client are saying</h1>  
        </div>
<div>
 
 {/* Clients */}
           
     <div className='w-[668px] h-[400px] bg-white ml-[450px] border [border:1px border-solid] shadow-xl mt-[120px]'>
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

         {/* Our Food Menu */}
         <div className='w-[1316px] h-[841px]'>
         <div className='flex flex-col items-center mt-[90px]'> 
        <h1 className='w-[355px] h-[56px] font-Helvetica font-[700] text-[48px] text-[#333333] mb-2'>Our Food Menu</h1>
        <p className='w-[418px] h-[48px] font-inter font-normal text-[16px] text-[#4F4F4F] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Varius sed pharetra dictum neque massa congue</p>
        <div className='w-[622px] h-[28px] mt-[25px] gap-12 mb-6 flex justify-center items-center'>
        <p className='w-[90px] h-[28px] font-inter fony-normal text-[20px] text-[#FF9F0D] '>Breakfast</p>
        <p className='w-[58px] h-[28px] font-inter fony-normal text-[20px] text-[#4F4F4F]'>Lunck</p>
        <p className='w-[90px] h-[28px] font-inter fony-normal text-[20px] text-[#4F4F4F]'>Dinner</p>
        <p className='w-[90px] h-[28px] font-inter fony-normal text-[20px] text-[#4F4F4F]'>Dessert</p>
        <p className='w-[90px] h-[28px] font-inter fony-normal text-[20px] text-[#4F4F4F]'>Drink</p>
        <p className='w-[90px] h-[28px] font-inter fony-normal text-[20px] text-[#4F4F4F]'>Snack</p>
        </div>
         </div>
         
         
         {/* Items Section */}
         <div className='w-[1060px] h-[530px] ml-[120px] border-t [border:1px solid]'>
         <div className=' w-[530px] h-[115px]  my-4 border-b [border: 1px solid #E0E0E0] '>
<div>
         {/* Item 01 */}
    
   
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#FF9F0D] text-[24px]'>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px] '>32$</p>
 </div>
    
     {/* Item 02 */}
    
<div className='mt-[80px] '>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] mt-[50px]'>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px] '>32$</p>
</div>
    
    {/* Item 03 */}
<div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]'>
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] '>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='w-[80px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px] '>32$</p>
</div>  
    
     {/* Item 04 */}
   
 <div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0] h-[100px] border-b'>
    <h1 className='w-[350px] h-[32px] font-Helvetica font-[700] mb-2 text-[#4F4F4F] text-[24px] '>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px]  '>32$</p>
    
</div>
   </div>
         
   <div className=' w-[530px] h-[115px] ml-[550px] my-4 border-b [border: 1px solid #E0E0E0]'>

         {/* Item 05 */}
    
   <div className='mt-[-130px]'>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#4F4F4F] text-[24px]'>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px] '>32$</p>
 </div>
    
     {/* Item 06 */}
    
<div className='mt-[80px] '>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] mt-[50px]'>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px] '>32$</p>
</div>
    
    {/* Item 07 */}
<div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]'>
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] '>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='w-[80px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px] '>32$</p>
</div>  
    
     {/* Item 08 */}
   
 <div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]
 border-b  h-[100px]'>
    <h1 className='w-[350px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px] '>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[480px] mt-[-90px]  '>32$</p>
    
</div>
   </div>  













         
         
         </div>
         <div className='flex justify-center items-center'>
          <button className='w-[143px] h-[52px] border-[1px] border-[#FF9F0D] text-[#FF9F0D]  font-Helvetica font-normal text-[16px] text-center'>view menu</button> 
          </div>
          </div>  
    </div>
    </div>
      </div>
  </div>
             );
           }

           export default About ;