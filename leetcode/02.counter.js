// closure: the inner function will have access to any variables declared above it

// a function can be declared and used inside another function
// the inner function will have access to any variables declared above it.
// METHOD:01
function createAdder(a) {
  function add(a) {
    const sum = a + b;
    return sum;
  }
  return add;
}

// METHOD:02
class Adder {
  constructor(a) {
    this.a = a;
  }

  add(b) {
    const sum = this.a + b;
    return sum;
  }
}

const addTo2 = new Adder(2);
addTo2.add(5);

// the key difference between method 1 and method 2
// if we create mnay instances of a class , each instances stores a single reference to the prototype object where all methods are stored.
// wheresas for closures, all the methods are generated and copy of each is stored in memory each time the outer function is called . For this reason, classes are more efficient than closures;

// when we defines a method in a class, it is stored in the prototype of the class. All instance of that class share a single reference to the method on the prototype.

// ✅ Only one method exists , regardless of the number of instances


// ✅ When we use closures, a new copy of the methods is created in memory every time the outer function is called.
// Hence we can say, closures are memory inefficient if you have many instances or methods.


