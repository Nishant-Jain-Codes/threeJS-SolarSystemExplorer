import React from 'react'
const Tab = ({ tab, isPlanetTab, isActiveTab, handleClick }) => {
    return (
        <div
            key={tab.name}
            onClick={handleClick}
        >
            <img
                src={tab.icon}
                alt={tab.name}
                className={`
                    ${isPlanetTab? 'w-14 h-14 ':'w-10 h-10'}
                        object-contain'}
                    ${isActiveTab? 'border-4 border-white rounded-full':'border-2 border-transparent'}
                    `
                }
            />
        </div>
    )
}

export default Tab