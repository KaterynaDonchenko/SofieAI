'use client'

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Canvas, useThree, extend, } from "@react-three/fiber";
import { useRef, useEffect, useState } from "react";
import { Mesh } from 'three';
import { Reflector } from "three/examples/jsm/Addons.js";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Text } from 'troika-three-text'

extend({ Text });

const TroikaText = ({text, 
                     fontSize, 
                     fontWeight, 
                     maxWidth, 
                     anchorX, 
                     anchorY, 
                     color,
                     fillOpacity, 
                     position,
                     refCallback 
                    }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.text = text;
      textRef.current.fontSize = fontSize;
      textRef.current.fontWeight = fontWeight;
      textRef.current.position.set(position[0], position[1], position[2]);
      textRef.current.maxWidth = maxWidth;
      textRef.current.anchorX = anchorX;
      textRef.current.anchorY = anchorY;
      textRef.current.color = color;
      textRef.current.fillOpacity = fillOpacity
      textRef.current.sync(); 

      if (refCallback) refCallback(textRef.current);
    }
  }, []);

  return (
    <mesh>
        <text ref={textRef} />
    </mesh>
  )
};


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

    return () => {
      scene.remove(mirror);
      cylinderRef.current?.remove(mirror);

      geometry.dispose();
      if (mirror.material) {
        mirror.material.dispose();
      }
    }

  }, [scene, cylinderRef, cylinderRadius]); 

  return null;
}

function CylinderAnimation() {

  useEffect(() => {
    const originalWarn = console.warn;
    console.warn = (...args: any[]) => {
      if (typeof args[0] === 'string' && !args[0].includes('THREE.Color: Alpha component')) {
        originalWarn.apply(console, args);
      }
    };

    return () => {
      console.warn = originalWarn;
    };
  }, []); 

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
  const [isReady, setIsReady] = useState(false);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
      setIsReady(true);
    }
  }
  
  useGSAP(() => {
    if (!isReady || textRefs.current.length === 0) return

    const tl = gsap.timeline({repeat: -1, smoothChildTiming: true });

    const ELEMENT_DURATION = 3.67; 
    const FADE_IN_DURATION = 0.3; 
    const FADE_OUT_DURATION = 0.09; 
    const STAGGER_DELAY = 3;  

      textRefs.current.forEach((text, i) => {
        const startTime = i * STAGGER_DELAY;

        tl.to(text, {
          fillOpacity: 1,
          duration: FADE_IN_DURATION,
        }, startTime);
  
        tl.fromTo(
          text.position,
          { y: -1 },
          {  keyframes: [
            { y: 0, duration: 1.5 },        
            { y: 0, duration: 1  }, 
            { y: 0.5, duration: 1.5 }  
          ],}, startTime);

        tl.fromTo(
          text.rotation,
          { x: 90 * (Math.PI / 180) },
          { keyframes: [
            { x: 0,  duration: 1.5 },        
            { x: 0,  duration: 1 }, 
            { x: -90 * (Math.PI / 180), duration: 1.5 }  
          ] }, startTime);

          tl.fromTo(
            text,
            { },
            { keyframes: [
              { color: 'rgb(0, 174, 255)',  duration: 1 },        
              { color: 'rgb(251, 85, 243)',  duration: 1 }, 
              { color: 'rgb(8, 0, 255)', duration: 1.5 }  
            ] }, startTime);
        tl.to(text, {
          fillOpacity: 0,
          duration: .1,
          ease: "power2.inOut"
        }, startTime + ELEMENT_DURATION - FADE_OUT_DURATION);
      }); 
    
      const totalDuration = (textRefs.current.length - 1) * STAGGER_DELAY + ELEMENT_DURATION
      tl.totalDuration(totalDuration);
  }, [isReady]);


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
          <TroikaText 
            text='Power'
            fontSize={1}
            fontWeight={400}
            maxWidth={10}
            anchorX='center'
            anchorY='middle'
            color='white'
            position={[-9.5, 0.4, 2]}/>
        <mesh position={[0, 0.4, 0]}>
          <TroikaText 
              text='Enterprise AI'
              fontSize={1}
              fontWeight={400}
              maxWidth={10}
              anchorX='center'
              anchorY='middle'
              fillOpacity={0}
              isMaterial={true}
              refCallback={addToRefs}
              position={[-4.5, -0.5, 2]}/>
          <TroikaText 
              text='Productive AI'
              fontSize={1}
              fontWeight={400}
              maxWidth={10}
              anchorX='center'
              anchorY='middle'
              fillOpacity={0}
              isMaterial={true}
              refCallback={addToRefs}
              position={[-4.5, -0.5, 2]}/>
          <TroikaText 
              text='Generative AI'
              fontSize={1}
              fontWeight={400}
              maxWidth={10}
              anchorX='center'
              anchorY='middle'
              fillOpacity={0}
              isMaterial={true}
              refCallback={addToRefs}
              position={[-4.5, -0.5, 2]}/>
          </mesh>
          <TroikaText 
              text='With Your Data'
              fontSize={1}
              fontWeight={400}
              maxWidth={10}
              anchorX='center'
              anchorY='middle'
              position={[-5.5, -1, 2]}/>
      </mesh> 
      <group>
        <TroikaText 
          text='Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI'
          fontSize={0.17}
          fontWeight={600}
          maxWidth={7}
          anchorX='center'
          anchorY='middle'
          color='white'
          position={[1, -0.5, 1.6]}/>
      </group>  
    </>
  )
}


export default function Cylinders() {

    return (
        <>
          <div className="absolute right-[-700px]">
              <ErrorBoundary fallback={<span>Something went wrong</span>}>
                  <Canvas
                  camera={{ position: [0, 0, 5], fov: 75 }} 
                  style={{width: "1600px", height: "600px" }} 
                  shadows
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
