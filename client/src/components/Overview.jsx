import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { slideAnimation} from '../config/animations';
import { PlanetInformation } from '../config/constants';
import { useSnapshot } from 'valtio';
import state from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobe,
    faBalanceScale,
    faRuler,
    faClock,
    faThermometer,
    faSun,
    faStar,
} from '@fortawesome/free-solid-svg-icons';

const Overview = () => {
    const snap = useSnapshot(state);
    const planet = snap.selectedPlanet;
    const information = PlanetInformation[planet];

    return (
        <AnimatePresence>
            <motion.div {...slideAnimation('left')} className='overview-container'>
                <div>
                    <table className='overview-table'>
                        <tbody>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faGlobe} /> Name
                                </td>
                                <td>{information.name}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faBalanceScale} /> Mass
                                </td>
                                <td>{information.mass}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faRuler} /> Radius
                                </td>
                                <td>{information.radius}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faClock} /> Period
                                </td>
                                <td>{information.period}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faThermometer} /> Temperature
                                </td>
                                <td>{information.temperature}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faSun} /> Distance (Light-years)
                                </td>
                                <td>{information.distance_light_year}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faStar} /> Host Star Mass
                                </td>
                                <td>{information.host_star_mass}</td>
                            </tr>
                            <tr>
                                <td>
                                    <FontAwesomeIcon icon={faThermometer} /> Host Star Temperature
                                </td>
                                <td>{information.host_star_temperature}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Overview;
