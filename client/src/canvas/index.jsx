import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Planet from './Planet';
import CameraRig from './CameraRig';
const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 10, 10], fov: 25}}
      gl={{ preserveDrawingBuffer: true , alpha: true }}
      className='w-full max-w-full h-full transition-all ease-in z-15'
    >
      <Environment
        preset="sunset"
      />
      <ambientLight
        intensity={0.55}
      />
      
      <CameraRig>
          <Planet />
      </CameraRig>
    </Canvas>
  );
}

export default CanvasModel;
