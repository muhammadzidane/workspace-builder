"use client";

import { useGLTF } from "@react-three/drei";

import DraggableModel from "./draggable-model";

type ChairProps = {
  setDragging?: (value: boolean) => void;
};

const Chair = ({ setDragging }: ChairProps) => {
  const { scene } = useGLTF("/models/chair-1.glb");

  return (
    <DraggableModel setDragging={setDragging}>
      <primitive object={scene} scale={1.2} />
    </DraggableModel>
  );
};

export default Chair;

useGLTF.preload("/models/chair-1.glb");
