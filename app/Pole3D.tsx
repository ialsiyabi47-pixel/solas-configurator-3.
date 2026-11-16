
"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";

type Pole3DProps = {
  poleColor?: string;
  accentColor?: string;
  projectName?: string;
};

function PoleModel({
  poleColor,
  accentColor,
  projectName,
}: Required<Pole3DProps>) {
  return (
    <group>
      {/* Base plate */}
      <mesh position={[0, 0.07, 0]}>
        <boxGeometry args={[0.65, 0.14, 0.65]} />
        <meshStandardMaterial
          color={poleColor}
          metalness={0.65}
          roughness={0.35}
        />
      </mesh>

      {/* Straight tapered pole */}
      <mesh position={[0, 3.5, 0]}>
        <cylinderGeometry args={[0.105, 0.18, 7, 8]} />
        <meshStandardMaterial
          color={poleColor}
          metalness={0.7}
          roughness={0.32}
          flatShading
        />
      </mesh>

      {/* Mid-height decorative plate */}
      <mesh position={[0, 1.9, 0.185]}>
        <boxGeometry args={[0.28, 0.2, 0.025]} />
        <meshStandardMaterial
          color={accentColor}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Project name on plate */}
      <Text
        position={[0, 1.9, 0.202]}
        fontSize={0.035}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={0.25}
      >
        {projectName}
      </Text>

      {/* Short top mounting bracket */}
      <mesh position={[0, 7.13, 0]}>
        <cylinderGeometry args={[0.045, 0.045, 0.3, 12]} />
        <meshStandardMaterial color={poleColor} />
      </mesh>

      {/* Inclined solar luminaire */}
      <group position={[0, 7.38, 0]} rotation={[0, 0, 0.34]}>
        <mesh>
          <boxGeometry args={[2.05, 0.065, 0.52]} />
          <meshStandardMaterial
            color={poleColor}
            metalness={0.6}
            roughness={0.35}
          />
        </mesh>

        {/* Underside light surface */}
        <mesh position={[0, -0.039, 0]}>
          <boxGeometry args={[1.65, 0.012, 0.4]} />
          <meshStandardMaterial
            color="#d9e1e7"
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </mesh>
      </group>
    </group>
  );
}

export default function Pole3D({
  poleColor = "#666666",
  accentColor = "#32c8c8",
  projectName = "HAY AL WAFAA",
}: Pole3DProps) {
  return (
    <div style={{ width: "100%", height: 520 }}>
      <Canvas
        camera={{ position: [9, 5, 13], fov: 35 }}
      >
        <color attach="background" args={["#edf3f8"]} />
        <ambientLight intensity={1.8} />
        <directionalLight
          position={[5, 10, 7]}
          intensity={2.5}
        />

        <PoleModel
          poleColor={poleColor}
          accentColor={accentColor}
          projectName={projectName}
        />

        <OrbitControls
          target={[0, 3.7, 0]}
          enablePan={false}
          minDistance={7}
          maxDistance={22}
        />
      </Canvas>
    </div>
  );
}
