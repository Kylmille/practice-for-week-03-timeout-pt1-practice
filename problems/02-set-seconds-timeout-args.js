/***********************************************************************
The `setSecondsTimeout` you wrote was cool, but it's missing some functionality.
The built-in `setTimeout` can also accept any additional number of arguments that
will be passed to the callback.

Write a function, `setSecondsTimeoutArgs`, that accepts a callback, a delay
in seconds, and any number of additional arguments. The function should call the
callback with the additional arguments after the specified delay.

In addition to Mocha, we recommend that you test your code manually using node
with the examples below.

Examples:

function printSum(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
setSecondsTimeoutArgs(printSum, 0.25, 5, 1, 4); // should print '10' after 250ms

setSecondsTimeoutArgs(function(arg1, arg2) {
    console.log(arg1 + '-' + arg2);
}, 0.7, 'hello', 'world'); // should print 'hello-world' after 700ms
***********************************************************************/
function setSecondsTimeoutArgs(cb, delayInSeconds, ...args) {
  // Convert delay to milliseconds
  const delayInMilliseconds = delayInSeconds * 1000;

  // Set the timeout using the converted delay and pass additional arguments to the callback
  setTimeout(cb, delayInMilliseconds, ...args);
}


/*
function setSecondsTimeoutArgs(cb, delayInSeconds, ...args) {
    This line defines a new function named setSecondsTimeoutArgs that takes 
    at least two parameters: cb and delayInSeconds, 
    and potentially more arguments using the rest parameter syntax (...args). 
    This function is designed to execute a callback function (cb) after 
    a certain delay specified in seconds (delayInSeconds),
    and any additional arguments passed will be forwarded to the callback
    when it's invoked.

// Convert delay to milliseconds
    const delayInMilliseconds = delayInSeconds * 1000;
    Similar to the previous function, a variable named delayInMilliseconds
    is declared using the const keyword. It's assigned the value of 
    delayInSeconds multiplied by 1000, which converts the delay from 
    seconds to milliseconds.
    
// Set the timeout using the converted delay and pass additional arguments to the callback
    setTimeout(cb, delayInMilliseconds, ...args);
    This line uses the setTimeout function to schedule the 
    execution of the callback function (cb) after the
    specified delay (delayInMilliseconds). 
    However, there's a difference here. 
    The third argument of the setTimeout function is ...args, 
    which uses the spread syntax to pass the elements of the args array 
    as separate arguments to the callback function.

The cb argument is the callback function to execute.
The delayInMilliseconds argument is the delay in milliseconds before 
executing the callback.
The ...args argument contains any additional arguments passed to the 
function, and these arguments will be passed to the callback when 
it's invoked.




/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = setSecondsTimeoutArgs;
} catch {
  module.exports = null;
}
