"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Index = () => {
  const particlesinit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  const options={
    background: {
      color: {
        value: "#000000",
      },
    },
    fullScreen: {
          enable: true,
           zIndex: -1,
         },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 150,
          duration: 0.6,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }
  return (
    <div>
      <Particles init={particlesinit} options={options} />
    </div>
  );
};

export default Index;

// const options = {
//   background: {
//     color: "#111",
//     // image: "url(galaxy.jpg)",
//     position: "center",
//     repeat: "no-repeat",
//     size: "cover"
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//     autoPlay: true
//   },
//   interactivity: {
//     events: {
//       onclick: {
//         enable: true,
//         mode: "push"
//       },
//       onHover: {
//         enable: true,
//         mode: "repulse"
//       }
//     },
//     modes: {
//       push: {
//         quantity: 2
//       },
//       repulse: {
//         distance: 100
//       }
//     }
//   },
//   particles: {
//     links: {
//       enable: true,
//       distance: 200
//     },
//     move: {
//       enable: true,
//       speed: { min: 1, max: 3 }
//     },
//     opacity: {
//       value: { min: 0.3, max: 0.7 }
//     },
//     size: {
//       value: { min: 1, max: 3 }
//     }
//   }
// };

