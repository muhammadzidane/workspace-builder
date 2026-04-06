"use client";

import { useRef } from "react";

import { ThreeEvent, useThree } from "@react-three/fiber";

import * as THREE from "three";

type Props = {
  children: React.ReactNode;
  setDragging?: (v: boolean) => void;
};

const DraggableModel = ({ children, setDragging }: Props) => {
  const ref = useRef<THREE.Group>(null);
  const dragging = useRef(false);

  const { camera, pointer, raycaster } = useThree();

  // Plane untuk drag (lantai)
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const intersectPoint = new THREE.Vector3();

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragging.current = true;
    setDragging?.(true);

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    dragging.current = false;
    setDragging?.(false);

    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onPointerMove = () => {
    if (!dragging.current || !ref.current) return;

    raycaster.setFromCamera(pointer, camera);
    raycaster.ray.intersectPlane(plane, intersectPoint);

    ref.current.position.x = intersectPoint.x;
    ref.current.position.z = intersectPoint.z;
  };

  return (
    <group
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      ref={ref}
    >
      {children}
    </group>
  );
};

export default DraggableModel;
