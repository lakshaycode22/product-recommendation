import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          
        },
        particles: {
          number: {
            value: 50, // Adjust the number of particles
          },
          size: {
            value: 3,
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle', // You can experiment with other shapes like 'triangle', 'polygon', etc.
          },
          move: {
            enable: true,
            speed: 1, // Adjust the speed of particle movement
            direction: 'top', // You can use 'none', 'top', 'top-right', etc.
            random: true, // Randomize particle movement direction
            straight: false, // Allow particles to move in a straight line
            outModes: {
              default: 'out', // Define how particles behave when they go out of the canvas
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse', // Change interaction mode on hover
            },
          },
        },
      }}
    />
  );
};

export default ParticleBackground;
