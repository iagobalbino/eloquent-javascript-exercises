// Is even function
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if ((n - 2) % 0) {
    return true
  } else {
    return false
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
