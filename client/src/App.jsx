import React from 'react'
import Home from './pages/Home'
import PlanetViewer from './pages/PlanetViewer'
import CanvasModel from './canvas'
import { StarrySky } from './components'
const App = () => {
  return (
    <main 
      className="app transition-all ease-in" 
    >
      <Home/>
      <PlanetViewer/>
      <CanvasModel/>
      <StarrySky/>
    </main>
  )
}

export default App