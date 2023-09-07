import React from 'react'
import Home from './pages/Home'
import PlanetViewer from './pages/PlanetViewer'
import PlanetModel from './canvas'
const App = () => {
  return (
    <main className="app transition-all ease-in" >
      <Home/>
      <PlanetViewer/>
      <PlanetModel/>
    </main>
  )
}

export default App