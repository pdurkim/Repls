// FIRST ATTEMPT
// function binarySearch(arr, t) {
//   console.log(arr);
//   if(arr.length === 0) { return -1; }
//   let middleElement = arr[Math.floor((arr.length - 1) / 2)];
//   console.log(middleElement);
//   if(middleElement === t) { return arr[middleElement]; }
//   if(t > middleElement) {
//     // search right
//     binarySearch(arr.slice(arr.indexOf(middleElement + 1), arr.length));
//   } else {
//     // search left
//     binarySearch(arr.slice(0, arr.indexOf(middleElement - 1)));
//   }
// }

function binarySearch(arr, t) { // Big-O = O(l)
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (t === arr[middleIndex]) { return middleIndex };
    if(t < arr[middleIndex]) {
      rightIndex = middleIndex -1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));