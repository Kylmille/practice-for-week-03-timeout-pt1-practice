/***********************************************************************
Write a function, `intervalCount`, that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage

In addition to Mocha, we recommend that you test your code manually using
node with the examples below.

Example

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
***********************************************************************/
function intervalCount(cb, delay, amount) {
  //Create a variable called count and set it to 0
  let count = 0;

  //Set an interval that repeats every 'delay' milliseconds:
  const intervalId = setInterval(() => {
    cb();
    //Call the provided callback function cb()
    count++;
    //Increment the count by 1

    if (count === amount) {
      // If the count reaches the desired 'amount':
      clearInterval(intervalId);
      // Clear the interval using clearInterval(intervalId)
    }
  }, delay);
}

/*
//function intervalCount(cb, delay, amount) {
    This line defines a new function named intervalCount that takes three
    parameters: a callback function (cb), a delay in milliseconds (delay), 
    and an amount indicating the number of times the callback should 
    be executed.
  

//let count = 0;
    A variable named count is declared using the let keyword and initialized to 0. 
    This variable will be used to keep track of how many times the callback function has
    been executed.



//const intervalId = setInterval(() => {
    This line uses the setInterval function to create a repeating interval. 
    The interval will execute an arrow function every delay milliseconds.
  

//cb();
  Inside the interval function, the provided callback function (cb) is called. 
  This means that the function passed as cb will be executed every time the interval triggers.
  

//count++;
    After calling the callback function, the count variable is incremented by 1. 
    This keeps track of the number of times the callback has been executed.
  
//if (count === amount) {
  This conditional statement checks if the count variable is equal to the specified amount.
  

//clearInterval(intervalId);
    If the count reaches the desired amount, the clearInterval function is called to stop
    the interval from continuing to execute. 
    The intervalId is used to identify and clear the specific interval.
  

      }
    }, delay);

//The closing parentheses and semicolon complete the setInterval function call,
// enclosing the interval function.
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
