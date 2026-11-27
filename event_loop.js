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
console.log("1. Start");

async function fetchData() {
  console.log("2. Inside async function");
  await Promise.resolve();
  console.log("4. After await");
}

fetchData();

console.log("3. End");

Promise.resolve().then(() => {
  console.log("5. Another microtask");
});

console.log("6. Finished");

// Output order: 1. Start, 2. Inside async function, 3. End, 6. Finished, 4. After await, 5. Another microtask

//----------------------------------------------------------------------------------------
console.log("Start");

async function first() {
  console.log("First started");
  await second();
  console.log("First completed");
}

async function second() {
  console.log("Second started");
  await Promise.resolve();
  console.log("Second completed");
}

first();
console.log("End");

// Output order: Start, First started, Second started, End, Second completed, First completed

//----------------------------------------------------------------------------------------
// CALL STACK:
console.log("Global start");

function first() {
  console.log("First start");
  second();
  console.log("First end");
}

function second() {
  console.log("Second start");
  third();
  console.log("Second end");
}

function third() {
  console.log("Third");
}

first();

console.log("Global end");

// Output order: Global start, First start, Second start, Third, Second end, First end, Global end
//----------------------------------------------------------------------------------------

console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
  queueMicrotask(() => console.log("D"));
});

async function execute() {
  console.log("E");
  await Promise.resolve();
  console.log("F");
}
execute();

console.log("G");

// Output order: A, E, G, C, F, D, B
//----------------------------------------------------------------------------------------

(function () {
  console.log(1);

  Promise.resolve(5).then((e) => {
    setTimeout(() => console.log(2), 1000);
  });

  Promise.resolve(5).then((e) => {
    setTimeout(() => console.log(3), 0);
  });

  Promise.resolve(5).then((e) => {
    console.log(e);
  });

  setTimeout(() => {
    console.log(4);
  }, 0);
})();

// Output order: 1, 5, 4, 3, 2
//----------------------------------------------------------------------------------------
