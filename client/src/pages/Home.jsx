// this will display the project About section 
// there will be a button to move to the SolarSystem page
// will use framer motion to animate the transition
// will use valtio to manage state

import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import state from '../store'
import { useSnapshot } from 'valtio'
import { CustomButton } from '../components'
import { 
  slideAnimation,
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation
} from '../config/animations'
const Home = () => {
  const snap = useSnapshot(state)
  const theme = snap.theme.isLight ? 'light' : 'dark'
  return (
    // for the transition to have exit animation,
    // the component must be wrapped in AnimatePresence 
    // so that framer can hold the component in the DOM 
    // until the exit animation is complete
    <AnimatePresence>
      {
        snap.isHomePageVisible && (
          <motion.section
            className='home'
            {...slideAnimation('left')}
          >
            <motion.header
              {...slideAnimation('down')}
            >
              <img
                src='./astronaut.png'
                alt="logo-image"
                className='w-32 h-32  object-contain'
              />
            </motion.header>
            {/* About  */}
            <motion.div 
              className="home-content"
              {...headContainerAnimation}
            >
              <motion.div {...headTextAnimation}>
                <h1 className={` head-text ${theme}-theme` }>
                  Let's
                  <br className='xl:block hidden' />
                  {" "}
                  Explore!
                </h1>
              </motion.div>
              <motion.div
                className='flex flex-col gap-5'
                {...headContentAnimation}
              >
                <p className={`max-w-md font-normal text-base ${theme}-theme`}>
                  Embark on an extraordinary journey through our solar system with our cutting-edge 3D exploration tool.
                  <br />
                  <strong>
                    Let your curiosity soar
                  </strong>{" "}
                  as you uncover the mysteries of the cosmos.
                </p>
                <CustomButton
                  type="filled"
                  title="Explore"
                  handleClick={() => state.isHomePageVisible = false}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"

                />
              </motion.div>
            </motion.div>
          </motion.section>
        )
      }
    </AnimatePresence>
  )
}

export default Home