import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>

      <h1>Flower website</h1>
      <div>
        <input type="text" placeholder='Flower title ...' />
        <input type="number" placeholder='Release Date ...' />
        <button>Add Flower</button>
      </div>
    </>
  )
}

export default App
