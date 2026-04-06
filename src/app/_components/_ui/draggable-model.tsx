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

  const setCursor = (cursor: string) => {
    document.body.style.cursor = cursor;
  };

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    dragging.current = true;
    rotating.current = e.shiftKey || e.ctrlKey || e.altKey; // Hold Shift/Ctrl/Alt to rotate
    setDragging?.(true);

    lastPointerPosition.current = { x: pointer.x, y: pointer.y };
    setCursor("grabbing");

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    dragging.current = false;
    rotating.current = false;
    setDragging?.(false);
    setCursor("grab");

    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const onPointerMove = () => {
    if (!dragging.current || !ref.current) return;

    if (rotating.current) {
      // Rotation logic - only around Y axis to rotate on floor
      const deltaX = pointer.x - lastPointerPosition.current.x;
      const rotationSpeed = 6; // Faster floor rotation

      ref.current.rotation.y += deltaX * rotationSpeed; // Rotate around Y axis only

      lastPointerPosition.current = { x: pointer.x, y: pointer.y };
    } else {
      // Dragging logic
      raycaster.setFromCamera(pointer, camera);
      raycaster.ray.intersectPlane(plane, intersectPoint);

      ref.current.position.x = intersectPoint.x;
      ref.current.position.z = intersectPoint.z;
    }
  };

  const onPointerOver = () => setCursor("grab");
  const onPointerOut = () => setCursor("auto");
  const onPointerLeave = () => {
    dragging.current = false;
    rotating.current = false;
    setDragging?.(false);
    setCursor("auto");
  };

  const onWheel = (e: ThreeEvent<WheelEvent>) => {
    e.stopPropagation();
    if (!ref.current) return;

    const delta = e.deltaY * 0.004;
    ref.current.rotation.y += delta;
  };

  return (
    <group
      onPointerDown={onPointerDown}
      onPointerLeave={onPointerLeave}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerOver}
      onPointerUp={onPointerUp}
      onWheel={onWheel}
      position={initialPosition}
      ref={ref}
    >
      {children}
    </group>
  );
};

export default DraggableModel;
