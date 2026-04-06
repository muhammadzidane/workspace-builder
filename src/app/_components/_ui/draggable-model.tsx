"use client";

import { useRef } from "react";

import { ThreeEvent, useThree } from "@react-three/fiber";

import * as THREE from "three";

type Props = {
  children: React.ReactNode;
  initialPosition?: [number, number, number];
  setDragging?: (v: boolean) => void;
};

const DraggableModel = ({ children, initialPosition, setDragging }: Props) => {
  const ref = useRef<THREE.Group>(null);
  const dragging = useRef(false);
  const rotating = useRef(false);
  const lastPointerPosition = useRef({ x: 0, y: 0 });

  const { camera, pointer, raycaster } = useThree();

  // Plane untuk drag (lantai)
  const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const intersectPoint = new THREE.Vector3();

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragging.current = true;
    rotating.current = e.shiftKey; // Hold Shift to rotate
    setDragging?.(true);

    lastPointerPosition.current = { x: pointer.x, y: pointer.y };

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    dragging.current = false;
    rotating.current = false;
    setDragging?.(false);

    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onPointerMove = () => {
    if (!dragging.current || !ref.current) return;

    if (rotating.current) {
      // Rotation logic
      const deltaX = pointer.x - lastPointerPosition.current.x;
      const deltaY = pointer.y - lastPointerPosition.current.y;

      ref.current.rotation.y += deltaX * 2; // Rotate around Y axis
      ref.current.rotation.x += deltaY * 2; // Rotate around X axis

      lastPointerPosition.current = { x: pointer.x, y: pointer.y };
    } else {
      // Dragging logic
      raycaster.setFromCamera(pointer, camera);
      raycaster.ray.intersectPlane(plane, intersectPoint);

      ref.current.position.x = intersectPoint.x;
      ref.current.position.z = intersectPoint.z;
    }
  };

  return (
    <group
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      position={initialPosition}
      ref={ref}
    >
      {children}
    </group>
  );
};

export default DraggableModel;
