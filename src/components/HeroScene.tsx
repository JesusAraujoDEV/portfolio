"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function Wireframe() {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.12;
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = Math.sin(t * 0.5) * 0.15;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color="#e0433d" wireframe />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      className="!absolute inset-0"
    >
      <Wireframe />
    </Canvas>
  );
}
