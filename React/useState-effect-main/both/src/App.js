import React, { useState, useEffect } from 'react';
import "./App.css"
function App() {
  const [widthUEffect, setwidthUEffect] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setwidthUEffect(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleResizeS = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    document.getElementsByTagName('button')[0].addEventListener('click', handleResizeS);
    // return () => {
    //   document.getElementsByTagName('button')[0].removeEventListener('click', handleResizeS);
    // };
  }, []);

  return (
    <div>
      {console.log(widthUEffect + ' : useState, on mount')}
      {console.log(handleResize + '  : handleResize')}
      {console.log(width + ' : useEffect')}      <br/>

      <h1>useEffect : {widthUEffect}</h1>
      <h3 >no button needed for useEffect</h3>
      <br/>
      <h1>useState : {width}</h1>
      <button>Wake up man!</button>

    </div>
  );
}

export default App;
