"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Ring({ position, rotation, color }: { position: [number, number, number]; rotation: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });

  useFrame(({ pointer }, delta) => {
    if (!meshRef.current) return;
    mouseTarget.current.x += (pointer.x - mouseTarget.current.x) * 0.03;
    mouseTarget.current.y += (pointer.y - mouseTarget.current.y) * 0.03;
    meshRef.current.rotation.x += (mouseTarget.current.y * 0.3 - meshRef.current.rotation.x) * 0.01;
    meshRef.current.rotation.y += (mouseTarget.current.x * 0.3 - meshRef.current.rotation.y) * 0.01;
    meshRef.current.rotation.z += delta * 0.1;
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <torusGeometry args={[1.2, 0.18, 64, 128]} />
      <meshStandardMaterial
        color={color}
        metalness={0.25}
        roughness={0.15}
        emissive={color}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee" />
      <pointLight position={[-5, -3, -3]} intensity={1.2} color="#f0c040" />
      <pointLight position={[0, -5, 0]} intensity={0.8} color="#06b6d4" />
      <directionalLight position={[0, 10, 0]} intensity={0.4} />
    </>
  );
}

export default function InterlockingRings() {
  return (
    <div className="w-full h-[500px] -mb-20 relative z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Lighting />
          {/* left ring - cyan */}
          <Ring position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 6]} color="#06b6d4" />
          {/* right ring - gold */}
          <Ring position={[1.2, 0, 0]} rotation={[0, 0, -Math.PI / 6]} color="#f0c040" />
          {/* center ring - bright cyan, slightly forward */}
          <Ring position={[0, 0.15, 0.3]} rotation={[Math.PI / 8, 0, 0]} color="#22d3ee" />
        </Suspense>
      </Canvas>
    </div>
  );
}
