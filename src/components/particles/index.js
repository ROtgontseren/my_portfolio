"use client"
import {useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"
import { loadFull } from "tsparticles";

const index = () => {
   const options = useMemo(() => {
    return {
      autoPlay: true,
      background: {
        color: "#000"
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      interactivity: {
        events: {
          onclick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable:true,
            mode:"repulse",
          } 
        },
        modes: {
          push : {
            quantity: 10,
          },
          repulse: {
            distance: 100,
          },
        },
      },
      particles: {
        links: {
          enable: true,
          distance: 200,
        },
        move: {
          enable: true,
          speed : {min: 1, max: 3},
        },
        opacity: {
          value: {min: 0.3, max : 0.7},
        },
        size: { 
          value: {min:1 , max: 3},
        },
      },
      autoPlay: {
        value: true,
      }
    };
   }, []);
   const particlesinit = useCallback((engine) => {
    loadSlim(engine);
   });

    return <Particles init={particlesinit} options={options} />;
}

export default index; 


