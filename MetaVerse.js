// JavaScript (script.js)
// Leaflet - Get Map Data
const map = L.map('map').setView([0, 0], 2); // Center the map on latitude 0, longitude 0 (initially)

// Add OpenStreetMap tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Three.js - Convert Map Data to 3D Representation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight); // Divide the window into two halves for the map and 3D representation
document.body.appendChild(renderer.domElement);

// Load a texture representing satellite imagery (You can use any texture here)
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('PATH_TO_YOUR_TEXTURE_IMAGE'); // Replace with the actual texture image path

const sphereGeometry = new THREE.SphereGeometry(5, 64, 64); // Sphere representing the Earth's surface
const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
const earthSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(earthSphere);

// Add a grid overlay
const gridSize = 100; // Number of grids on each axis
const gridStep = 1; // Spacing between each grid
const gridColor = 0x888888; // Color of the grid lines

const gridHelper = new THREE.GridHelper(gridSize, gridSize, gridColor, gridColor);
gridHelper.position.y = -5; // Place the grid slightly below the sphere
scene.add(gridHelper);

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();