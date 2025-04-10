<!-- a) Sierpinski 2D Aleatório -->
<canvas id="sierpinski-2d-aleatorio" width="500" height="500" style="border:1px solid black"></canvas>
<script>
const canvas = document.getElementById('sierpinski-2d-aleatorio');
const ctx = canvas.getContext('2d');

const A = [250, 20];
const B = [50, 450];
const C = [450, 450];

function drawDot([x, y]) {
  ctx.fillRect(x, y, 1, 1);
}

function midpoint(p1, p2) {
  return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
}

let p = [Math.random() * 500, Math.random() * 500];

for (let i = 0; i < 50000; i++) {
  const randVertex = [A, B, C][Math.floor(Math.random() * 3)];
  p = midpoint(p, randVertex);
  drawDot(p);
}
</script>
