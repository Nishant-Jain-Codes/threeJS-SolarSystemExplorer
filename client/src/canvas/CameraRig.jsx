import React, { useRef, useState } from 'react';
import state from '../store';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);
    const rotationSpeed = 1; // Adjust this value to control the rotation speed
    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;

        // Set the initial position of the model
        let targetPosition = [-3, 12, 12];
        if (snap.isHomePageVisible) {
            if (isBreakpoint) targetPosition = [-2, 17, 15];
            if (isMobile) targetPosition = [0, 31, 29];
        } else {
            if (isMobile) targetPosition = [-0.5, 26, 26];
            else targetPosition = [0, 12, 12];
        }

        // Set model camera position
        easing.damp3(state.camera.position, targetPosition, 1, delta);

        // Rotate the camera rig automatically
        group.current.rotation.y += rotationSpeed * delta;

    });

    return (
        <group ref={group}
        >
            {children}
        </group>
    );
};

export default CameraRig;
