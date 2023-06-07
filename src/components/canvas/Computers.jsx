import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf", true);

  const objectRef = useRef();
  const rotationSpeed = isMobile ? 0.005 : 0.01;
  const maxRotation = Math.PI / 2;

  const [shouldReverseRotation, setShouldReverseRotation] = useState(false);

  useEffect(() => {
    if (objectRef.current) {
      objectRef.current.rotation.y = 0; // Reset initial rotation
    }
  }, []);

  useFrame((state, delta) => {
    if (objectRef.current) {
      if (!shouldReverseRotation) {
        objectRef.current.rotation.y += rotationSpeed * delta; // Rotate forward
        if (objectRef.current.rotation.y >= maxRotation) {
          setShouldReverseRotation(true); // Enable reverse rotation
        }
      } else {
        objectRef.current.rotation.y -= rotationSpeed * delta; // Rotate backward
        if (objectRef.current.rotation.y <= -maxRotation) {
          setShouldReverseRotation(false); // Disable reverse rotation
          objectRef.current.rotation.y = 0; // Reset rotation to the original position
        }
      }
    }
  });

  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 20, 20]}
        angle={0.12}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 2 : 4}
        position={isMobile ? [0, -3, -2.2] : [0, -1, -9]}
        rotation={[-0.01, -0.2, -0.1]}
        ref={objectRef}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const getMaxAzimuthAngle = (rotationY) => {
    if (rotationY >= maxRotation) {
      return Math.PI / 2 - rotationY;
    }
    return Math.PI / 2;
  };

  const getMinAzimuthAngle = (rotationY) => {
    if (rotationY <= -maxRotation) {
      return -Math.PI / 2 - rotationY;
    }
    return Math.PI / 6;
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 25, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 0.3}
          minPolarAngle={Math.PI / 20}
          minAzimuthAngle={getMinAzimuthAngle}
          maxAzimuthAngle={getMaxAzimuthAngle}
          enableRotate={true}
          autoRotate={true}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
