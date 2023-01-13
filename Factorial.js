function factorial(n) {
  if(n == 0) {return 1;}
  let result = n;
  for(let i = n; i > 0; i--){
    result = result * i;
  }
  return result;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(10));

// Big-O = O(n)