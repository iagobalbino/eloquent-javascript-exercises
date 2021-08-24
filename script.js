// Rascunho

function reverseArray(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }

  return newArr;
}

const nome = ['I', 'A', 'G', 'O'];
const num = [1, 2, 3, 4]

// Parei tentando inverter as posições do array
function reverseArrayInPlace(arr) {
  for (let i = 0; i < (arr.length / 2); i++) {
    let arrItem = arr[i];
    console.log(arrItem);

    if (arr.length - 1 - i === i) {
      arr.unshift(arr[i]);
      // console.log(arr);
    }

  }

  // return console.log(arr);
}

console.log(reverseArrayInPlace(nome));