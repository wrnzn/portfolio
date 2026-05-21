import { Canvas } from '@react-three/fiber';
import { World } from './components/World';
import { CameraRig } from './components/CameraRig';
import { AdventurerLog } from './components/AdventurerLog';
import { Cursor } from './components/Cursor';
import { motion, useScroll, useTransform } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  
  // We can tie a subtle background darkening to the scroll
  // so the glowing CV text stands out more later in the page
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 0.7]);

  return (
    <>
      <Cursor />
      
      {/* 3D WebGL Canvas Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas 
          camera={{ position: [0, 5, 20], fov: 60 }} 
          gl={{ antialias: true, alpha: false }}
        >
          <World />
          <CameraRig />
        </Canvas>
      </div>

      {/* Dynamic Background Darkening Overlay */}
      <motion.div 
        className="fixed inset-0 z-10 pointer-events-none bg-black"
        style={{ opacity: bgOpacity }}
      />

      {/* UI Overlay - Scroll Container */}
      <div className="scroll-container relative z-20 w-full pointer-events-auto">
        <AdventurerLog />
      </div>
    </>
  );
}

export default App;
