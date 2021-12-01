import React, {useEffect, useRef, useState} from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';


const BoxMesh = ({position, args, color}) => {
    const meshRef = useRef(null);
    const [active, setActive] = useState(false);
    // const composer = new EffectComposer(renderer);
    // const glitchPass = new UnrealBloomPass(scene, camera);
    // composer.addPass( glitchPass );



    const onMeshClick = () => {

    }
    useFrame(() => {
        meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01;
    });

    return(
        <mesh
            onPointerEnter={(e) =>setActive(true)}
            onPointerLeave={(e) =>setActive(false)}
            scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]} 
            castShadow position={position} ref={meshRef}>
            <boxBufferGeometry attach='geometry' args={args}/>
            <meshStandardMaterial attach='material' color={color}/>
        </mesh>
    );
}

function Portofolio (){
    return(
        <Canvas shadowMap colorManagement camera={{position:[0, 1, 10]}} style={{ width: window.innerWidth, height: window.innerHeight - 70}}>
            <color attach="background" args={"navy"} />
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
                    <planeBufferGeometry attach="geometry" args={[100, 100]}/>
                    <shadowMaterial attach="material"/>
                </mesh>
            </group>
            <BoxMesh position={[0, 1, 0]} args={[3, 2, 1]} color="green"/>
            <BoxMesh position={[-10, 1, -5]} args={[1, 2, 3]} color = "pink"/>
            <BoxMesh position={[10, 1, -5]} args={[3, 1, 2]} color="pink"/>
        </Canvas>
    );
};

export default Portofolio;