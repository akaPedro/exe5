<!-- d) Sierpinski 3D Recursivo -->
<script src="https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js"></script>
<div id="container-rec3d" style="width: 600px; height: 600px;"></div>
<script>
const scene3D = new THREE.Scene();
const camera3D = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera3D.position.z = 4;

const renderer3D = new THREE.WebGLRenderer();
renderer3D.setSize(600, 600);
document.getElementById('container-rec3d').appendChild(renderer3D.domElement);

function sierpinskiTetrahedron(position, size, depth) {
  if (depth === 0) {
    const geometry = new THREE.TetrahedronGeometry(size);
    const material = new THREE.MeshNormalMaterial({ wireframe: false });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    scene3D.add(mesh);
    return;
  }

  const offset = size / 2;
  const offsets = [
    new THREE.Vector3(offset, offset, offset),
    new THREE.Vector3(-offset, -offset, offset),
    new THREE.Vector3(-offset, offset, -offset),
    new THREE.Vector3(offset, -offset, -offset),
  ];

  for (let i = 0; i < 4; i++) {
    const newPos = position.clone().add(offsets[i].clone().multiplyScalar(0.5));
    sierpinskiTetrahedron(newPos, size / 2, depth - 1);
  }
}

sierpinskiTetrahedron(new THREE.Vector3(0, 0, 0), 1, 3);

function animate3D() {
  requestAnimationFrame(animate3D);
  renderer3D.render(scene3D, camera3D);
}
animate3D();
</script>
