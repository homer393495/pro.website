// script.js
console.log('Pro Website script loaded!');

function showMessage() {
    alert('Welcome to Pro Website!');
}

function calculateSum(num1, num2) {
    return num1 + num2;
}

function generateAI() {
    // AI generation logic here
    return 'AI generated content';
}

// 3D model generation using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('3dModelContainer').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();
