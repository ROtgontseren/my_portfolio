"use client"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Index = () => {
  const particlesinit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  const options = {
    background: {
      color: "#000",
      // image: "url(galaxy.jpg)",
      position: "center",
      repeat: "no-repeat",
      size: "cover"
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
      autoPlay: true
    },
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "repulse"
        }
      },
      modes: {
        push: {
          quantity: 2
        },
        repulse: {
          distance: 100
        }
      }
    },
    particles: {
      links: {
        enable: true,
        distance: 200
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 }
      },
      opacity: {
        value: { min: 0.3, max: 0.7 }
      },
      size: {
        value: { min: 1, max: 3 }
      }
    }
  };

  return (
    <div style={{ backgroundImage: `url('galaxy.jpg')`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <Particles init={particlesinit} options={options} />
    </div>
  );
};

export default Index;

