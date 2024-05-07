import React from 'react'
import "./styles.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const index = () => {
  return (
    <div class="font-poppins relative" id='about'>
    <div id="container" class="w-auto flex px-24 justify-center relative py-24">
        <div class="p-6 sm:p-6 md:p-6 lg:p-6 xl:p-6 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
          <div class="containerBox">
          <div class="card">
            <div class="imgbox">
               <img class="rounded-lg w-full h-full" src="photo.jpg"/>
            </div>
            <div class="content">
               <div class="contentBox">
                  <h2>Some Social<br/><span>Follow Me</span></h2>
               </div>
               <ul class="scifi">
                  <li style={{'--i':1}}><a href='https://www.facebook.com/otgontseren.knight.9'><FaFacebook/></a></li>
                  <li style={{'--i':2}}><a href='https://www.instagram.com/radnaabazarotgontseren'><FaInstagram/></a></li>
                  <li style={{'--i':3}}><a href='https://twitter.com/otgontseren2'><RiTwitterXLine/></a></li>      
               </ul>
            </div>
          </div>
          </div>
       <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-12">
        <h1 class="text-white font-bold text-3xl mt-6 mb-8">
          Hey it's me Otgontseren
        </h1>
       <div className='flex items-center justify-center'> 
         <p class="text-white text-sm text-justify w-full sm:w-[35rem] md:w-[30rem] lg:w-full mb-10">
          I'm Otgontseren, a 28-year-old pinecone academy with a passion for web
          development in 2023. My tech journey started with HTML, CSS, and JavaScript,
          and I was hooked by the thrill of crafting dynamic, interactive
          websites. As I grew, Node.js and ReactJS became my go-to tools for
          building scalable applications. Feel free
          to connect if you have questions, collaboration ideas, or just want to
          discuss the latest in web development!
        </p>
      </div>
        <div id="social" class="flex justify-start items-center gap-4">
          <a rel="noopener" target="_blank" href="https://github.com/ROtgontseren" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
              <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
              <span>Visit my Github</span>
          </a>
      </div>    
      </div>
    </div>
   </div> 
  </div>
  
  )
}

export default index
