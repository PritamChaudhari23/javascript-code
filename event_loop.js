console.log(1); // synchronous code

setTimeout(() => {
  console.log(2); // macrotask queue
}, 0);

Promise.resolve().then(() => {
  console.log(3); // microtask queue
});

console.log(4); // synchronous code

// Output order: 1, 4, 3, 2

//----------------------------------------------------------------------------------------

console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("3");
    setTimeout(() => console.log("4"), 0);
  })
  .then(() => console.log("5"));

queueMicrotask(() => console.log("6"));

(async () => {
  console.log("7");
  await null;
  console.log("8");
})();

console.log("9");

// Output order: 1, 7, 9, 3, 6, 8, 5, 2, 4

//----------------------------------------------------------------------------------------
