// function animals(first, obj, cb) {
    
//     console.log(counter.id)
//     let bestArr = []; // to return
//     let copied = []; // used to double check any other duplicates
//     //base case
//     if (first.length === 0) return bestArr;
   
//     //recursive case; recursive step = array.split(1) and using the element of arr[0] to add to new array
//     let popper = first.pop()
    
//     if (first.includes(popper)) {
//                 bestArr.push(popper)
        
//         for (let ele of first) {
           
//             if (ele !== popper) {
              
//                 copied.push(ele)
//             }
//         }
//     }
//     setTimeout(animals, 1000, counter, callback)
//     counter.id++
//      setInterval(animals, 1000, counter, callback)
//     if (!copied.length) return bestArr.concat(animals(first, counter, cb))
//     else return bestArr.concat(animals(first, counter, cb))
// }
// let callback = () => {
//     console.log('Is this the pet?')
// }
// let pets = ['kitten', 'dog', 'bunny', 'duck', 'duck', 'fox', 'kitten', 'turtle']
// let counter = { id: 1 };

// setTimeout(animals, 500, pets, counter, callback)
// setInterval(animals, 1000, pets, counter, callback)
// console.log(animals(pets));

/*function animals(first, obj, cb) {
    let bestArr = [];
    
    // Base case: if the array is empty, return the result
    if (first.length === 0) return bestArr;
   
    // Get the last element of the array
    let popper = first.pop();
    
    // Check if the last element is a duplicate
    if (first.includes(popper)) {
        bestArr.push(popper);
        
        // Filter out other occurrences of the duplicate
        first = first.filter(ele => ele !== popper);
    }
    
    // Call the callback function
    cb();
    
    // Recursively call the function
    return bestArr.concat(animals(first, obj, cb));
}

let callback = () => {
    console.log('Is this the pet?');
}

let pets = ['kitten', 'dog', 'bunny', 'duck', 'duck', 'fox', 'kitten', 'turtle'];
let counter = { id: 1 };

// Call the function initially
console.log(animals(pets.slice(), counter, callback));



// function animals(first, obj, cb) {
//     let bestArr = [];

//     if (first.length === 0) return bestArr;

//     let popper = first.pop();

//     if (first.includes(popper)) {
//         bestArr.push(popper);
//         first = first.filter(ele => ele !== popper);
//     }

//     cb();

//     return bestArr.concat(animals(first, obj, cb));
// }

// let callback = () => {
//     console.log('Is this the pet?');
// };

// let pets = ['kitten', 'dog', 'bunny', 'duck', 'duck', 'fox', 'kitten', 'turtle'];
// let counter = { id: 1 };

// // Call the function initially
// console.log(animals(pets.slice(), counter, callback));

// // Set an interval using setInterval
// setInterval(() => {
//     console.log(animals(pets.slice(), counter, callback));
// }, 1000);

// // Call the function after a delay using setTimeout
// setTimeout(() => {
//     console.log(animals(pets.slice(), counter, callback));
// }, 500);



function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//This function getRandomNumber takes two arguments: min and max, and it returns a random integer between min and max, inclusive.
*/

function randomGenerator() {
    let interval = null;
    
    const startGenerating = () => {
        interval = setInterval(() => {
            const randomNumber = getRandomNumber(1, 100);
            console.log(`Generated random number: ${randomNumber}`);
        }, getRandomNumber(1000, 5000)); 
    };
    
    const stopGenerating = () => {
        clearInterval(interval);
        console.log('Random number generation stopped.');
    };
    
    console.log('Random number generator started.');
    
    
    startGenerating();
    
    
    setTimeout(() => {
        stopGenerating();
    }, getRandomNumber(10000, 20000));
}

randomGenerator();

/*function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
This function getRandomNumber takes two arguments: min and max,
\ and it returns a random integer between min and max, inclusive.


function randomGenerator() {
    let interval = null;
Here, we define the main function randomGenerator. We initialize
 a variable interval to store the reference to the interval
  we're going to set later.


    const startGenerating = () => {
        interval = setInterval(() => {
            const randomNumber = getRandomNumber(1, 100);
            console.log(`Generated random number: ${randomNumber}`);
       }, getRandomNumber(1000, 5000));
    };
Inside the randomGenerator function, we define a nested function
 startGenerating. This function uses setInterval to repeatedly execute 
 a callback function. The callback generates a random number between 1
  and 100 using getRandomNumber, logs it to the console, and the 
  interval between executions is also randomly determined between 1
   and 5 seconds using getRandomNumber.

    const stopGenerating = () => {
        clearInterval(interval);
        console.log('Random number generation stopped.');
    };
We define another nested function stopGenerating. 
This function clears the interval we set with setInterval,
 effectively stopping the random number generation. 
 It also logs a message to indicate that the generation has stopped.


    console.log('Random number generator started.');
A log message to indicate that the random number generator has
 been started.


    startGenerating();
We call the startGenerating function to begin generating 
random numbers at random intervals.


    setTimeout(() => {
        stopGenerating();
    }, getRandomNumber(10000, 20000));
After a random period (between 10 and 20 seconds), we call the stopGenerating function to stop the random number generation.


}
The closing curly brace that ends the randomGenerator function.*/