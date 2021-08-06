// Bean count
function countChar(string, char) {
// Ou function countBs(string)
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === char){
      counter++;
    }
  }

  return console.log(counter);
}

countChar('kakkerlak', 'l');

