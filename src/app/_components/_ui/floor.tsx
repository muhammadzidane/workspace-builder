import { RoundedBoxGeometry } from "@react-three/drei";

const Floor = () => {
  return (
    <mesh position={[0, -0.1, 0]} receiveShadow>
      <RoundedBoxGeometry args={[6, 0.2, 6]} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );
};

export default Floor;
