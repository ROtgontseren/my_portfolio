"use client"
import React, { useEffect } from 'react';
import Script from 'next/script';
import "./style.css";

const Navbar = () => {
  useEffect(() => {
    const indicator = (e) => {
      const marker = document.querySelector('#marker');
      marker.style.left = e.target.offsetLeft + 'px';
      marker.style.width = e.target.offsetWidth + 'px';
    };

    const items = document.querySelectorAll('nav a');
    items.forEach(link => {
      link.addEventListener('click', (e) => {
        indicator(e);
      });
    });

    return () => {
      items.forEach(link => {
        link.removeEventListener('click', indicator);
      });
    };
  }, []);

  return (
    <div id='box' className='top-0'>
      <div className='p-6'>
        <a href='#container'><img src='logo.png' className='rounded-full w-12 h-12'/></a>
      </div>
      <nav className="flex justify-start gap-10 flex-wrap px-12 font-serif rounded-xl py-4 text-white">
        <a href='#Home'>Home</a>
        <a href='#about'>About me</a>
        <a href='#project'>Project</a>
        <a href='#contact'>Contact me</a>
        <div id='marker'></div>
      </nav>
      <Script id="navbar-script">
        {` `}
      </Script>
    </div>
  );
};

export default Navbar;

