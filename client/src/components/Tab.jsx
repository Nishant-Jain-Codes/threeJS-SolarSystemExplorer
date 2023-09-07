import React from 'react'

const Tab = ({ tab, isPlanetTab, isActiveTab, handleClick }) => {
    return (
        <div>
            <img
                src={tab.icon}
                alt={tab.name}
                className={`${isPlanetTab? 'w-14 h-14 ':'w-10 h-10'} object-contain'}`}
            />
        </div>
    )
}

export default Tab