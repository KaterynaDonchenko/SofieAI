'use client'

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import { Mesh } from 'three';
import { Reflector } from "three/examples/jsm/Addons.js";
import { Text } from "@react-three/drei";
import { gsap } from "gsap/gsap-core";
import { MeshNormalMaterial } from "three";
import { useGSAP } from "@gsap/react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

function GroundMirror({ cylinderRef, cylinderRadius }) {
  const { scene } = useThree();

  useEffect(() => {
    const geometry = new THREE.CircleGeometry(cylinderRadius, 100);
    const mirror = new Reflector(geometry, {
      clipBias: 0.003,
      textureWidth: window.innerWidth * window.devicePixelRatio,
      textureHeight: window.innerHeight * window.devicePixelRatio,
      color: new THREE.Color(0xb5b5b5),
    });

    mirror.rotation.x = Math.PI / 2;
    mirror.position.y = -0.11;

    scene.add(mirror);
    cylinderRef.current?.add(mirror);

  }, [scene, cylinderRef, cylinderRadius]); 

  return null;
}


function CylinderAnimation() {

  const cylinderRefs = [
    useRef<Mesh>(null),
    useRef<Mesh>(null),
    useRef<Mesh>(null)
  ];


  useFrame(({clock}) => {
    const time = clock.getElapsedTime();

    cylinderRefs.forEach((cylinder) => {
      if (cylinder.current) {
        const positionValue = Math.sin(time) * .2;
        const rotationValue = Math.sin(time) * .1;
        cylinder.current.position.x = positionValue;
        cylinder.current.rotation.x = rotationValue;
      }
    })
  })

  const textRefs = useRef([]);
  const animationWrapper = useRef()

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el)
    }
  }
  const materialInstance = useMemo(
    () => new MeshNormalMaterial({ transparent: true, opacity: 0 }),
    []
  );
  useGSAP(() => {
    const tl = gsap.timeline({repeat: -1, smoothChildTiming: true });

    if (!textRefs.current && !animationWrapper.current) return;

    const ELEMENT_DURATION = 4; 
    const FADE_IN_DURATION = 0.3; 
    const FADE_OUT_DURATION = 0.09; 
    const STAGGER_DELAY = 3;  

      textRefs.current.forEach((text, i) => {
        const startTime = i * STAGGER_DELAY;

        tl.to(text.material, {
          opacity: 1,
          duration: FADE_IN_DURATION,
        }, startTime);
  
        tl.fromTo(
          text.position,
          { y: -1 },
          {  keyframes: [
            { y: 0, duration: 1.5 },        
            { y: 0, duration: 1, at: 1.5 }, 
            { y: 0.5, duration: 1.5, at: 2.5 }  
          ],}, startTime);
  
        tl.fromTo(
          text.rotation,
          { x: 90 * (Math.PI / 180) },
          { keyframes: [
            { x: 0,  duration: 1.5 },        
            { x: 0,  duration: 1, at: 1.5 }, 
            { x: -90 * (Math.PI / 180), duration: 1.5, at: 2.5 }  
          ] }, startTime);

        tl.to(text.material, {
          opacity: 0,
          duration: .1,
          ease: "power2.inOut"
        }, startTime + ELEMENT_DURATION - FADE_OUT_DURATION);
      }); 
    
      const totalDuration = (textRefs.current.length - 1) * STAGGER_DELAY + ELEMENT_DURATION
      tl.totalDuration(totalDuration);
  }, []);

  console.log('1')

  const textConfig = useMemo(() => ({
          font: 'fonts/Inter_18pt-Regular.ttf',
          fontSize: 0.17, 
          fontWeight: 600,
          maxWidth: 7, 
          anchorX: 'center',
          anchorY: 'middle',
          color: 'white'  
  }), []);

  return (
    <>
       <group position={[-3, -1, 0.5]}>
        <mesh ref={cylinderRefs[0]} rotation={[0, 10 * (Math.PI / 180), 140 * (Math.PI / 180)]}>
          <cylinderGeometry args={[1.8, 1.8, .2, 100]}/>
          <meshPhysicalMaterial color="blue" metalness={.3} roughness={0.2} attach='material-0'/>
            <meshPhysicalMaterial color="blue" metalness={.3} roughness={0.2} attach='material-2'/>
        </mesh>
        <mesh >
          <GroundMirror cylinderRef={cylinderRefs[0]} cylinderRadius={1.75}/>
        </mesh>
      </group>
      <group position={[-3.6, .7, -1.2]}>
        <mesh ref={cylinderRefs[1]} position={[0, 2, 0]} rotation={[0, -30 * (Math.PI / 180), 50 * (Math.PI / 180)]}>
            <cylinderGeometry args={[1.4, 1.4, .2, 32]} />
            <meshPhysicalMaterial color="blue" metalness={.3} roughness={0.2} attach='material-0'/>
            <meshPhysicalMaterial color="blue" metalness={.3} roughness={0.2} attach='material-2'/>
        </mesh>
        <mesh >
          <GroundMirror cylinderRef={cylinderRefs[1]} cylinderRadius={1.35}/>
        </mesh>
      </group>
      <group position={[6, .2, -.5]}>
        <mesh ref={cylinderRefs[2]} rotation={[0, 5 * (Math.PI / 180), -100 * (Math.PI / 180)]}>
          <cylinderGeometry args={[1.4, 1.4, 0.2, 100]} />
          <meshNormalMaterial  attach='material-0'/>
            <meshPhysicalMaterial color="#00bc10" metalness={.3} roughness={0.2} attach='material-2'/>
        </mesh>
        <mesh >
          <GroundMirror cylinderRef={cylinderRefs[2]} cylinderRadius={1.35}/>
        </mesh>
        </group> 
         <mesh position={[7, 1.5, -2]}>
        <Text
          position={[-9.5, 0.4, 2]} 
          fontSize={1} 
          color="white" 
          maxWidth={10} 
          anchorX="center" 
          anchorY="middle" 
          
        >
          Power
        </Text>
        <mesh ref={animationWrapper} position={[0, 0.4, 0]}>
          <Text
            ref={addToRefs}
            position={[-4.5, -0.5, 2]} 
            fontSize={1} 
            maxWidth={10} 
            anchorX="center" 
            anchorY="middle" 
            material={materialInstance}
          >
            Enterprise AI 
          </Text>
          <Text
            ref={addToRefs}
            position={[-4.5, -1, 2]} 
            fontSize={1} 
            color="white" 
            maxWidth={10} 
            anchorX="center" 
            anchorY="middle" 
            material={materialInstance}
          >
            Productive AI 
          </Text>
          <Text
            ref={addToRefs}
            position={[-4.5, -2, 2]} 
            fontSize={1} 
            color="white" 
            maxWidth={10} 
            anchorX="center" 
            anchorY="middle" 
            material={materialInstance}
          >
            Generative AI
          </Text>
        </mesh>
        <Text
          position={[-5.5, -1, 2]} 
          fontSize={1} 
          color="white" 
          maxWidth={10} 
          anchorX="center" 
          anchorY="middle" 
        >
          With Your Data
        </Text>
    </mesh> 
      <group>
        <Text 
          position={[1, -0.5, 1.6]}
          {...textConfig}
        >
          Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI
        </Text>
        
      </group>
    </>
  )
}

export default function Cylinders() {
  console.log('2')

    return (
        <>
          <div className="absolute right-[-700px]">
              <ErrorBoundary fallback={<span>Something went wrong</span>}>
                  <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }} 
                  style={{width: "1600px", height: "600px" }} 
                  shadows
                  onCreated={({ gl }) => {
                    gl.domElement.addEventListener('webglcontextlost', (event) => {
                      event.preventDefault(); 
                      console.error(event);

                    }, false);
                  }}
                  gl={{preserveDrawingBuffer:true}}>
                    <ambientLight intensity={7} color='white'/>
          
                    <pointLight position={[-3, 5, 3]} intensity={1000} color='blue'/>
                    <pointLight position={[-5, 5, 3]} intensity={10} color='#00ff00'/>

                    <spotLight position={[3, -3, 1]} intensity={800} angle={0.7} penumbra={1} castShadow color='#f800cb'/>
                    <spotLight position={[-9, 8, 0]} intensity={5000} angle={0.2} penumbra={.5} castShadow color='#2600ff'/>
                    <CylinderAnimation/>
                  </Canvas>
              </ErrorBoundary>
          </div>
        </>
      );
}
