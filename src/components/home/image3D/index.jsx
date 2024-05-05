import React from 'react';
import "./style.css";
import App from '../autoslider';
const index = () => {
  return (
    <div className='container relative rounded-3xl'>
          <div className='w-[500px] h-[250px] absolute  animate-none z-0'><App/></div>
         <div className='box'>
          <span style={{'--i':1}}><img  src="1.jpg"/></span>
          <span style={{'--i':2}}><img  src="2.jpg"/></span>
          <span style={{'--i':3}}><img  src="3.jpg"/></span>
          <span style={{'--i':4}}><img  src="4.jpg"/></span>
          <span style={{'--i':5}}><img  src="5.jpg"/></span>
          <span style={{'--i':6}}><img  src="6.jpg"/></span>
          <span style={{'--i':7}}><img  src="7.jpg"/></span>
          <span style={{'--i':8}}><img  src="8.jpg"/></span>
         </div> 
    </div>
  )
}

export default index
