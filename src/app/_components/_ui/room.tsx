import { RoundedBoxGeometry } from "@react-three/drei";

const Room = () => {
  const roomSize = 8;
  const wallHeight = 3.6;
  const wallThickness = 0.1;

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <RoundedBoxGeometry args={[roomSize, 0.2, roomSize]} />
        <meshStandardMaterial color="#EFE9E3" />
      </mesh>

      {/* Walls */}
      {/* Back wall */}
      <mesh
        position={[0, wallHeight / 2, -roomSize / 2]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[roomSize, wallHeight, wallThickness]} />
        <meshStandardMaterial color="#F8F8F8" />
      </mesh>

      {/* Left wall */}
      <mesh
        position={[-roomSize / 2, wallHeight / 2, 0]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[wallThickness, wallHeight, roomSize]} />
        <meshStandardMaterial color="#F8F8F8" />
      </mesh>
    </group>
  );
};

export default Room;
