// Capther 2 - Program Strcuture 
// let hash = '';

// for (let i = 0; i < 7; i++) {
//   hash += '#';
//   console.log(hash);
// }


// for (let i = 0; i <= 100; i++) {
//   if ((i % 3 === 0) && (i % 5 === 0)) {
//     console.log('FizzBuzz')
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

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
