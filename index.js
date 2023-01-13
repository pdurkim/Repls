function recursiveBinarySearch(arr, t) { // Big-O = O(logn)
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  return search(arr, t, leftIndex, rightIndex);
}

function search(array, target, leftIndex, rightIndex) {
  if(leftIndex > rightIndex) { return -1; }
  
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  
  if(target === array[middleIndex]) { return middleIndex; }
  
  if(target < array[middleIndex]) {
    return search(array, target, leftIndex, middleIndex - 1);
  } else {
    return search(array, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));