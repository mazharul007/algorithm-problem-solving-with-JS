/* Write a short program that prints each number from 1 to 50 on a new line. 

For each multiple of 3, print "Fizz" instead of the number. 

For each multiple of 5, print "Buzz" instead of the number. 

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.*/


//solution one
const fizzBuzz = (number)=>{
    for (let i = 1; i<number; i++) {
        if(i % 3 === 0 && i % 5 === 0) console.log ("FizzBuzz");
        else if(i % 3 === 0) console.log ("Fizz");
        else if(i % 5 === 0) console.log("Buzz");
        else console.log(i);
    }
}
console.log(fizzBuzz(50));

//solution two
const fizzBuzz2 = (number)=>{
    for (var i = 1; i <= number; i++) {
        var f = i % 3 == 0, b = i % 5 == 0;
        console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    }
}

console.log(fizzBuzz2(50));



