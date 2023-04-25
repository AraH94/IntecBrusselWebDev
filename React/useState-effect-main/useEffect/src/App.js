import React, { useState, useEffect } from 'react'

function App() {
  const [resourceType, setResourceType] = useState('post')
  // making some sort of side effect whenever something happens
  console.log('render')
  useEffect(() => { console.log('resource type changed') }, [])
  // UseEffect has a second parameter and each time this changed it will render
  // if you leave [] then it becomes a on mount, so it is better 

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>


    </>
  )
}

export default App