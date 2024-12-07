//------ create a function that will always return a new function and that function will always return "Hello World"

function insideFunction() {
  return "Hello World";
}

function createHelloWorld() {
  return insideFunction;
}

// anonymous function :

// An anonymous function is a function without a name.
// anonymous functions a re not reusable

const val = function (a, b) {
  return a + b;
};

function helloWorld(fn) {
  console.log(fn(1, 5));
}

const iAmAnonymousFunction = function () {
  return "Hello, I am anonymous function";
};

helloWorld(val);

// Immediately invoked function expression:
// create a function and immediately execute it.

const result = (function (a, b) {
  return a + b;
})(3, 4);

console.log("Result is ", result);

const greetFunc = (function (name) {
  return `Hello ${name}`;
})("Satyam");

console.log("Name is ", greetFunc);

// function within a function
// Javascript has a powerful to create functions inside another function and even return them
function parentFunc() {
  function child1() {
    console.log("Hello, I am child 1");
  }

  return child1;
}

const newFunc = parentFunc();
newFunc();

// function hoisting
// Javascript has a feature called hositing where a function can be sometimes be used before it is initialized
// this can only be used if the function is declared with function syntax

function createFunction() {
  return fn;

  function fn(a, b) {
    const sum = a + b;
    return sum;
  }
}

// closures

// when a function is created, it has access to a reference to all the variables declared around it

// Arrow function

// omit return
const myFun = (a, b) => a + b;
const myFunc2 = (a, b) => {
  return a + b;
};

// arrow function imp points
// 1. more minimalistic syntax
// 2. No automatic hoisting
// 3. can not be bound to this, super and arguments

// rest arguments
// the rest syntax can be used to access all passed arguments as any array

function func(...args) {
  // args is [1,2]
  const sum = args[0] + args[1];
  return sum;
}

func(1, 2);

// problem

const parentFunction = function () {
  return function () {
    return "Hello World";
  };
};

const parentFn = () => {
  return () => "Hello World buddy";
};

console.log(parentFn()());

const immed = (function (a, b) {
  return a + b;
})(1, 2);
