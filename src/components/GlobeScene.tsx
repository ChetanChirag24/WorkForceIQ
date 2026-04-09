import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function GlobePoints() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const radius = 1.5;

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      pos[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      pos[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const isCyan = Math.random() > 0.6;
      col[i * 3] = isCyan ? 0.1 : 0.4;
      col[i * 3 + 1] = isCyan ? 0.85 : 0.3;
      col[i * 3 + 2] = isCyan ? 0.9 : 0.9;
    }

    return { positions: pos, colors: col };
  }, []);

  const arcsData = useMemo(() => {
    const arcs: THREE.BufferGeometry[] = [];
    const arcCount = 12;

    for (let a = 0; a < arcCount; a++) {
      const phi1 = Math.random() * Math.PI;
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = Math.random() * Math.PI;
      const theta2 = Math.random() * Math.PI * 2;

      const start = new THREE.Vector3(
        1.5 * Math.sin(phi1) * Math.cos(theta1),
        1.5 * Math.cos(phi1),
        1.5 * Math.sin(phi1) * Math.sin(theta1)
      );
      const end = new THREE.Vector3(
        1.5 * Math.sin(phi2) * Math.cos(theta2),
        1.5 * Math.cos(phi2),
        1.5 * Math.sin(phi2) * Math.sin(theta2)
      );

      const mid = start.clone().add(end).multiplyScalar(0.5);
      mid.normalize().multiplyScalar(2.2);

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const points = curve.getPoints(40);
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      arcs.push(geometry);
    }
    return arcs;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere */}
      <Sphere args={[1.48, 32, 32]}>
        <meshBasicMaterial wireframe color="hsl(222, 25%, 18%)" transparent opacity={0.3} />
      </Sphere>

      {/* Data points */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.015} vertexColors transparent opacity={0.8} sizeAttenuation />
      </points>

      {/* Connection arcs */}
      {arcsData.map((geo, i) => (
        <primitive key={i} object={new THREE.Line(geo, new THREE.LineBasicMaterial({ color: "hsl(187, 92%, 52%)", transparent: true, opacity: 0.25 }))} />
      ))}

      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.6, 1.65, 64]} />
        <meshBasicMaterial color="hsl(187, 92%, 52%)" transparent opacity={0.15} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.008} color="hsl(187, 92%, 52%)" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

interface GlobeSceneProps {
  className?: string;
  interactive?: boolean;
}

const GlobeScene = ({ className = "", interactive = true }: GlobeSceneProps) => {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="hsl(187, 92%, 52%)" />
        <GlobePoints />
        <FloatingParticles />
        {interactive && <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />}
      </Canvas>
    </div>
  );
};

export default GlobeScene;
