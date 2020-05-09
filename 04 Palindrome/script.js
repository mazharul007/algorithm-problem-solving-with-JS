/**Given a word, return  true if it is a palindrome, 
 **otherwise return false
A palindrome is a word which reads the same backward as forward
e.g. racecar.**/
// --Examples 
// isPalindrome('orange') === 'egnaro'
// isPalindrome('racecar') === 'racecar'

//solution
let isPalindrome = str=>{
    return str.split('').every((element, index)=>{
        return element === str[str.length - index -1];
    });
}
console.log(isPalindrome('racecar'));

// another solution
let isPalindromeTwo = str=>{
    const reversedStr = str
        .split('')
        .reverse()
        .join('');
        return str === reversedStr;
}
console.log(isPalindromeTwo('orange'))
