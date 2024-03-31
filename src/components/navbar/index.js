import React from 'react'
import Link from "next/link";

const navbar = () => {
  return (
    <div class="p-12 flex justify-between">
      <div className='text-white z-10'>
        <h1>Ro</h1>
      </div>
      <nav class="flex justify-start gap-10 flex-wrap z-10 px-12 font-serif rounded-xl py-8 text-white">
        <button className="btn btn-active btn-neutral text-2xl font-bold"><a href='#home'>Home</a></button>
        <button className="btn btn-active btn-neutral text-2xl font-bold"><a href='#about'>About me</a></button>
        <button className="btn btn-active btn-neutral text-2xl font-bold"><a href='#project'>Project</a></button>
        <button className="btn btn-active btn-neutral text-2xl font-bold"><a href='#contact'>Contact me</a></button>
      </nav>
    </div>
  )
}

export default navbar;
