"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingShape() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    const t = clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.15 + pointer.y * 0.2;
    mesh.current.rotation.y = t * 0.22 + pointer.x * 0.2;
    mesh.current.position.y = Math.sin(t * 0.7) * 0.15;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2.15, 1]} />
      <meshStandardMaterial color="#d5ff72" wireframe roughness={0.35} />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
      <ambientLight intensity={1.4} />
      <directionalLight position={[3, 4, 5]} intensity={2} />
      <FloatingShape />
    </Canvas>
  );
}

