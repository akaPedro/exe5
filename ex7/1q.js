function crossProduct(v1, v2) {
    return [
        v1[1]*v2[2] - v1[2]*v2[1],
        v1[2]*v2[0] - v1[0]*v2[2],
        v1[0]*v2[1] - v1[1]*v2[0]
    ];
}

function dotProduct(v1, v2) {
    return v1[0]*v2[0] + v1[1]*v2[1] + v1[2]*v2[2];
}

function vectorSubtract(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

function isCoplanar(p1, p2, p3, p4) {
    const v1 = vectorSubtract(p2, p1);
    const v2 = vectorSubtract(p3, p1);
    const v3 = vectorSubtract(p4, p1);

    const cross = crossProduct(v2, v3);
    const scalarTriple = dotProduct(v1, cross);

    return Math.abs(scalarTriple) < 1e-6; // Tolerância para erros numéricos
}

function verificaPoligono(pontos) {
    if (pontos.length < 3) {
        console.log("Não é possível formar um polígono com menos de 3 pontos.");
        return false;
    }

    for (let i = 3; i < pontos.length; i++) {
        if (!isCoplanar(pontos[0], pontos[1], pontos[2], pontos[i])) {
            console.log("Os pontos NÃO são coplanares. Não formam um polígono.");
            return false;
        }
    }

    console.log("Os pontos são coplanares e suficientes. Formam um polígono.");
    return true;
}

// Pontos 3D hardcoded
const pontos = [
    [1, 0, 0],  // P1
    [0, 2, 1],  // P2
    [1, 3, 2],  // P3
    [3, 2, 1],  // P4
    [2, 0, 1]   // P5
];

// Verificar se formam um polígono
verificaPoligono(pontos);
