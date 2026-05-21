import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { Html, Environment, Sparkles, Float, Lightformer, ContactShadows } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, Noise } from '@react-three/postprocessing';

export function World() {
  const { camera } = useThree();
  const [scrollPercent, setScrollPercent] = useState(0);

  // Massive Background Shapes
  const shape1Ref = useRef<THREE.Mesh>(null);
  const shape2Ref = useRef<THREE.Mesh>(null);
  const shape3Ref = useRef<THREE.Mesh>(null);
  const shape4Ref = useRef<THREE.Mesh>(null);
  const shape5Ref = useRef<THREE.Mesh>(null);

  // Track window scroll for cinematic camera movement
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const percent = maxScroll > 0 ? scrollY / maxScroll : 0;
      setScrollPercent(percent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    // Slowly rotate the massive shapes
    if (shape1Ref.current) {
      shape1Ref.current.rotation.y = time * 0.1;
      shape1Ref.current.rotation.x = Math.sin(time * 0.2) * 0.1;
    }
    if (shape2Ref.current) {
      shape2Ref.current.rotation.y = -time * 0.15;
      shape2Ref.current.rotation.z = time * 0.1;
    }
    if (shape3Ref.current) {
      shape3Ref.current.rotation.x = time * 0.1;
      shape3Ref.current.rotation.y = Math.cos(time * 0.1) * 0.2;
    }
    if (shape4Ref.current) {
      shape4Ref.current.rotation.y = time * 0.2;
      shape4Ref.current.rotation.z = Math.sin(time * 0.1) * 0.2;
    }
    if (shape5Ref.current) {
      shape5Ref.current.rotation.x = -time * 0.1;
      shape5Ref.current.rotation.y = time * 0.05;
    }

    // Smoothly interpolate camera position based on scroll percent
    // Start at Z = 10, fly forward to Z = -50 (through the shapes)
    const targetZ = THREE.MathUtils.lerp(10, -50, scrollPercent);
    // Move slightly down as well
    const targetY = THREE.MathUtils.lerp(2, -5, scrollPercent);
    
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
  });

  return (
    <>
      <color attach="background" args={['#0a0510']} />

      {/* Cinematic Studio Lighting */}
      <ambientLight intensity={0.2} color="#ffffff" />
      <directionalLight 
        position={[10, 20, 10]} 
        intensity={2} 
        color="#ffd700" 
      />
      <spotLight 
        position={[-10, 10, -10]} 
        angle={0.5} 
        penumbra={1} 
        intensity={4} 
        color="#8a2be2" 
      />
      <spotLight 
        position={[0, -10, -20]} 
        angle={0.8} 
        penumbra={1} 
        intensity={3} 
        color="#ffaa00" 
      />
      {/* Additional spotlight deep in the scene for the end of the page */}
      <spotLight 
        position={[0, 10, -40]} 
        angle={1.2} 
        penumbra={1} 
        intensity={5} 
        color="#ffd700" 
      />

      {/* Environment for Premium Glass Reflections */}
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 4, -0.3, 0]}>
          <Lightformer form="ring" intensity={5} color="#ffd700" scale={20} position={[-20, 20, -20]} target={[0, 0, 0]} />
          <Lightformer form="rect" intensity={3} color="#8a2be2" scale={20} position={[20, -20, 20]} target={[0, 0, 0]} />
          {/* Deep Environment Light for Grimoire Affinities section */}
          <Lightformer form="ring" intensity={8} color="#8a2be2" scale={40} position={[0, 0, -60]} target={[0, 0, -40]} />
        </group>
      </Environment>

      {/* Hidden Marker for Unit Tests */}
      <Html style={{ display: 'none' }}>
        <div className="fantasy-crystal-marker" />
      </Html>

      {/* --- Massive Scene Composition --- */}

      {/* Shape 1: Foreground Right (Hero Section) */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={2} floatingRange={[-0.5, 0.5]}>
        <mesh ref={shape1Ref} position={[4, 1, 0]}>
          <icosahedronGeometry args={[3, 1]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.95}
            opacity={1}
            metalness={0.2}
            roughness={0.1}
            ior={1.5}
            thickness={3}
            envMapIntensity={1.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
      </Float>

      {/* Shape 2: Midground Left (Early Quests) */}
      <Float speed={1} rotationIntensity={0.8} floatIntensity={1.5} floatingRange={[-0.3, 0.3]}>
        <mesh ref={shape2Ref} position={[-5, -1, -12]}>
          <torusKnotGeometry args={[2.5, 0.8, 128, 32]} />
          <meshPhysicalMaterial 
            color="#ffd700"
            transmission={0.9}
            opacity={1}
            metalness={0.3}
            roughness={0.15}
            ior={1.2}
            thickness={2}
            envMapIntensity={2}
            clearcoat={1}
          />
        </mesh>
      </Float>

      {/* Shape 3: Deep Background Center (Late Quests) */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={3} floatingRange={[-1, 1]}>
        <mesh ref={shape3Ref} position={[2, 3, -25]}>
          <octahedronGeometry args={[4, 2]} />
          <meshPhysicalMaterial 
            color="#8a2be2"
            transmission={0.98}
            opacity={1}
            metalness={0.1}
            roughness={0.05}
            ior={1.4}
            thickness={5}
            envMapIntensity={2}
          />
        </mesh>
      </Float>

      {/* Shape 4: Very Deep Right (Entering Grimoire) */}
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={2} floatingRange={[-0.8, 0.8]}>
        <mesh ref={shape4Ref} position={[-6, 0, -38]}>
          <icosahedronGeometry args={[5, 1]} />
          <meshPhysicalMaterial 
            color="#ffffff"
            transmission={0.95}
            opacity={1}
            metalness={0.3}
            roughness={0.1}
            ior={1.3}
            thickness={4}
            envMapIntensity={3}
          />
        </mesh>
      </Float>

      {/* Shape 5: Final Destination (Grimoire End) */}
      <Float speed={0.5} rotationIntensity={1.5} floatIntensity={4} floatingRange={[-2, 2]}>
        <mesh ref={shape5Ref} position={[0, -2, -55]}>
          <torusGeometry args={[8, 2, 32, 100]} />
          <meshPhysicalMaterial 
            color="#ffd700"
            transmission={0.8}
            opacity={1}
            metalness={0.5}
            roughness={0.2}
            ior={1.6}
            thickness={6}
            envMapIntensity={4}
            emissive="#4a0080"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Ground Reflection / Shadows */}
      <ContactShadows position={[0, -5, -5]} opacity={0.5} scale={40} blur={3} far={10} color="#000000" />
      <ContactShadows position={[0, -8, -40]} opacity={0.4} scale={60} blur={4} far={20} color="#000000" />

      {/* Massive Screen-Filling Particles extended to the end */}
      <Sparkles count={800} scale={[40, 30, 80]} size={4} speed={0.2} opacity={0.5} color="#ffd700" position={[0, 0, -30]} />
      <Sparkles count={500} scale={[40, 30, 80]} size={6} speed={0.1} opacity={0.3} color="#8a2be2" position={[0, 0, -30]} />

      {/* Premium Post-Processing */}
      <EffectComposer multisampling={4}>
        <Bloom luminanceThreshold={1.2} mipmapBlur intensity={1.0} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.1} darkness={1.0} />
      </EffectComposer>
    </>
  );
}
