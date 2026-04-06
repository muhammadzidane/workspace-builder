import { RoundedBoxGeometry } from "@react-three/drei";

const Room = () => {
  const roomSize = 6;
  const wallHeight = 3;
  const wallThickness = 0.1;

  return (
    <group>
      {/* Floor */}
      <mesh position={[0, -0.1, 0]} receiveShadow>
        <RoundedBoxGeometry args={[roomSize, 0.2, roomSize]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Walls */}
      {/* Back wall */}
      <mesh position={[0, wallHeight / 2, -roomSize / 2]} receiveShadow>
        <boxGeometry args={[roomSize, wallHeight, wallThickness]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Front wall */}
      <mesh position={[0, wallHeight / 2, roomSize / 2]} receiveShadow>
        <boxGeometry args={[roomSize, wallHeight, wallThickness]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Left wall */}
      <mesh position={[-roomSize / 2, wallHeight / 2, 0]} receiveShadow>
        <boxGeometry args={[wallThickness, wallHeight, roomSize]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Right wall */}
      <mesh position={[roomSize / 2, wallHeight / 2, 0]} receiveShadow>
        <boxGeometry args={[wallThickness, wallHeight, roomSize]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Ceiling */}
      <mesh position={[0, wallHeight + 0.1, 0]} receiveShadow>
        <RoundedBoxGeometry args={[roomSize, 0.2, roomSize]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </group>
  );
};

export default Room;
