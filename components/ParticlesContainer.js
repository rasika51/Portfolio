import {Particles} from 'react-tsparticles';
import { loadFull} from 'tsparticles';
import React, {useCallback} from 'react';
import { distance } from 'framer-motion';


const ParticlesContainer = () => {

  //init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
   
    <Particles 
     className='w-full h-full absolute translate-z-0  lg:bottom-0 lg:right-[-25%]'
      id='tsparticles' 
      init={particlesInit} 
      loaded={particlesLoaded}
      options={{
        fullScreen: {enable: true},
        background: {
          color: {
            value: ''
          },
        },
        fpsLimit: 200,
        interactivity:{
          events: {
            onClick: {
              enable: false, 
              mode: 'push',

            },
            onHover: {
              enable: true,
              mode: 'repulse'
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90
            },
            repulse: {
              distance: 200, 
              duration: 0.4,
            }
          }
        },
        particles: {
          color: {
            value: '#e68e2e',
          },
          links: {
            color: '#f5d393', 
            distance: 150, 
            enable: true,
            opacity : 0.6,
            width: 1.2
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: 'none',
            enable: true,
            outModes: {
              default: 'bounce'
            },
            random: false,
            speed: 0.7,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 700
            },
            value: 80
          },
          opacity: {
            value: 2.2,

          },
          shape: {
            type: 'circle'
          },
          size: {
            value: {min: 1, max:4}
          },
        },
        detectRetina: true,
      }} 
    />

  );
  

};

export default ParticlesContainer;
