"use client"
import React from 'react';
import Image3D from "./image3D";
import { TypeAnimation } from 'react-type-animation';
import { IoLogoJavascript } from "react-icons/io";
import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMongoose } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiJest } from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

const index = () => {
  return (
    <div className='flex gap-12 justify-center flex-col w-full h-[100vh] mt-24'  id='Home'>
      <div className='flex gap-14 justify-evenly'>
         <div className='flex flex-col w-1/3'>
         <div className='flex'>
           <div className='flex flex-col justify-center items-center'>
              <div className='w-5 h-5 rounded-full bg-[#00efff]'/>
              <div className='w-[2px] sm:h-40 bg-gradient-to-r from-[#00efff] to-cyan-400'/>
           </div>
           <div className='flex justify-center items-center ml-6'>
              <div>
                 <div className='flex gap-3'>
                    <h2 className="text-white font-bold text-3xl font-serif flex flex-row justify-center items-center gap-6">Hello</h2>
                    <h1 >
                    <TypeAnimation
                             sequence={[
                               'Im OTGONTSEREN',
                               4000,
                               'Web Developer',
                               4000,
                             ]}
                             wrapper="span"
                             speed={30}
                             style={{ fontSize: '32px', display: 'inline-block', font: 'serif' }}
                             repeat={Infinity}/>
                    </h1>
                  </div>
              <p className='text-white text-lg font-serif'>Im junior developer 3D visuals ,user
                 <br className='sm:block hidden'/> 
                 interfaces and web applications</p>
              </div>   
           </div>
        </div>
        <div className='flex flex-col w-[300px] mt-12'>      
            <h1><span>F</span> <span>rontend</span></h1>
            <h1><span>B</span> <span>ackend</span></h1>
            <h1><span>F</span> <span>ullStack</span></h1>
         </div> 
         <div className='w-full h-[220px] bg-transparent mt-12'>
            <h2 className='flex w-full justify-center items-center font-serif text-white text-xl'>i have working this languages and tools</h2> 
            <div className='flex flex-wrap gap-6 p-6'>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><TiHtml5 size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><IoLogoJavascript size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><RiTailwindCssFill size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><FaReact size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><RiNextjsFill size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><SiMongodb size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><BiLogoPostgresql size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><FaSass size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><TbBrandTypescript size={25}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><SiMongoose size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><GrGraphQl size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><SiJest size={30}/></div>
              <div className='bg-white rounded-full w-8 h-8 flex items-center justify-center hover:scale-150'><TbBrandCypress size={30}/></div>
            </div> 
         </div>
         </div>
         <div className='text-white flex items-center justify-center'>
             <Image3D/>
         </div>
      </div>  
    </div>
  )
}

export default index;
