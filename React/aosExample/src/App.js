import React, { useEffect } from 'react';
import AOS from 'aos';
import Comp from './compo.js';
import 'aos/dist/aos.css';

const MyComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // default animation duration
    });
  }, []);

  return (
    <div>
      <Comp/>
    </div>
  );
};

export default MyComponent;

// installeren in terminal: npm i aos --save