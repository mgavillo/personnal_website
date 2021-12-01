import React, {useEffect, useRef} from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass.js';
import { BokehPass } from 'three/examples/jsm/postprocessing/BokehPass.js';
import '../App.css';

const Home = () => {
    const canvas3d= useRef(null);
    var explosionAnim = null;

    // useFrame(() => {
    //   explosionAnim();
    // })

    useEffect(() => {

      const onClick = (e) =>{
        explosionAnim();
      }

        var win = {
          x : window.innerWidth,
          y : window.innerHeight
        }
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 45, win.x/(win.y -70), 0.1,100000 );
        var renderer = new THREE.WebGLRenderer( { alpha: true });

        renderer.setSize(win.x, win.y - 70 );
        
        canvas3d.current.appendChild( renderer.domElement );
        var geometry = new THREE.BoxGeometry( 5, 5, 5 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
        var cube = new THREE.Mesh( geometry, material );
        const edges = new THREE.EdgesGeometry( geometry );
        const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xfc0fc0 } ) );

        const particuleCount = 10000;
        var vertices = [];
        const vertDir = [];
        const speed = 4;
        for(let i = 0; i < particuleCount; i++){
            var x = THREE.MathUtils.randFloatSpread(1);
            var y = THREE.MathUtils.randFloatSpread(1);
            var z = THREE.MathUtils.randFloatSpread(900) - 600;
            vertices.push(x, y, z);
            x = THREE.MathUtils.randFloatSpread(Math.PI) * THREE.MathUtils.randFloatSpread(speed); 
            y = THREE.MathUtils.randFloatSpread(Math.PI) * THREE.MathUtils.randFloatSpread(speed);
            z = Math.random() * THREE.MathUtils.randFloat(1, speed);
            vertDir.push(x, y, z); 
        }

        var vertGeometry = new THREE.BufferGeometry();
        vertGeometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        const vertMaterial = new THREE.PointsMaterial( { color: 0xFFFFFF } );

        const points = new THREE.Points( vertGeometry, vertMaterial );
        scene.add(points);
        // scene.add(cube);
        scene.add(line);
        camera.position.z = 50;
        renderer.render(scene, camera);

        const composer = new EffectComposer(renderer);
        const glitchPass = new GlitchPass(scene, camera);
        composer.addPass( glitchPass );
        points.geometry.attributes.position.needsUpdate = true;
        var animate = function () {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            line.rotation.x += 0.01;
            line.rotation.y += 0.01;
            renderer.render( scene, camera );
            // composer.render();
        }

        explosionAnim = function () {
          requestAnimationFrame(explosionAnim);
          const positions = points.geometry.attributes.position.array;
          for(let i = 0; i < particuleCount * 3; i += 3){
            positions[i] += vertDir[i];
            positions[i + 1] += vertDir[i + 1];
            positions[i + 2] += vertDir[i + 2];

          }
          renderer.render( scene, camera );
          points.geometry.attributes.position.needsUpdate = true;

        }

        let onWindowResize = function () {
            camera.aspect = window.innerWidth / window.innerHeight - 70;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight - 70);
        }
      
          window.addEventListener("resize", onWindowResize, false);
          window.addEventListener("click", onClick, false);
        animate();        
        // explosionAnim();

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
        <div id="canvas3d" ref={canvas3d} ></div>
    );
}

export default Home;