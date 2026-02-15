// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Light
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10,10,10);
scene.add(light);

// 3D Heart shape
const heartShape = new THREE.Shape();
heartShape.moveTo(0, 0);
heartShape.bezierCurveTo(0, 0, -1, -1, -2, 0);
heartShape.bezierCurveTo(-3, 1.5, -1.5, 3.5, 0, 4);
heartShape.bezierCurveTo(1.5, 3.5, 3, 1.5, 2, 0);
heartShape.bezierCurveTo(1, -1, 0, 0, 0, 0);

const extrudeSettings = {
  depth: 0.5,
  bevelEnabled: true,
  bevelSegments: 2,
  steps: 2,
  bevelSize: 0.2,
  bevelThickness: 0.2
};

const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
const material = new THREE.MeshPhongMaterial({color: 0xff2d95});
const heart = new THREE.Mesh(geometry, material);

heart.scale.set(0.5,0.5,0.5);
scene.add(heart);

// Particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 500;

const posArray = new Float32Array(particlesCount * 3);

for(let i=0;i<particlesCount*3;i++){
  posArray[i] = (Math.random() - 0.5) * 20;
}

particlesGeometry.setAttribute(
  'position',
  new THREE.BufferAttribute(posArray,3)
);

const particlesMaterial = new THREE.PointsMaterial({
  size:0.05,
  color:0xffffff
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

// Animation loop
function animate(){
  requestAnimationFrame(animate);

  heart.rotation.y += 0.02;
  heart.rotation.x += 0.01;

  particlesMesh.rotation.y += 0.001;

  renderer.render(scene,camera);
}
animate();

// Resize fix
window.addEventListener('resize', ()=>{
  renderer.setSize(window.innerWidth,window.innerHeight);
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
});

// Button message
function showLove(){
  document.getElementById("loveMsg").innerHTML =
  "Radhika 💖 You are my favorite person forever 🌸";
}
