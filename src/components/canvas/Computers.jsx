import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={2.2} groundColor="black "/>
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={3} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [-4,-4,-1.7] : [-3.0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const mediaQuery1 = window.matchMedia("(max-width: 768px)");

    setIsMobile(mediaQuery.matches);
    setIsMobile(mediaQuery1.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    const handleMediaQuery1Change = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    mediaQuery1.addEventListener("change", handleMediaQuery1Change);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange,handleMediaQuery1Change);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile = {isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;