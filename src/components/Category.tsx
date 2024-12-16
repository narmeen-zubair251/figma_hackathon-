 import React from 'react'
 import Image from 'next/image'

 const Category = () => {
   return (
     <div className='w-[1316px] h-[1600px] md:h-[800px] lg:h-[500px]  bg-[black]'>
         <div>
         <h3 className=' text-[#FF9F0D] font-normal text-[32px]  font-Great_Vibes ml-[580px] w-[200px] h-[40px] '> Food Category</h3>
         <h1 className='w-[446px] h-[56px] ml-[500px] mb-9 text-[white] font-[700] text-[48px] font-inter'><span className='text-[#FF9F0D]'>Ch</span>oose Food Item</h1>
         </div>
         <div className=' grid gap-5 justify-center md:space-around md:grid-cols-2 lg:grid-cols-4'>
        <div className=''>
             <Image src="/images/category1.png" alt="Category image" width={295} height={300} className='rounded-[6px]'/>
         </div>
         <div>
         <Image src="/images/category2.png" alt="Category2" width={295} height={300} className=' rounded-[6px]'/>
       </div>
        <div>
         <Image src="/images/category3.png" alt="Category3" width={295} height={300} className=' rounded-[6px]'/>
         </div>
         <div className=''> 
        <Image src="/images/category4.png" alt="Category4" width={295} height={300} className=' rounded-[6px]'/>

         </div>


         </div>
        
        
    </div>
   )
 }

export default Category



// import React from 'react';
// import Image from 'next/image';

// const Category = () => {
//   return (
//     <div className="w-full bg-black p-6 md:p-10 lg:p-12">
//       {/* Header Section */}
//       <div className="text-center">
//         <h3 className="text-[#FF9F0D] text-[24px] md:text-[32px] font-normal font-Great_Vibes mb-2">
//           Food Category
//         </h3>
//         <h1 className="text-white font-bold text-[28px] md:text-[36px] lg:text-[48px] font-inter mb-6">
//           <span className="text-[#FF9F0D]">Ch</span>oose Food Item
//         </h1>
//       </div>

//       {/* Images Section */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         <div className="flex justify-center">
//           <Image
//             src="/images/category1.png"
//             alt="Category 1"
//             width={295}
//             height={300}
//             className="rounded-[6px]"
//           />
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/category2.png"
//             alt="Category 2"
//             width={295}
//             height={300}
//             className="rounded-[6px]"
//           />
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/category3.png"
//             alt="Category 3"
//             width={295}
//             height={300}
//             className="rounded-[6px]"
//           />
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/category4.png"
//             alt="Category 4"
//             width={295}
//             height={300}
//             className="rounded-[6px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;



// import React from 'react';
// import Image from 'next/image';

// const Category = () => {
//   return (
//     <div className="w-full bg-black px-4 py-8 md:py-12 lg:py-16">
//       {/* Heading Section */}
//       <div className="text-center mb-8">
//         <h3 className="text-[#FF9F0D] font-normal text-[24px] md:text-[32px] font-Great_Vibes">
//           Food Category
//         </h3>
//         <h1 className="text-white font-bold text-[28px] md:text-[36px] lg:text-[48px] font-inter">
//           <span className="text-[#FF9F0D]">Ch</span>oose Food Item
//         </h1>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
//         <div className="flex justify-center">
//           <Image
//             src="/images/category1.png"
//             alt="Category 1"
//             width={200}
//             height={200}
//             className="rounded-[6px] object-cover"
//           />
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/category2.png"
//             alt="Category 2"
//             width={200}
//             height={200}
//             className="rounded-[6px] object-cover"
//           />
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/category3.png"
//             alt="Category 3"
//             width={200}
//             height={200}
//             className="rounded-[6px] object-cover"
//           />
//         </div>
//         <div className="flex justify-center">
//           <Image
//             src="/images/category4.png"
//             alt="Category 4"
//             width={200}
//             height={200}
//             className="rounded-[6px] object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;
