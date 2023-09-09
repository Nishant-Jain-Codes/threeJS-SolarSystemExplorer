import React from 'react';
import { useSnapshot } from 'valtio';
import { useTexture } from '@react-three/drei';
import state from '../store';
import { PlanetTextures } from '../config/constants';

const Planet = () => {
    const snap = useSnapshot(state);
    const selectedPlanet = snap.selectedPlanet;
    const texture = useTexture(PlanetTextures[selectedPlanet]);
    const stateString = JSON.stringify(snap);


    return (
        <group key={stateString}>
            <mesh castShadow>
                <sphereGeometry args={[3, 64, 64]} />
                <meshStandardMaterial
                    map={texture}
                    roughness={0.5}
                    metalness={0.5}
                />
            </mesh>
        </group>
    );
};

export default Planet;
