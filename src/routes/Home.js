import React, {useEffect, useRef} from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const Home = () => {
    const canvas3d= useRef(null);

    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/(window.innerHeight -70), 0.1, 10000 );
        var renderer = new THREE.WebGLRenderer();
        
        renderer.setSize( window.innerWidth, window.innerHeight - 70 );
        
        canvas3d.current.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );

        var particleCount = 1800,
        particles = new THREE.Geometry(),
        pMaterial = new THREE.PointsMaterial({
            transparent: true,
            color: 0x880000,
            sizeAttenuation: true, 
        });

        // now create the individual particles
        for (var p = 0; p < particleCount; p++) {
          // create a particle with random
          // position values, -250 -> 250
            var pX = Math.random() * 500 - 250;
            var pY = Math.random() * 500 - 250;
            var pZ = Math.random() * 500 - 250;
            var particle = new THREE.Vector3(pX, pY, pZ);

          // add it to the geometry
          particles.vertices.push(particle);
        }

        // create the particle system
        var particleSystem = new THREE.Points(particles, pMaterial);
        
        
        scene.add(particleSystem);
        // var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        // var cube = new THREE.Mesh( geometry, material );
    
        // scene.add( cube );
        camera.position.z = 5;
        renderer.render(scene, camera);
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        }
        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight - 70;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight - 70);
          }
      
          window.addEventListener("resize", onWindowResize, false);
        // animate();
        return () => {canvas3d.current && canvas3d.current.removeChild( renderer.domElement)};
    }, [])

    return(
    // <Canvas style={{backgroundColor:"blue"}}>
    //     <ambientLight />
    //     <pointLight position={[10, 10, 10]} />
    //     <mesh>
    //         <sphereBufferGeometry />
    //         <meshStandardMaterial color="hotpink" />
    //     </mesh>
    //   </Canvas>
        <div id="3d" ref={canvas3d} style={{backgorundColor:"blue"}}></div>
    );
}

export default Home;