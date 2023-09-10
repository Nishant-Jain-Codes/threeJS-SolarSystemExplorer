import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
const CustomButton = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state)
    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.theme.isLight? "black" : "white",
                color: snap.theme.isLight?"white":"black",
            }
        }
        else if (type === 'outline') {
            return {
                backgroundColor: 'transparent',
                color: snap.theme.isLight?"black":"white",
                border: `1px solid ${snap.theme.isLight?"black":"white"}`,
            }
        }
    }
    return (
        <button
            className={`px-2 py-1.2 flex-1 rounded-md ${customStyles} `}
            style={generateStyle(type)}
            onClick={handleClick}
        >
        {title}
        </button>
    )
}

export default CustomButton