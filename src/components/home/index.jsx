import React from 'react';
import App from './autoslider';
const index = () => {
  return (
    <div className='flex gap-12 justify-center flex-col w-full h-[100vh]' id='Home'>
      <div className='flex gap-14 justify-center'>
       <div className='text-white flex flex-col items-center justify-center'>
          <h1 className='text-[36px] font-serif text-white'>hello im Otgontseren</h1>
          <h1 className='text-[40px]'>Im full stack developer</h1>
       </div>
       <div className='text-white z-10 w-[800px] h-[500px]'>
        <App/>
       </div> 
      </div>  
    </div>
  )
}

export default index;
