const colors = ['white', 'orange', 'green', 'red', 'blue', 'yellow'];
let cube = [];

function initCube() {
    for (let i = 0; i < 6; i++) {
        cube[i] = Array(3).fill().map(() => Array(3).fill(colors[i]));
    }
}

function createCubeDOM() {
    const faceIds = ['up-face', 'left-face', 'front-face', 'right-face', 'back-face', 'down-face'];
    const faceIndices = { 'up-face': 0, 'left-face': 1, 'front-face': 2, 'right-face': 3, 'back-face': 4, 'down-face': 5 };
    const container = document.getElementById('cube-container');

    faceIds.forEach(faceId => {
        const faceContainer = document.getElementById(faceId);
        faceContainer.innerHTML = ''; // Clear existing content

        const face = document.createElement('div');
        face.className = 'face';

        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                const cubeElement = document.createElement('div');
                cubeElement.className = 'cube';
                cubeElement.style.backgroundColor = cube[faceIndices[faceId]][j][k];
                face.appendChild(cubeElement);
            }
            face.appendChild(document.createElement('br'));
        }
        faceContainer.appendChild(face);
    });
}

function updateCubeDOM() {
    const faceIds = ['up-face', 'left-face', 'front-face', 'right-face', 'back-face', 'down-face'];
    const faceIndices = { 'up-face': 0, 'left-face': 1, 'front-face': 2, 'right-face': 3, 'back-face': 4, 'down-face': 5 };

    faceIds.forEach(faceId => {
        const faceContainer = document.getElementById(faceId).getElementsByClassName('cube');
        let faceIndex = faceIndices[faceId];
        let cubes = cube[faceIndex];

        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                faceContainer[j * 3 + k].style.backgroundColor = cubes[j][k];
            }
        }
    });
}

function rotateFace(face, clockwise) {
    const faceIndex = { 'front': 2, 'back': 4, 'left': 1, 'right': 3, 'up': 0, 'down': 5 }[face];
    const temp = cube[faceIndex].map(row => [...row]);

    if (clockwise) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cube[faceIndex][i][j] = temp[2 - j][i];
            }
        }
    } else {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                cube[faceIndex][i][j] = temp[j][2 - i];
            }
        }
    }

    rotateAdjacentFaces(face, clockwise);
    updateCubeDOM();
}

function rotateAdjacentFaces(face, clockwise) {
    const rotations = {
        'front': () => {
            const temp = [...cube[0][2]];
            if (clockwise) {
                cube[0][2] = cube[1].map(row => row[2]).reverse();
                cube[1].forEach((row, i) => { row[2] = cube[5][0][i]; });
                cube[5][0] = cube[3].map(row => row[0]).reverse();
                cube[3].forEach((row, i) => { row[0] = temp[i]; });
            } else {
                cube[0][2] = cube[3].map(row => row[0]);
                cube[3].forEach((row, i) => { row[0] = cube[5][0][2 - i]; });
                cube[5][0] = cube[1].map(row => row[2]);
                cube[1].forEach((row, i) => { row[2] = temp[2 - i]; });
            }
        },
        'back': () => {
            const temp = [...cube[0][0]];
            if (clockwise) {
                cube[0][0] = cube[3].map(row => row[2]);
                cube[3].forEach((row, i) => { row[2] = cube[5][2][2 - i]; });
                cube[5][2] = cube[1].map(row => row[0]);
                cube[1].forEach((row, i) => { row[0] = temp[2 - i]; });
            } else {
                cube[0][0] = cube[1].map(row => row[0]).reverse();
                cube[1].forEach((row, i) => { row[0] = cube[5][2][i]; });
                cube[5][2] = cube[3].map(row => row[2]).reverse();
                cube[3].forEach((row, i) => { row[2] = temp[i]; });
            }
        },
        'left': () => {
            const temp = cube[0].map(row => row[0]);
            if (clockwise) {
                cube[0].forEach((row, i) => { row[0] = cube[4].map(r => r[0])[2-i]; });
                cube[4].forEach((row, i) => { row[0] = cube[5].map(r => r[0])[i]; });
                cube[5].forEach((row, i) => { row[0] = cube[2].map(r => r[0])[2-i]; });
                cube[2].forEach((row, i) => { row[0] = temp[i]; });
            } else {
                cube[0].forEach((row, i) => { row[0] = cube[2].map(r => r[0])[i]; });
                cube[2].forEach((row, i) => { row[0] = cube[5].map(r => r[0])[2 - i]; });
                cube[5].forEach((row, i) => { row[0] = cube[4].map(r => r[0])[i];});
                cube[4].forEach((row, i) => { row[0] = temp[2-i]; });
            }
        },
        'right': () => {
            const temp = cube[0].map(row => row[2]);
            if (clockwise) {
                cube[0].forEach((row, i) => { row[2] = cube[2].map(r => r[2])[i]; });
                cube[2].forEach((row, i) => { row[2] = cube[5].map(r => r[2])[2-i]; });
                cube[5].forEach((row, i) => { row[2] = cube[4].map(r => r[2])[i];});
                cube[4].forEach((row, i) => { row[2] = temp[2-i]; });
            } else {
                cube[0].forEach((row, i) => { row[2] = cube[4].map(r => r[2])[2-i]; });
                cube[4].forEach((row, i) => { row[2] = cube[5].map(r => r[2])[i]; });
                cube[5].forEach((row, i) => { row[2] = cube[2].map(r => r[2])[2 - i]; });
                cube[2].forEach((row, i) => { row[2] = temp[i]; });
            }
        },
        'up': () => {
            const temp = [...cube[2][0]];
            if (clockwise) {
                cube[2][0] = cube[3][0];
                cube[3][0] = cube[4][0];
                cube[4][0] = cube[1][0];
                cube[1][0] = temp;
            } else {
                cube[2][0] = cube[1][0];
                cube[1][0] = cube[4][0];
                cube[4][0] = cube[3][0];
                cube[3][0] = temp;
            }
        },
        'down': () => {
            const temp = [...cube[2][2]];
            if (clockwise) {
                cube[2][2] = cube[1][2];
                cube[1][2] = cube[4][2];
                cube[4][2] = cube[3][2];
                cube[3][2] = temp;
            } else {
                cube[2][2] = cube[3][2];
                cube[3][2] = cube[4][2];
                cube[4][2] = cube[1][2];
                cube[1][2] = temp;
            }
        }
    };

    rotations[face]();
}

function resetCube() {
    initCube();
    createCubeDOM();
}

function shuffleCube() {
    const faces = ['front', 'back', 'left', 'right', 'up', 'down'];
    const moves = 20;

    for (let i = 0; i < moves; i++) {
        const randomFace = faces[Math.floor(Math.random() * faces.length)];
        const randomDirection = Math.random() < 0.5;
        rotateFace(randomFace, randomDirection);
    }
}

initCube();
createCubeDOM();