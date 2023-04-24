//Print odd numbers in an array using an anonymous function:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNums = arr.filter(function(num) {
  return num % 2 !== 0;
});

console.log(oddNums); // [1, 3, 5, 7, 9]

//Convert all the strings to title caps in a string array using an anonymous function:

const strArr = ['hello', 'world', 'javascript'];

const titleCapsArr = strArr.map(function(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(titleCapsArr); // ['Hello', 'World', 'Javascript']

//Sum of all numbers in an array using an anonymous function:

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce(function(acc, num) {
  return acc + num;
}, 0);

console.log(sum); // 15

//Return all the prime numbers in an array using an anonymous function:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = function(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const primeNums = arr.filter(function(num) {
  return isPrime(num);
});

console.log(primeNums); // [2, 3, 5, 7]

//Return all the palindromes in an array using an anonymous function:

const arr = ['racecar', 'hello', 'madam', 'world'];

const isPalindrome = function(str) {
  return str === str.split('').reverse().join('');
}

const palindromeArr = arr.filter(function(str) {
  return isPalindrome(str);
});

console.log(palindromeArr); // ['racecar', 'madam']

//Return median of two sorted arrays of the same size using an IIFE:

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];

const median = (function() {
  const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
  const len = mergedArr.length;
  return len % 2 !== 0 ? mergedArr[Math.floor(len / 2)] : (mergedArr[len / 2] + mergedArr[(len / 2) - 1]) / 2;
})();

console.log(median); // 4.5

//Remove duplicates from an array using an anonymous function:

const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = arr.filter(function(item, index) {
  return arr.indexOf(item) === index;
});

console.log(uniqueArr); // [1, 2, 3, 4, 5]

//Rotate an array by k times using an anonymous function:


const arr = [1, 2, 3, 4, 5];

const rotateArr = function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
};

//Print odd numbers in an array using an arrow function:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNums = arr.filter(num => num % 2 !== 0);

console.log(oddNums); // [1, 3, 5, 7, 9]

//Convert all the strings to title caps in a string array using an arrow function:


const strArr = ['hello', 'world', 'javascript'];

const titleCapsArr = strArr.map(str => str.charAt(0).toUpperCase() + str.slice(1));

console.log(titleCapsArr); // ['Hello', 'World', 'Javascript']

//Sum of all numbers in an array using an arrow function:


const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((acc, num) => acc + num, 0);

console.log(sum); // 15

//Return all the prime numbers in an array using an arrow function:


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isPrime = num => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const primeNums = arr.filter(num => isPrime(num));

console.log(primeNums); // [2, 3, 5, 7]

//Return all the palindromes in an array using an arrow function:


const arr = ['racecar', 'hello', 'madam', 'world'];

const isPalindrome = str => str === str.split('').reverse().join('');

const palindromeArr = arr.filter(str => isPalindrome(str));

console.log(palindromeArr); // ['racecar', 'madam']

