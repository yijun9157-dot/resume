"use client";

import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 40;
const MAX_DIST = 2.8;
const RADIUS = 2.2;

function NeuronNet() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });

  const { positions, edges } = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = RADIUS * (0.5 + Math.random() * 0.5);
      pos.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }

    const e: [number, number][] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const neighbors: { j: number; d: number }[] = [];
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i][0] - pos[j][0];
        const dy = pos[i][1] - pos[j][1];
        const dz = pos[i][2] - pos[j][2];
        const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (d < MAX_DIST) neighbors.push({ j, d });
      }
      neighbors.sort((a, b) => a.d - b.d);
      for (let k = 0; k < Math.min(3, neighbors.length); k++) {
        e.push([i, neighbors[k].j]);
      }
    }
    return { positions: pos, edges: e };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const verts: number[] = [];
    edges.forEach(([a, b]) => {
      verts.push(...positions[a], ...positions[b]);
    });
    geo.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
    return geo;
  }, [positions, edges]);

  useFrame(({ pointer }, delta) => {
    if (!groupRef.current) return;
    mouseTarget.current.x += (pointer.x - mouseTarget.current.x) * 0.03;
    mouseTarget.current.y += (pointer.y - mouseTarget.current.y) * 0.03;
    groupRef.current.rotation.y += (mouseTarget.current.x * 0.4 - groupRef.current.rotation.y) * 0.01;
    groupRef.current.rotation.x += (-mouseTarget.current.y * 0.3 - groupRef.current.rotation.x) * 0.01;
    groupRef.current.rotation.z += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      {/* edges */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#06b6d4" transparent opacity={0.25} />
      </lineSegments>

      {/* nodes */}
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#f0c040" : "#06b6d4"}
            emissive={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#f0c040" : "#06b6d4"}
            emissiveIntensity={0.6 + Math.random() * 0.6}
            metalness={0.1}
            roughness={0.3}
          />
          {/* glow aura */}
          <mesh>
            <sphereGeometry args={[0.14, 8, 8]} />
            <meshBasicMaterial
              color={i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#f0c040" : "#06b6d4"}
              transparent
              opacity={0.12}
            />
          </mesh>
        </mesh>
      ))}
    </group>
  );
}

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={2.5} color="#22d3ee" />
      <pointLight position={[-5, -2, -3]} intensity={1.5} color="#f0c040" />
    </>
  );
}

export default function NeuralNetwork() {
  return (
    <div className="w-full h-[500px] -mb-20 relative z-10" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Lighting />
          <NeuronNet />
        </Suspense>
      </Canvas>
    </div>
  );
}
