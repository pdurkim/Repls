// FIRST ATTEMPT
// function isPowerOfTwo(n) {
//   for(let i = 0; i < n; i++) {
//     if(2^i > n) { return false; }
//     if(2^i === n) { return true; }
//   }
//   return false;
// }

// More Optimal
// function isPowerOfTwo(n) { // O(logn)
//   let num = n;
//   while (num > 1) {
//     if (num % 2 !== 0) { return false; }
//     num = num / 2;
//   }
//   return true;
// }

// Most Optimal
function isPowerOfTwo(n) { // O(1)
  if (n < 1) { return false; }
  return (n & (n-1)) === 0
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(1012312));