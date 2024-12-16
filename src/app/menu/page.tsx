import React from 'react'
import Image from 'next/image'
const Menu = () => {
  return (
    // Top Heading Section
<div className='w-[1316px] h-[4200px]'>
<div className='w-[1316px] h-[410px] ' 
style={{backgroundImage:"url('/images/unsplash_4ycv3Ky1ZZU.png')"}}>
       <h1 className='text-[white] font-[700]  font-inter text-[48px] flex  pt-[100px] justify-center items-center'> Our Menu</h1>
       <p className='text-[white] font-inter font-normal text-[20px] flex justify-center'>Home /<span className='text-[#FF9F0D]'> Menu</span></p>
</div>
   
   {/* Starter Menu Section */}
   <div className='w-[1316px] h-[750px]'>
<div className='flex'>
    <Image src="/images/bowl.png" alt="basket" width={400} height={526} className= 'ml-[50px] mt-[100px]'/>
    
<div className='ml-[120px] my-4 border-b [border: 1px solid #E0E0E0]'>
<div>
        {/* Item 01 */}
    
   <h1 className='w-[294px] h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[130px]'>Starter Menu</h1>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Alder Grilled Chinook Salmon</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>32$</p>
 </div>
    
     {/* Item 02 */}
    
<div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]'>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#FF9F0D] text-[24px] '>Berries and creme tart</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>43$</p>
</div>
    
    {/* Item 03 */}
<div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]'>
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#4F4F4F] text-[24px] '>Tormentoso Bush Pizza Pintoage</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='w-[80px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>14$</p>
</div>  
    
     {/* Item 04 */}
   
 <div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0] h-[100px]'>
    <h1 className='w-[350px] h-[32px] font-Helvetica font-[700] mb-2 text-[#4F4F4F] text-[24px] '>Spicy Vegan Potato Curry</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px]  '>35$</p>
    
</div>
   </div>
      </div>
         </div>

    {/* Main Course Section */}
    <div >
   
    <div className='w-[700px] h-[180px] ml-[50px] mt-[50px] my-4 border-b [border: 1px solid #E0E0E0] '>
    {/* Item 01 */}
    
   <h1 className='w-[294px] h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[10px]'>Main Course</h1>
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Optic Big Breakfast Combo Menu</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>32$</p>
 </div>
   
 <div className='w-[700px] h-[120px] ml-[50px] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>
    {/* Item 02 */}
    
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Cashew Chicken With Stir-Fry</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>43$</p>
 </div>
   
 <div className='w-[700px] h-[120px] ml-[50px] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>
    {/* Item 03 */}
    
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'> Vegetables & Green Salad</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='w-[80px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>43$</p>
 </div>
 
 <div className='w-[700px] h-[120px] ml-[50px] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>
    {/* Item 04 */}
    
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'> Spicy Vegan Potato Curry</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>35$</p>
 </div>
 {/* Main Course Image */}
 <div>
 <Image src="/images/burger.png" alt="basket" width={418} height={500} className= 'ml-[850px] mt-[-600px]'/>
 </div>
 </div>

 {/* Full Image Section */}
 <div className='w-[1316px] h-[400px]'>
 <Image src="/images/Clients.png" alt="basket" width={1315} height={468} className='mt-[70px]'/>
 </div>
    
     {/* Desserts Section */}
 <div className='w-[1316px] h-[750px]'>
<div className='flex'>
    <Image src="/images/cupcake.png" alt="cupcake" width={400} height={468} className= 'ml-[80px] '/>
    
<div className='ml-[110px] my-4 border-b [border: 1px solid #E0E0E0]'>
<div>
        {/* Item 01 */}
    
   <h1 className='w-[294px] h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[30px]'>Dessert</h1>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Fig and lemon cake</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>32$</p>
 </div>
    
     {/* Item 02 */}
    
<div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]'>
    <h1 className='w-[341px] h-[32px] font-Helvetica font-[700] mb-2 text-[#FF9F0D] text-[24px] '>Creamy mascarpone cake</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL </p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>43$</p>
</div>
    
    {/* Item 03 */}
<div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0]'>
    <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#4F4F4F] text-[24px] '>Pastry, blueberries, lemon juice</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
    <p className='w-[80px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>14$</p>
</div>  
    
     {/* Item 04 */}
   
 <div className='mt-[80px] my-4 border-t [border: 1px solid #E0E0E0] h-[100px]'>
    <h1 className='w-[350px] h-[32px] font-Helvetica font-[700] mb-2 text-[#4F4F4F] text-[24px] '>Pain au chocolat</h1>
    <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
    <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
    <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px]  '>35$</p>
    
</div>
   </div>
      </div>
         </div>
   

{/* Drinks Section */}
<div >
   
   <div className='w-[700px] h-[180px] ml-[50px] mt-[50px] my-4 border-b [border: 1px solid #E0E0E0] '>
   {/* Item 01 */}
   
  <h1 className='w-[294px] h-[56px] font-Helvetica font-[700] mb-3 text-[48px] text-[#333333] mt-[10px]'>Drinks</h1>
   <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Caffè macchiato</h1>
   <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Toasted French bread topped with romano, cheddar</p>
   <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL </p>
   <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>32$</p>
</div>
  
<div className='w-[700px] h-[120px] ml-[50px] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>
   {/* Item 02 */}
   
   <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'>Aperol Spritz Capacianno</h1>
   <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Gorgonzola, ricotta, mozzarella, taleggio</p>
   <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>700 CAL</p>
   <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>43$</p>
</div>
  
<div className='w-[700px] h-[120px] ml-[50px] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>
   {/* Item 03 */}
   
   <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'> Caffe Latte Campuri</h1>
   <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Ground cumin, avocados, peeled and cubed</p>
   <p className='w-[80px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>1000 CAL</p>
   <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>14$</p>
</div>

<div className='w-[700px] h-[120px] ml-[50px] mt-[10px] my-4 border-b [border: 1px solid #E0E0E0] '>
   {/* Item 04 */}
   
   <h1 className='w-[400px] h-[32px] font-Helvetica font-[700] mb-2 text-[#333333] text-[24px]'> Tormentoso BushTea Pintoage</h1>
   <p className='w-[368px] h-[24px] font-Helvetica mb-2 font-normal tetx-[16px] text-[#4F4F4F]'>Spreadable cream cheese, crumbled blue cheese</p>
   <p className='w-[63px] h-[24px] font-Helvetica font-normal text-[16px] text-[#4F4F4F] '>560 CAL</p>
   <p className='w-[41px] h-[32px] font-Helvetica font-[700] text-[24px] text-[#FF9F0D] ml-[650px] mt-[-90px] '>35$</p>
</div>
   {/* Drinks Image */}
<div>
<Image src="/images/drinks.png" alt="drinks" width={418} height={500} className= 'ml-[850px] mt-[-600px] mr-[50px]'/>
</div>
</div>

{/* Image */}
<div className='w-[1316px] h-[275px]'>
    <p className='w-[152px] h-[25px] font-inter mt-[100px] mb-3 ml-[560px] text-center text-[18px] text-[#333333]'>Partners & Clients</p>
     <h1 className='w-[672px] h-[56px] font-Helvetica font-[700] text-[48px] text-[#333333] ml-[350px]'> We work with the best pepole</h1>
     <Image src="/images/logo.png" alt="logo" width={1190} height={129} className='mt-[60px] ml-[40px] mr-[30px]'/> 
     
</div>


















</div>

   
  )
}
 
export default Menu ;