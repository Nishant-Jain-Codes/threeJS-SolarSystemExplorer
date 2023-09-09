import React, { useRef } from 'react';
import state from '../store';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import { easing } from 'maath';

const CameraRig = ({ children }) => {
    const group = useRef();
    const snap = useSnapshot(state);
    const rotationSpeed = 0.1; // Adjust this value to control the rotation speed

    useFrame((state, delta) => {
        const isBreakpoint = window.innerWidth <= 1260;
        const isMobile = window.innerWidth <= 600;
        // Set the initial position of the model
        let targetPosition = [15, 15, 15];
        if (snap.isHomePageVisible) {
            if (isBreakpoint) targetPosition = [0, 18, 20];
            if (isMobile) targetPosition = [0, 31, 25];
            else targetPosition = [-4, 17, 17];
        } else {
            if (isMobile) targetPosition = [-0.5, 22, 22];
            else targetPosition = [0, 12, 12];
        }
        // Set model camera position
        easing.damp3(state.camera.position, targetPosition, 1, delta);

        // Rotate the camera rig automatically
        group.current.rotation.x += rotationSpeed * delta;
        group.current.rotation.y += rotationSpeed * delta;

        // Limit the rotation to avoid excessive spinning
        const maxRotation = Math.PI * 2; // 360 degrees
        group.current.rotation.x = group.current.rotation.x % maxRotation;
        group.current.rotation.y = group.current.rotation.y % maxRotation;
    });

    return (
        <group ref={group}>
            {children}
        </group>
    );
};

export default CameraRig;
