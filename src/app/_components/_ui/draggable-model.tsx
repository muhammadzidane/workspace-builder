"use client";

import { useEffect, useRef } from "react";

import { ThreeEvent, useThree } from "@react-three/fiber";

import * as THREE from "three";

const isEmissiveMaterial = (mat: THREE.Material): mat is EmissiveMaterial => {
  return "emissive" in mat && mat.emissive instanceof THREE.Color;
};

type EmissiveMaterial =
  | THREE.MeshLambertMaterial
  | THREE.MeshPhongMaterial
  | THREE.MeshPhysicalMaterial
  | THREE.MeshStandardMaterial;

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

  const setHighlight = (enabled: boolean) => {
    if (!ref.current) return;

    ref.current.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const material = child.material;

        const applyHighlight = (mat: THREE.Material) => {
          if (!isEmissiveMaterial(mat)) return;

          if (enabled) {
            if (!mat.userData.originalEmissive) {
              mat.userData.originalEmissive = mat.emissive.clone();
              mat.userData.originalEmissiveIntensity =
                mat.emissiveIntensity ?? 0;
            }

            mat.emissive = new THREE.Color(0x4dd0e1);
            mat.emissiveIntensity = 0.35;
          } else if (mat.userData.originalEmissive) {
            mat.emissive.copy(mat.userData.originalEmissive);
            mat.emissiveIntensity = mat.userData.originalEmissiveIntensity ?? 0;

            delete mat.userData.originalEmissive;
            delete mat.userData.originalEmissiveIntensity;
          }
        };

        if (Array.isArray(material)) {
          material.forEach((mat) => applyHighlight(mat));
        } else {
          applyHighlight(material);
        }
      }
    });
  };

  useEffect(() => {
    return () => {
      setHighlight(false);
    };
  }, []);

  // Plane floor
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
    setHighlight(true);

    lastPointerPosition.current = { x: pointer.x, y: pointer.y };
    setCursor("grabbing");

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: ThreeEvent<PointerEvent>) => {
    dragging.current = false;
    rotating.current = false;
    setDragging?.(false);
    setHighlight(false);
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
    setHighlight(false);
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
