// function isPrimeNumber(n) { // Big-O = O(n^2)
//   for (let i = 2; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (i * j == n) { return false; }
//     }
//   }
//   return true;
// }

// BETTER WAY TO TO IT
// function isPrimeNumber(n) { // Big-O = O(n)
//   if (n < 2) { return false; }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// EVEN BETTER YET
function isPrimeNumber(n) { // Big-O = O(sqrt(n))
  if (n < 2) { return false; }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(1));
console.log(isPrimeNumber(5));
console.log(isPrimeNumber(11));
console.log(isPrimeNumber(10));
