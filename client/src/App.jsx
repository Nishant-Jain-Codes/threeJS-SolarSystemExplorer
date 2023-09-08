import React from 'react'
import Home from './pages/Home'
import PlanetViewer from './pages/PlanetViewer'
import { PlanetModel } from './components'
import { StarrySky } from './components'
const App = () => {
  return (
    <main className="app transition-all ease-in" >
      <Home/>
      <PlanetViewer/>
      <PlanetModel/>
      <StarrySky/>
    </main>
  )
}

export default App