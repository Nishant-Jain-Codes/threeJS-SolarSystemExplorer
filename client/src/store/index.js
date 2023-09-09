import { proxy } from 'valtio';

// Define the initial state structure
const initialState = {
    isHomePageVisible: true,
    selectedPlanet: 'earth',
    isInfoPanelVisible: false,
    animationState: {
        isPlaying: false,
        speed: 1.0,
    },
    theme: {
        isDark: true,
        isLight: false,
    }
};

// Create a Valtio proxy object to manage the state
const state = proxy(initialState);

// Export the state object
export default state;