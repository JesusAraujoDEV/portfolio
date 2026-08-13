"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

const RADIUS = 1.7;

function seamPoints(rotationOffset: number) {
  const points: [number, number, number][] = [];
  for (let i = 0; i <= 128; i++) {
    const phi = (i / 128) * Math.PI * 2;
    const theta = Math.PI / 2 + (Math.PI / 3.4) * Math.sin(2 * phi + rotationOffset);
    const x = RADIUS * Math.sin(theta) * Math.cos(phi + rotationOffset);
    const y = RADIUS * Math.cos(theta);
    const z = RADIUS * Math.sin(theta) * Math.sin(phi + rotationOffset);
    points.push([x, y, z]);
  }
  return points;
}

function Baseball() {
  const group = useRef<Group>(null);
  const seamA = useMemo(() => seamPoints(0), []);
  const seamB = useMemo(() => seamPoints(Math.PI), []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.25;
    group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS, 48, 48]} />
        <meshStandardMaterial color="#fbf8f1" roughness={0.6} />
      </mesh>
      <Line points={seamA} color="#c5342b" lineWidth={2.5} />
      <Line points={seamB} color="#c5342b" lineWidth={2.5} />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <directionalLight position={[-4, -2, -3]} intensity={0.3} color="#c5342b" />
      <Baseball />
    </Canvas>
  );
}
