import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { slideAnimation} from '../config/animations'
import CustomButton from './CustomButton'

const Ai = ({ prompt, setPrompt, generatingInformation, handleSubmit, aiResponse }) => {
    return (
        <AnimatePresence>
            <motion.div {...slideAnimation('left')}
                className='ai-container'
            >
                <p className='ai-response'>
                    {generatingInformation
                        ? 'Generating information...'
                        : aiResponse
                            ? aiResponse
                            : 'You can ask AI about the planet'}
                </p>
                <textarea
                    className='ai-textarea'
                    placeholder='Ask AI about the planet'
                    rows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <div className='flex'>
                    {
                        generatingInformation ? (
                            <CustomButton
                                type='outline'
                                title='Asking AI...'
                                customStyles='text-xs'
                            />
                        ) : (
                            <CustomButton
                                type='filled'
                                title='Ask AI !!'
                                handleClick={() => handleSubmit()}
                                customStyles='text-xs w-fit py-1 text-lg '
                            />
                        )
                    }
                </div>

            </motion.div>
        </AnimatePresence>
    )
}

export default Ai