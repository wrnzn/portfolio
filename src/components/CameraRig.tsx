import { useFrame } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import * as THREE from 'three';

export function CameraRig() {
  const { scrollYProgress } = useScroll();

  // Define a majestic flight path through the Isekai world
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 5, 20),   // Start: High up, looking down
    new THREE.Vector3(0, 2, 5),    // Checkpoint 1: closer to ground
    new THREE.Vector3(10, 2, -10), // Checkpoint 2: banking right
    new THREE.Vector3(0, 5, -30),  // Checkpoint 3: flying over
    new THREE.Vector3(-10, 8, -50) // Checkpoint 4: ascending into the sunset
  ]);

  useFrame((state) => {
    // scrollYProgress.get() returns a value between 0 and 1
    const progress = scrollYProgress.get();
    
    // Get the position on the curve based on scroll progress
    const position = curve.getPointAt(progress);
    
    // Get the tangent (direction) to look ahead
    const tangent = curve.getTangentAt(progress).normalize();
    const lookAtPos = position.clone().add(tangent.multiplyScalar(5));

    // Smoothly interpolate the camera position and rotation for cinematic feel
    state.camera.position.lerp(position, 0.1);
    
    // Create a target quaternion to look along the path
    const targetQuaternion = new THREE.Quaternion().setFromRotationMatrix(
      new THREE.Matrix4().lookAt(state.camera.position, lookAtPos, state.camera.up)
    );
    
    state.camera.quaternion.slerp(targetQuaternion, 0.1);
  });

  return null;
}
