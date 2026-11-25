// 1. Generate a random number between 1 and 100
const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};
console.log("1. Random number between 1 and 100:", getRandomNumber());

// --------------------------------------------------------------------------------
// 2. Find the square root of a number
const getSquareRoot = (number) => {
  return Math.sqrt(number);
};
console.log("2. Square root of 144:", getSquareRoot(144)); // 12

// --------------------------------------------------------------------------------
// 3. Find the power of a number (e.g., 2^5)
const getPower = (base, exponent) => {
  return Math.pow(base, exponent);
};
console.log("3. 2^5:", getPower(2, 5)); // 32

// --------------------------------------------------------------------------------
// 4. Round a number to the nearest integer
const roundToNearestInteger = (number) => {
  return Math.round(number);
};
console.log("4. Round 4.7 to the nearest integer:", roundToNearestInteger(4.7)); // 5

// --------------------------------------------------------------------------------
// 5. Find the absolute value of a number
const getAbsoluteValue = (number) => {
  return Math.abs(number);
};
console.log("5. Absolute value of -15:", getAbsoluteValue(-15)); // 15

// --------------------------------------------------------------------------------
// 6. Find the maximum number in a list
const findMax = (...numbers) => {
  return Math.max(...numbers);
};
console.log("6. Maximum of [1, 3, 7, 5, 2]:", findMax(1, 3, 7, 5, 2)); // 7

// --------------------------------------------------------------------------------
// 7. Find the minimum number in a list
const findMin = (...numbers) => {
  return Math.min(...numbers);
};
console.log("7. Minimum of [1, 3, 7, 5, 2]:", findMin(1, 3, 7, 5, 2)); // 1

// --------------------------------------------------------------------------------
// 8. Generate a random number between 0 (inclusive) and 1 (exclusive)
const getRandomBetweenZeroAndOne = () => {
  return Math.random();
};
console.log("8. Random number between 0 and 1:", getRandomBetweenZeroAndOne());

// --------------------------------------------------------------------------------
// 9. Convert an angle from degrees to radians
const degreesToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
};
console.log("9. Convert 45 degrees to radians:", degreesToRadians(45)); // 0.7853981633974483

// --------------------------------------------------------------------------------
// 10. Find the cosine of an angle (in radians)
const getCosine = (radians) => {
  return Math.cos(radians);
};
console.log("10. Cosine of π/3 (in radians):", getCosine(Math.PI / 3)); // 0.5
