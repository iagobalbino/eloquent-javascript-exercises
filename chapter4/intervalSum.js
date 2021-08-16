function range(start, end, increment = 1) {
  const arr = [];
  
  if (increment < 0) {
    for (start; start >= end; start -= increment) {
      console.log(start);
      arr.push(start);
    }
  } else {
  for (start; start <= end; start += increment) {
    arr.push(start);
    }
  }

  return arr;
}

console.log(range(2, 10, 2));

function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
  // return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
}

// console.log(sum(range(1, 10)));