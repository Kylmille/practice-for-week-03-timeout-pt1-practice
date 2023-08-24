/***********************************************************************
Recall that the built-in `setTimeout` function accepts a delay in
milliseconds. It would be cool if we had a version that could accept the
delay in seconds!

Write a function, `setSecondsTimeout`, that accepts a callback and a delay
in *seconds*. The function should set a timeout on the given callback for
the specified amount of time. Feel free to use the built-in `setTimeout`
in your implementation.

In addition to Mocha, we recommend that you test your code manually using
node with the examples below. Use the command
`node problems/01-set-seconds-timeout.js`

Examples:

setSecondsTimeout(function () {
    console.log('hello');
}, 1); // should print 'hello' after 1000 milliseconds

setSecondsTimeout(function () {
    console.log('world');
}, 1.4); // should print 'world' after 1400 milliseconds
***********************************************************************/

function setSecondsTimeout(cb, delayInSeconds) {
  // Convert delay to milliseconds
  const delayInMilliseconds = delayInSeconds * 1000;

  // Set the timeout using the converted delay
  setTimeout(cb, delayInMilliseconds);
}
 /*
 function setSecondsTimeout(cb, delayInSeconds) {
    This line defines a new function named setSecondsTimeout that takes two
    parameters: cb and delayInSeconds. 
    The function is designed to execute a callback function (cb) after 
    a certain delay specified in seconds (delayInSeconds).

   // Convert delay to milliseconds
  const delayInMilliseconds = delayInSeconds * 1000;
      Here, a variable named delayInMilliseconds is declared using 
      the const keyword. 
      It's assigned the value of delayInSeconds multiplied by 1000.
      This multiplication is necessary to convert the delay from 
      to milliseconds, as JavaScript's setTimeout function expects delays 
      in milliseconds 

   // Set the timeout using the converted delay
  setTimeout(cb, delayInMilliseconds);
      This line uses the setTimeout function, which is built into JavaScript's 
      browser runtime (or Node.js for server-side environments),
      to schedule the execution of the callback function (cb) after a 
      specified delay (delayInMilliseconds).

  The setTimeout function takes two arguments: the callback function to 
    execute (cb in this case) and the delay in milliseconds
    (delayInMilliseconds).   
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = setSecondsTimeout;
} catch {
  module.exports = null;
}
