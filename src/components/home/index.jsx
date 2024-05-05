import React from 'react';
import Image3D from "./image3D";
const index = () => {
  return (
    <div className='flex gap-12 justify-center flex-col w-full h-[100vh] mt-24'  id='Home'>
      <div className='flex gap-14 justify-evenly'>
        <div className='flex flex-col w-[300px]'>      
            <h1><span>Im</span> <span>Otgontseren</span></h1>
            <h1><span>Im</span> <span>FullStack</span></h1>
         </div> 
         <div className='text-white flex items-center justify-center'>
             <Image3D/>
         </div>
      </div>  
    </div>
  )
}

export default index;
