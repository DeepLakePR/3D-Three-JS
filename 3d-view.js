// Setup
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 128 * 1.5;

// Light
const light = new THREE.PointLight('#d1d1d1', 1, 100);
light.position.set(0, 100, 100);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(2);

document.body.appendChild( renderer.domElement );

// Controls
const controls = new OrbitControls( camera, renderer.domElement );

// Add Cube
const geometry = new THREE.BoxGeometry(64, 64, 64);
const material = new THREE.MeshBasicMaterial({ 
    color: '#b3b5b4' 
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
scene.add(light);

camera.position.z = 5; 

function animate(){
    requestAnimationFrame(animate);

    controls.update();

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
}

animate();
