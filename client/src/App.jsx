import React from 'react'
import Home from './pages/Home'
import SolarSystemView from './pages/SolarSystemView'
import Planet from './components/Planet'
const App = () => {
  return (
    <main>
      <Home/>
      <SolarSystemView/>
      <Planet/>
    </main>
  )
}

export default App