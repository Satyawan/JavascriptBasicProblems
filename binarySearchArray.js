/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 */
function binarySearch(array, element) {
   function innerRecurse(low, high) {
     var mid = Math.floor((low + high) * 0.5);
     console.log(mid);
     if (element === array[mid]) {
       return mid;
     }
     if (element < array[mid]) {
       return innerRecurse(low, mid);
     } else {
       return innerRecurse(mid, high);
     }
   }

   return innerRecurse(0, array.length - 1);
 }
 
 var index = binarySearch([1,1, 2, 3, 4, 5, 8, 11, 15, 16, 19, 20, 21], 4);
 console.log(index);