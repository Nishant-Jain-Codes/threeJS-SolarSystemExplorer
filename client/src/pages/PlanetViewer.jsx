import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import state from '../store'
import { fadeAnimation, slideAnimation } from '../config/animations'
import {
  CustomButton,
  Tab,
  Overview,
  Ai
} from '../components'
import { InformationTabs, PlanetTabs } from '../config/constants'

const PlanetViewer = () => {
  const snap = useSnapshot(state)

  const [activeInformationTab, setActiveInformationTab] = useState('')
  const [prompt, setPrompt] = useState('');

  const generateTabContent = () => {
    switch (activeInformationTab) {
      case "overview":
        return <Overview />;
        break;
      case "ai":
        return <Ai />;
        break;
      default:
        return null;
    }
  }
  return (
    <AnimatePresence>
      {
        !snap.isHomePageVisible && (
          <>
            {/* left side it will contain the options to toggle info about the planet and use chatgpt to generate info and a fun fact section */}
            <div
              key='information-tabs'
              className='absolute top-0 left-0 z-10'
            >
              <div className='flex items-center min-h-screen'>
                <div className="information-tabs-container">
                  {
                    InformationTabs.map((tab, index) => (
                      <motion.div
                        key={tab.name}
                        {...slideAnimation('left', index)}
                      >
                        <Tab
                          tab={tab}
                          handleClick={() => { setActiveInformationTab(tab.name === activeInformationTab ? '' : tab.name) }}
                        />
                      </motion.div>
                    ))
                  }
                  {/* function to generate content when clicked on the tabs */}
                  {generateTabContent()}
                </div>
              </div>
            </div>
            {/* top right a button to get back to home page  */}
            <motion.div
              className='absolute z-10 top-5 right-5'
              {...fadeAnimation}
            >
              <CustomButton
                type='filled'
                title='Go Back'
                handleClick={() => {
                  const backDelay = activeInformationTab === ''? 0 : 250;
                  setActiveInformationTab('');
                    setTimeout(() => {
                      state.isHomePageVisible = true;
                    }, backDelay);
                }}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
            {/* bottom side it will contain options to select planet  */}
            <div
              key='planet-tabs'
              className='planets-tabs-container'
            // {...slideAnimation('up')}
            >
              {
                PlanetTabs.map((tab, index) => (
                  <motion.div
                    key={tab.name}
                    {...slideAnimation('up', index)}
                  >
                    <Tab
                      tab={tab}
                      isPlanetTab={true}
                      isActiveTab={tab.name === snap.selectedPlanet}
                      handleClick={() => { state.selectedPlanet = tab.name }}
                    />
                  </motion.div>
                ))
              }
            </div>
          </>
        )
      }
    </AnimatePresence>
  )
}

export default PlanetViewer