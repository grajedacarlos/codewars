Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
  }

//My solution
function isPalindrome(x) {
    return x.toLowerCase == x.toLowerCase().split('').reverse().join('')// your code here
  }

//Best Practice
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }