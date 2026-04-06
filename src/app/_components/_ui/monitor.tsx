/* eslint-disable @typescript-eslint/no-explicit-any */
const Monitor = ({ position }: any) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1.5, 1, 0.1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

export default Monitor;
