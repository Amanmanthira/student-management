import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const My3DModel = () => {
  const { scene } = useGLTF('/ImageToStl.com_uploads_files_3182670_studydesk.glb'); // Adjust the path to your 3D model file

  return (
    <Canvas style={{ height: 'auto', width: '100%' }}>
      <ambientLight intensity={0.15} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      <primitive object={scene} />
      <OrbitControls />
    </Canvas>
  );
};

export default My3DModel;
