<!-- b) Sierpinski 2D Recursivo -->
<canvas id="sierpinski-2d-recursivo" width="500" height="500" style="border:1px solid black"></canvas>
<script>
const canvasRec = document.getElementById('sierpinski-2d-recursivo');
const ctxRec = canvasRec.getContext('2d');

function drawTriangle(p1, p2, p3) {
  ctxRec.beginPath();
  ctxRec.moveTo(...p1);
  ctxRec.lineTo(...p2);
  ctxRec.lineTo(...p3);
  ctxRec.closePath();
  ctxRec.stroke();
}

function mid(p1, p2) {
  return [(p1[0] + p2[0]) / 2, (p1[1] + p2[1]) / 2];
}

function sierpinski2D(p1, p2, p3, depth) {
  if (depth === 0) {
    drawTriangle(p1, p2, p3);
    return;
  }
  const m1 = mid(p1, p2);
  const m2 = mid(p2, p3);
  const m3 = mid(p3, p1);
  sierpinski2D(p1, m1, m3, depth - 1);
  sierpinski2D(m1, p2, m2, depth - 1);
  sierpinski2D(m3, m2, p3, depth - 1);
}

sierpinski2D([250, 20], [50, 450], [450, 450], 5);
</script>
