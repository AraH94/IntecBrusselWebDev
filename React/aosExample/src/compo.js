import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration
    });
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello World!</h1>
      <p data-aos="fade-left" data-aos-duration="2000">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non lectus ac sem bibendum maximus vel in mauris.
      </p>
    </div>
  );
};

export default MyComponent;
