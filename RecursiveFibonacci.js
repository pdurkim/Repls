// First Attempt - DOES NOT WORK
// function recursiveFibonacci(n) {
//   if(n < seq.length) {return seq[n];}
//   if(n === seq.length) {return seq[n];}
//   seq.push(seq[seq.length-1] + seq[seq.length-2]);
//   recursiveFibonacci.call(n, seq);
// }

function recursiveFibonacci(n) {
  if(n < 2){
    return n;
  }
  return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
}
console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8