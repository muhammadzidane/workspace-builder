"use client";

import { PropsWithChildren } from "react";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface SceneProps extends PropsWithChildren {
  dragging?: boolean;
}

const Scene = ({ children, dragging }: SceneProps) => {
  return (
    <Canvas camera={{ fov: 60, position: [5, 5, 8] }}>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />

      {/* Controls */}
      <OrbitControls
        dampingFactor={0.1}
        enabled={!dragging}
        enableDamping
        makeDefault
      />

      {children}
    </Canvas>
  );
};

export default Scene;
