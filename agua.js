function colinear(p1, p2, p3) {
    // Verifica se os pontos são colineares usando determinante
    const det = p1[0] * (p2[1] - p3[1]) +
                p2[0] * (p3[1] - p1[1]) +
                p3[0] * (p1[1] - p2[1]);
    return det === 0;
}

function generateTriangle() {
    while (true) {
        let A = [Math.random(), Math.random()];
        let B = [Math.random(), Math.random()];
        let C = [Math.random(), Math.random()];
        if (!colinear(A, B, C)) {
            return [A, B, C];
        }
    }
}

function sierpinski(n) {
    let [A, B, C] = generateTriangle();
    let points = [A, B, C];
    
    // Ponto inicial aleatório dentro do triângulo
    let P = [Math.random(), Math.random()];
    let result = [P];
    
    for (let i = 1; i < n; i++) {
        let vertex = points[Math.floor(Math.random() * 3)]; // Escolhe um dos vértices
        P = [(P[0] + vertex[0]) / 2, (P[1] + vertex[1]) / 2]; // Ponto médio
        result.push(P);
    }
    
    return { points: result, vertices: [A, B, C] };
}

// Parâmetro n
const n = 15;
const { points, vertices } = sierpinski(n);

console.log("Pontos do Triângulo de Sierpinski:", points);
console.log("Vértices do triângulo:", vertices);