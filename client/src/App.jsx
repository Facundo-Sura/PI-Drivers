import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Landing from './views/landing/Landing'

function App() {
  return (
    <>
      <div>
      <div className="titulo">
        <h1>Bienvenido al excitante mundo de las carreras</h1>
      </div>
      <div className="boton">
          <button>Empieza!</button>
        </div>
      </div>
    </>
  )
}

export default App
