<!-- c) Sierpinski 3D Aleatório -->
<script src="https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js"></script>
<div id="container" style="width: 600px; height: 600px;"></div>
<script>
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 600);
document.getElementById('container').appendChild(renderer.domElement);

// Vértices do tetraedro
const vertices = [
  new THREE.Vector3(1, 1, 1),
  new THREE.Vector3(-1, -1, 1),
  new THREE.Vector3(-1, 1, -1),
  new THREE.Vector3(1, -1, -1)
];

let point = new THREE.Vector3(0, 0, 0);

for (let i = 0; i < 20000; i++) {
  const vertex = vertices[Math.floor(Math.random() * 4)];
  point = point.clone().add(vertex).multiplyScalar(0.5);

  const geometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
  const material = new THREE.MeshBasicMaterial({ color: new THREE.Color(Math.random(), Math.random(), Math.random()) });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.copy(point);
  scene.add(cube);
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
</script>
