import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Planet from './Planet';
import CameraRig from './CameraRig';
import { OrbitControls } from '@react-three/drei';

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 10, 10], fov: 25}}
      gl={{ preserveDrawingBuffer: true , alpha: true }}
      className='w-full max-w-full h-full transition-all ease-in z-15'
    >
      {/* <OrbitControls
        // autoRotate  // Enable auto-rotation
        // enableDamping  // Enable damping for smoother rotation
        // dampingFactor={0.6}  // Adjust damping factor as needed (higher values dampen faster)
        // screenSpacePanning={false} // You can adjust this based on your preference
      /> */}
      <Environment
        preset="forest"
      />
      <ambientLight
        intensity={0.55}
      />
      <CameraRig>
        <Center>
          <Planet />
        </Center>
      </CameraRig>
    </Canvas>
  );
}

export default CanvasModel;
