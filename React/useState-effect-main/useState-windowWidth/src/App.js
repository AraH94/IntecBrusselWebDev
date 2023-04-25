import React, { useState, useEffect } from 'react'

function App() {
  const [width, setWidth] = useState(window.innerWidth)
  console.log(window.innerWidth)
  return (
    <>
      <h1>{width}</h1>
    </>
  )
}

export default App;