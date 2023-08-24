/***********************************************************************
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments
have the same length.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below to confirm the correct behavior.

Note: The test specs for this problem are valid for iterative solutions. If you
pass the specs for an iterative solution and then attempt a recursive solution,
you will need to test your new solution manually using node.

Example:

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays);
// should print:
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
***********************************************************************/
function batchTimeouts(callbacks, delays) {
  //Create an empty array called timeoutObjs to store the Timeout objects

  const timeoutObjs = [];
  //Iterate over the callbacks array using a for loop:
  for (let i = 0; i < callbacks.length; i++) {
    // Retrieve the callback at the current index using callbacks[i]
    const callback = callbacks[i];
    // Retrieve the delay at the current index using delays[i]
    const delay = delays[i];

    //set a timeout for the current callback with the corresponding delay:
    const timeoutObj = setTimeout(callback, delay);
    // Use setTimeout(callback, delay) and store the returned Timeout object in a variable called timeoutObj

    timeoutObjs.push(timeoutObj);
    // Push the timeoutObj into the timeoutObjs array
  }

  return timeoutObjs;
// Return the timeoutObjs array containing the Timeout objects for each timeout that was set

}


/*
function batchTimeouts(callbacks, delays) {
  This line defines a new function named batchTimeouts that takes 
  two parameters: an array of callback functions (callbacks) and
  an array of corresponding delays in milliseconds (delays).
  The purpose of this function is to create and manage multiple timeouts
  based on the provided callbacks and delays.


//const timeoutObjs = [];
  An empty array named timeoutObjs is declared using the const keyword.
  This array will be used to store the Timeout objects returned by 
  the setTimeout function for each callback.


//for (let i = 0; i < callbacks.length; i++) {
    This line begins a for loop that iterates over the callbacks array. 
    The loop will run as long as the index i is less than the length of
    the callbacks array.

//const callback = callbacks[i];
//const delay = delays[i];
    Inside the loop, two variables callback and delay are declared and 
    assigned values. The callback variable is assigned the callback 
    function at the current index i of the callbacks array, and the 
    delay variable is assigned the delay value at the current index i of the
    delays array.


//const timeoutObj = setTimeout(callback, delay);
    This line uses the setTimeout function to set a timeout for the 
    current   callback with the corresponding delay. 
    The setTimeout function schedules the execution of the provided
    callback after the specified delay in milliseconds.
    The returned Timeout object is stored in the timeoutObj variable.


//timeoutObjs.push(timeoutObj);
    This line adds the timeoutObj 
    (the Timeout object returned by setTimeout)
    to the timeoutObjs array using the push method.
    This array will eventually contain Timeout objects for
    each timeout that was set.

  }

  return timeoutObjs;
}
    //After the loop completes, the function returns the timeoutObjs array
      containing the Timeout objects for each timeout that was set using
      the provided callbacks and delays.
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = batchTimeouts;
} catch {
  module.exports = null;
}
