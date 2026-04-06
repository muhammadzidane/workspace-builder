"use client";

import { useGLTF } from "@react-three/drei";

import DraggableModel from "./draggable-model";

type ModelProps = {
  modelPath: string;
  position?: [number, number, number];
  scale?: number;
  setDragging?: (value: boolean) => void;
};

const Model = ({ modelPath, position, scale = 1, setDragging }: ModelProps) => {
  const { scene } = useGLTF(modelPath);

  return (
    <DraggableModel initialPosition={position} setDragging={setDragging}>
      <primitive object={scene} scale={scale} />
    </DraggableModel>
  );
};

export default Model;
