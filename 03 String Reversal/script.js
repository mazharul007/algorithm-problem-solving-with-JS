// --Direction
/**Given a string,return a new string with the reversed 
order of characters**/
// --Examples 
// reverse('orange') === 'egnaro'
// reverse('cow') === 'woc'

// solution 
let reversedString = str=>{
    return str.split('').reduce((rev,char)=> char + rev,'');
}
console.log(reversedString('orange'));


// solution using built in method
let reverse =str=>{
    return str.split('').reverse().join('');
    
}
console.log(reverse('orange'));


// solution using for loop 
let reversedStringX = str=>{
    let reversed= "";
    for(let char of str){
        reversed = char + reversed;
    }
    return reversed;
}
console.log(reversedStringX('orange'));

