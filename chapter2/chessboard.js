// Chessboard

let hash = '';
let size = 8;

for (let i = 0; i < size; i++) {
  if (i % 2 === 0) {
    for (let j = 0; j < size; j++) {
      if (j % 2 === 0) {
        hash += '#';
      } else {
        hash += ' ';
      }
    }
  } else {
    for (let j = 0; j < size; j++) {
      if (j % 2 === 0) {
        hash += ' ';
      } else {
        hash += '#';
      }
    }
  }

  hash += '\n';
}

console.log(hash);
