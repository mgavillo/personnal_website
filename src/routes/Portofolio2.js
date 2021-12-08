import React, {useEffect, useRef, useState} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { EffectComposer, Outline, Noise, Bloom} from '@react-three/postprocessing'
import { useSpring, animated } from '@react-spring/three'
import { softShadows } from "@react-three/drei"

softShadows()


function BoxMesh({position, onHover, args, color}){
    const ref = useRef(null);
    const [active, setActive] = useState(false);

    const { scale } = useSpring({ scale: active ? 1.5 : 1 })
    const onPointerOver = () => {
        onHover(ref);
        setActive(true);
    };
    const onPointerOut = () => {
        onHover(null);
        setActive(false);
    }
    useFrame(() => {ref.current.rotation.x = ref.current.rotation.y += 0.01;});

    return(
        <animated.mesh ref={ref}
            // onPointerOver={(e) => onHover(ref)} onPointerOut={(e) => onHover(null)}
            onPointerOver={onPointerOver} onPointerOut={onPointerOut}
            scale={scale} 
            castShadow position={position} >
            
            <boxBufferGeometry attach='geometry' args={args}/>
            <meshStandardMaterial attach='material' color={color} roughness={0} metalness={0.1}/>
        </animated.mesh>
    );
};

export default function Portofolio (){
    const [hovered, onHover] = useState(null)
    const selected = hovered ? [hovered] : undefined

    return(

        <Canvas shadows camera={{position:[0, 1, 10], fov:[65]}} style={{ width: window.innerWidth, height: window.innerHeight - 70}} dpr={[1, 2] }>
            <color attach="background" args={["blue"]} />
            {/* <fog attach="fog" args={["white", 0, 40]} /> */}
            <pointLight position={[-10, 0, -20]} color="red" intensity={2.5} />
            <pointLight position={[1, 10, 10]} intensity={0.5} />
            <ambientLight intensity={0.2}/>
            <directionalLight 
                castShadow
                position={[0, 10, 0]}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-right={-10}
                shadow-camera-left={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <group>
                <mesh receiveShadow rotation={[-Math.PI /2, 0, 0]} position={[0, -3, 0]}>
                    <planeBufferGeometry attach="geometry" args={[100, 10000, 500, 100]}/>
                    <shadowMaterial attach="material" opacity={0.6} color={"navyBlue"}/>
                </mesh>
                <group>
                    <BoxMesh position={[0, 1, 0]} onHover={onHover} args={[3, 2, 1]} color="green"/>
                    <BoxMesh position={[-10, 1, -5]} onHover={onHover} args={[1, 1, 3]} color = "pink"/>
                    <BoxMesh position={[10, 1, -5]} onHover={onHover} args={[3, 1, 2]} color="pink"/>
                </group>
            </group>
            <EffectComposer multisampling={10} autoClear={false}>
                <Outline blur selection={selected} visibleEdgeColor="red" edgeStrength={55} width={850}/>
                <Noise opacity={0.04} />
            </EffectComposer>
        </Canvas>
    );
};