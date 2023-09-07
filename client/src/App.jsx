import React from 'react'
import Home from './pages/Home'
import PlanetViewer from './pages/PlanetViewer'
import Planet from './components/Planet'
const App = () => {
  return (
    <main>
      <Home/>
      <PlanetViewer/>
      <Planet/>
    </main>
  )
}

export default App