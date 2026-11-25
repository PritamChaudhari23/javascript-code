// 1.Write a function to reverse an array in place.
const array01 = [12, 87, 92, 68, 43];
console.log(array01.reverse());

// --------------------------------------------------------------------------------
// 2.How would you find the maximum number in an array?
const array02 = [12, 87, 92, 68, 43];
let maximum = array02[0];

array02.forEach((number) => {
  if (number > maximum) {
    maximum = number;
  }
});

console.log(maximum);

// --------------------------------------------------------------------------------
// 3.Write a function to remove duplicate elements from an array.
const duplicate = [12, 87, 92, 68, 43, 92];
let unique = [];

for (i = 0; i < duplicate.length; i++) {
  if (!unique.includes(duplicate[i])) {
    unique.push(duplicate[i]);
  }
}

console.log(unique);

// --------------------------------------------------------------------------------
// 4.How do you merge two arrays without using `.concat()`?
const array401 = [12, 87, 92];
const array402 = [68, 43, 32];

const mergedArrayConcat = array401.concat(array402);
console.log(mergedArrayConcat);

const mergedArray = [...array401, ...array402];
console.log(mergedArray);

// --------------------------------------------------------------------------------
// 5.Write a function to find the intersection of two arrays.
const array501 = [12, 87, 92, 68, 43];
const array502 = [68, 43, 92, 100];

const commonElements = array502.filter((item) => array501.includes(item));

console.log(commonElements);

// --------------------------------------------------------------------------------
// 6.How would you flatten a multi-dimensional array?
const array601 = [1, [2, 3], [4, [5, 6]]];
console.log(array601.flat());

function flattenArray(arr) {
  let result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // Recursively flatten arrays
    } else {
      result.push(item);
    }
  });

  return result;
}

const array602 = [1, [2, 3], [4, [5, 6]]];
console.log(flattenArray(array602));

// --------------------------------------------------------------------------------
// 7.How would you return the index of a specific element in an array.
const array07 = [10, 20, 30, 40, 50];

console.log(array07.indexOf(30)); // Output: 2
console.log(array07.indexOf(100)); // Output: -1 (because 100 is not in the array)

// --------------------------------------------------------------------------------
// 8.Write a program that sorts an array of numbers in ascending order.
const array08 = [23, 87, 42, 12, 95];

console.log(array08.sort());
console.log(array08.sort((a, b) => b - a)); // Descending

// --------------------------------------------------------------------------------
// 9.How would you find the sum of all elements in an array?
const array09 = [23, 98, 12, 45, 3, 65, 87];
console.log(array09.reduce((acc, cur) => acc + cur, 0));

// --------------------------------------------------------------------------------
// 10.Write a function that rotates an array by `n` positions.
function rotateArray(arr, n) {
  const length = arr.length;
  if (length === 0) return arr; // If the array is empty, return it as is

  // Normalize n (in case it's larger than the array length or negative)
  n = n % length;
  if (n < 0) n += length; // If n is negative, adjust it to a positive equivalent

  // Rotate the array
  return [...arr.slice(-n), ...arr.slice(0, length - n)];
}

// Example usage:
const array10 = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(array10, 3)); // Output: [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray(array10, -2)); // Output: [3, 4, 5, 6, 7, 1, 2]

// --------------------------------------------------------------------------------
// 11.Use `.reduce()` to count the occurrences of each item in an array.
const array11 = [12, 32, 43, 12, 76, 3, 43, 65, 32];

const countOccurrences = array11.reduce((acc, curr) => {
  if (acc[curr]) {
    acc[curr] += 1;
  } else {
    acc[curr] = 1;
  }
  return acc;
}, {});

console.log(countOccurrences);

// --------------------------------------------------------------------------------
// 12.Use `.map()` to square each number in an array.
const array12 = [1, 2, 3, 4, 5, 6, 7];
console.log(array12.map((ele) => ele * ele));

// --------------------------------------------------------------------------------
// 13.Write a function that removes all falsy values from an array.
const array13 = [0, 1, "", null, undefined, "Hello", NaN, 42];
console.log(array13.filter(Boolean));

// --------------------------------------------------------------------------------
// 14.How would you implement `Array.prototype.includes()` from scratch?
Array.prototype.myIncludes = function (valueToFind, fromIndex = 0) {
  // If array is empty, return false
  if (this.length === 0) return false;

  // Normalize fromIndex (handle negative index)
  let start = fromIndex < 0 ? Math.max(this.length + fromIndex, 0) : fromIndex;

  // Loop through the array starting from the `fromIndex`
  for (let i = start; i < this.length; i++) {
    // Check if the current element is strictly equal to the value we are looking for
    if (this[i] === valueToFind) {
      return true;
    }
  }

  // If no match found, return false
  return false;
};

// Example usage:
const array14 = [1, 2, 3, 4, 5];
console.log(array14.myIncludes(3)); // true
console.log(array14.myIncludes(6)); // false
console.log(array14.myIncludes(3, 3)); // false (search starts from index 3)

// --------------------------------------------------------------------------------
// 15.Write a function to find the common elements in multiple arrays.
function findCommonElements(...arrays) {
  // Find the first array (used to check the rest of the arrays)
  return arrays[0].filter((item) =>
    // Check if the item exists in every other array
    arrays.every((arr) => arr.includes(item)),
  );
}

// Example usage:
const array1501 = [1, 2, 3, 4, 5];
const array1502 = [3, 4, 5, 6, 7];
const array1503 = [0, 3, 4, 5, 8];

console.log(findCommonElements(array1501, array1502, array1503)); // Output: [3, 4, 5]

// --------------------------------------------------------------------------------
// 16.How to check if two arrays are equal.
const array1601 = [1, 2, 3];
const array1602 = [1, 2, 3];

console.log(array1601.every((value, index) => value === array1602[index]));

// --------------------------------------------------------------------------------
// 17.How would you convert an array to a string using a separator?
const fruits = ["apple", "banana", "cherry"];
const result = fruits.join(",");
console.log(result);

// --------------------------------------------------------------------------------
// 18.Write a function to check if an array is a palindrome.
function isPalindrome(arr) {
  // Loop through half of the array
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false; // If any pair of elements is different, return false
    }
  }
  return true; // If all pairs are the same, return true
}

// Example usage:
console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 4, 5])); // false

// --------------------------------------------------------------------------------
// 19.Use `.filter()` to return only even numbers from an array.
const array19 = [12, 37, 3, 56, 79, 34, 26];
console.log(array19.filter((ele) => ele % 2 === 0));

// --------------------------------------------------------------------------------
// 20.Write a function to calculate the product of all numbers in an array.
const array20 = [2, 6, 10, 5, 3];
console.log(array20.reduce((acc, curr) => acc * curr));

// --------------------------------------------------------------------------------
// 21.How to find the index of the first element that satisfies a condition.
const array2101 = [1, 2, 3, 7, 11, 12];
console.log(array2101.findIndex((num) => num > 10));

const array2102 = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
console.log(array2102.findIndex((user) => user.name === "Bob"));

// --------------------------------------------------------------------------------
// 22.Use `.sort()` to sort an array of strings in lexicographical order.
const array2201 = ["banana", "apple", "cherry", "mango"];
console.log(array2201.sort());

const array2202 = ["Banana", "apple", "Orange", "grape"];
console.log(array2202.sort());

const array2203 = ["Banana", "apple", "Orange", "grape"];
array2203.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(array2203);

// --------------------------------------------------------------------------------
// 23.How would you find the index of the last occurrence of an element in an array?
const array23 = [1, 2, 3, 4, 2, 5, 2];
console.log(array23.lastIndexOf(2));

// --------------------------------------------------------------------------------
// 24.Write a function to find all unique elements in an array.
const array24 = [1, 2, 2, 3, 4, 4, 5];
const uniqueElements = array24.filter(
  (item) => array24.indexOf(item) === array24.lastIndexOf(item),
);
console.log(uniqueElements);

// --------------------------------------------------------------------------------
// 25.How would you get the first `n` elements from an array?
const array25 = [1, 2, 3, 4, 5, 6, 7];
const n = 3;

const firstNElements = array25.slice(0, n);
console.log(firstNElements);

// --------------------------------------------------------------------------------
// 26.Write a function to split an array into chunks of size `n`.
function chunkArray(array, size) {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size)); // Push the slice into result
  }

  return result;
}

const array26 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const size = 3;

const chunks = chunkArray(array26, size);
console.log(chunks);

// --------------------------------------------------------------------------------
// 27.Use `.find()` to return the first element that satisfies a given condition.
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const user = users.find((user) => user.id === 2);

console.log(user);

// --------------------------------------------------------------------------------
// 28.How would you remove the last element from an array?
let numbers = [1, 2, 3, 4, 5];

let lastElement = numbers.pop();

console.log(lastElement); // Output: 5
console.log(numbers); // Output: [1, 2, 3, 4]

// --------------------------------------------------------------------------------
// 29.Write a function that finds the longest string in an array of strings.

function findLongestString(arr) {
  // Initialize the longest string to be the first element in the array
  let longestString = "";

  // Loop through the array to find the longest string
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }

  return longestString;
}

const strings = ["apple", "banana", "grape", "watermelon", "kiwi"];
const longest = findLongestString(strings);

console.log(longest);

// --------------------------------------------------------------------------------
// 30.Use `.some()` to check if any element in the array is greater than a given number.
const array30 = [1, 2, 3, 4, 15];
console.log(array30.some((num) => num > 10));

// --------------------------------------------------------------------------------
// 31.How would you find the average of all numbers in an array?
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sum / arr.length;
}

const array31 = [10, 20, 30, 40, 50];
const average = calculateAverage(array31);
console.log(average);

// --------------------------------------------------------------------------------
// 32.Write a function that finds the difference between two arrays (items in one but not the other).
function arrayDifference(arr1, arr2) {
  const diff1 = arr1.filter((item) => !arr2.includes(item));
  const diff2 = arr2.filter((item) => !arr1.includes(item));
  return diff1.concat(diff2);
}

const array3201 = [1, 2, 3, 4, 5];
const array3202 = [4, 5, 6, 7, 8];
const difference = arrayDifference(array3201, array3202);
console.log(difference);

// --------------------------------------------------------------------------------
// 33.Implement a function that rotates a 2D array 90 degrees clockwise.
function rotateMatrix(matrix) {
  const n = matrix.length;

  // Step 1: Transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // Swap elements at (i, j) and (j, i)
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Reverse each row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }

  return matrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Original Matrix:");
console.log(matrix);

const rotatedMatrix = rotateMatrix(matrix);

console.log("Rotated Matrix (90 degrees clockwise):");
console.log(rotatedMatrix);

// --------------------------------------------------------------------------------
// 34.Write a program to check if an array is sorted in ascending order.
function isArraySortedAscending(arr) {
  if (arr.length <= 1) {
    return true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 3, 4, 1, 2];
const arr3 = [10, 20, 20, 30, 40];

console.log(isArraySortedAscending(arr1));
console.log(isArraySortedAscending(arr2));
console.log(isArraySortedAscending(arr3));

// --------------------------------------------------------------------------------
// 35.Use `.forEach()` to double each number in an array.
let array35 = [1, 2, 3, 4, 5];

array35.forEach((value, index, array) => {
  array[index] = value * 2;
});

console.log(array35);

// --------------------------------------------------------------------------------
// 36.Write a function that returns an array of all numbers greater than a given number.
let array36 = [1, 5, 10, 20, 30];
let givenNumber = 15;

let filteredNumbers = array36.filter((num) => num > givenNumber);

console.log(filteredNumbers);
// --------------------------------------------------------------------------------
// 37.How would you sort an array of objects by a property?

const array37 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];

const sortedUsers = array37.sort((a, b) => a.age - b.age); // Sort by age

console.log(sortedUsers);

// --------------------------------------------------------------------------------
// 38.Write a function to remove falsy values from an array using `.filter()`.
const array38 = [0, 1, "", null, undefined, "Hello", NaN, 42];
console.log(array38.filter(Boolean));

// --------------------------------------------------------------------------------
// 39.Implement a function that checks whether an array contains only numbers.
function isArrayOnlyNumbers(arr) {
  return arr.every((item) => typeof item === "number");
}

const array39 = [1, 2, 3, 4, 5];
console.log(isArrayOnlyNumbers(array39));

const array39b = [1, 2, "3", 4, 5];
console.log(isArrayOnlyNumbers(array39b));

// --------------------------------------------------------------------------------
// 40.Write a function to find the sum of values at even indices in an array.
function sumEvenIndices(arr) {
  return arr
    .filter((_, index) => index % 2 === 0)
    .reduce((acc, cur) => acc + cur, 0);
}

const array40 = [1, 2, 3, 4, 5, 6];
console.log(sumEvenIndices(array40));

// --------------------------------------------------------------------------------
// 41.Write a function to insert an element at a specific index in an array.
function insertAtIndex(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

const array41 = [1, 2, 3, 4, 5];
console.log(insertAtIndex(array41, 2, 99));

// --------------------------------------------------------------------------------
// 42.Use `.every()` to check if all numbers in the array are positive.
const array42 = [1, 2, 3, 4, 5];
console.log(array42.every((num) => num > 0));

const array42b = [-1, 2, 3, 4, 5];
console.log(array42b.every((num) => num > 0));

// --------------------------------------------------------------------------------
// 43.How would you get all elements from the array that do not contain a specific character?
const array43 = ["apple", "banana", "cherry", "grape"];
const character = "a";

const filteredArray = array43.filter((item) => !item.includes(character));
console.log(filteredArray);

// --------------------------------------------------------------------------------
// 44.Use `.map()` to concatenate an array of strings with their indices.
const array44 = ["apple", "banana", "cherry"];
console.log(array44.map((item, index) => `${item} ${index}`));

// --------------------------------------------------------------------------------
// 45.Write a program to find the union of two arrays.
const array45a = [1, 2, 3, 4];
const array45b = [3, 4, 5, 6];

const union = [...new Set([...array45a, ...array45b])];
console.log(union);

// --------------------------------------------------------------------------------
// 46.How would you check if two arrays are disjoint (no common elements)?
const array46a = [1, 2, 3];
const array46b = [4, 5, 6];

const isDisjoint = !array46a.some((item) => array46b.includes(item));
console.log(isDisjoint);

// --------------------------------------------------------------------------------
// 47.Write a function to find the element with the highest frequency in an array.
function findMostFrequent(arr) {
  const frequency = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  let maxCount = 0;
  let mostFrequent = null;

  for (const [item, count] of Object.entries(frequency)) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

const array47 = [1, 2, 3, 2, 1, 2, 4, 4, 4, 4];
console.log(findMostFrequent(array47));

// --------------------------------------------------------------------------------
// 48.How would you implement `.slice()` without using the built-in method?
Array.prototype.mySlice = function (start = 0, end = this.length) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(this[i]);
  }
  return result;
};

const array48 = [1, 2, 3, 4, 5];
console.log(array48.mySlice(1, 4));

// --------------------------------------------------------------------------------
// 49.Use `.reduce()` to find the product of all elements in an array.
const array49 = [1, 2, 3, 4];
console.log(array49.reduce((acc, cur) => acc * cur, 1)); // Output: 24

// --------------------------------------------------------------------------------
// 50.Write a function that shifts the elements of an array by one position.
function shiftArray(arr) {
  const first = arr.shift();
  arr.push(first);
  return arr;
}

const array50 = [1, 2, 3, 4, 5];
console.log(shiftArray(array50));
