import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
const Tab = ({ tab, isPlanetTab, isActiveTab, handleClick }) => {
    const snap = useSnapshot(state)
    return (
        <div
            key={tab.name}
            onClick={handleClick}
        >
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isPlanetTab? 'w-14 h-14 ':'w-10 h-10'} object-contain'}`}
            />
        </div>
    )
}

export default Tab