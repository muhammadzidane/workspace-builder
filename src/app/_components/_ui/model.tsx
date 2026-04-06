"use client";

import { useMemo } from "react";

import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

import DraggableModel from "./draggable-model";

interface ModelProps {
  position?: [number, number, number];
  scale?: number;
  setDragging?: (value: boolean) => void;
  url: string;
}
const Model = ({ position, scale = 1, setDragging, url }: ModelProps) => {
  const { scene } = useGLTF(url);

  const clonedScene = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);

    const box = new THREE.Box3().setFromObject(clone);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();

    box.getSize(size);
    box.getCenter(center);

    // Move model so its base sits on y=0
    clone.position.y -= box.min.y;

    clone.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (Array.isArray(child.material)) {
          child.material = child.material.map((mat) => mat.clone());
        } else if (child.material) {
          child.material = child.material.clone();
        }
      }
    });

    return clone;
  }, [scene]);

  return (
    <DraggableModel initialPosition={position} setDragging={setDragging}>
      <primitive object={clonedScene} scale={scale} />
    </DraggableModel>
  );
};

export default Model;
