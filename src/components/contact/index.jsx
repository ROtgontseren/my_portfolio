import React from 'react';
import { PiCityLight } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const index = () => {
  return (
    <>
    <div className="w-full py-6" id="contact">
        <div className='w-3/5 mx-auto relative bg-transparent'>
            <div className="w-3/5 p-8 pr-24 rounded-2xl bg-white mx-auto">
               <div className="flex">
                 <h2 className="text-2xl text-[#A85168] font-bold ">Contact Me</h2>
               </div>
               <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2">
                 <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:border-outline" type="text" placeholder="Name" name="Name" autocomplete="name" />
                 <input className="w-full p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name="email" autocomplete="email" />
               </div>
               <div className="my-4">
                 <textarea placeholder="Message" className="w-full h-18 p-3 mt-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:shadow-outline" name="message" autocomplete="message"></textarea>
               </div>
               <button className="py-3 px-2 text-[12px] font-bold text-gray-100 bg-[#A12347] rounded-xl hover:bg-blue-700">Send Message</button>
            </div>
            <div className="bg-[#1B6485] rounded-2xl absolute bottom-6 right-2 w-1/4 p-6">
               <div className="flex flex-col text-white">
                 <div className="flex flex-col">
                         <div className='flex items-center gap-2'>
                            <PiCityLight/>
                           <h2 className="text-xl">Company</h2>
                         </div>
                         <p className="text-gray-200 white-space: nowrap">Ulaanbaatar, Mongolia</p>
                 </div>
                 <div className="flex flex-col">
                         <div className='flex items-center gap-2'>
                            <FaPhoneAlt/>
                           <h2 className="text-xl">Call</h2>
                         </div>
                         <p className="text-gray-200 white-space: nowrap">Tel:+976 95669607</p>
                 </div>
                 <div className="flex flex-col">
                         <div className='flex items-center gap-2'>
                           <MdOutlineMail/>
                           <h2 className="text-xl">Email</h2>
                         </div>
                         <p className="text-gray-200 white-space: nowrap">Email:otgoohghg.com</p>
                 </div>
               </div>
            </div>
        </div>
    </div>
    <div className='h-[250px] w-full'>

    </div>
    </>
  )
}

export default index
