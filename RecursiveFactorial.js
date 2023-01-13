function recursiveFactorial(n) {
  if (n == 0) { return 1; } // base case to terminate recursion
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));
console.log(recursiveFactorial(1));