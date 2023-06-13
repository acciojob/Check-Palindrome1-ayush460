// complete the given function

function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the string is equal to its reverse
  return s === s.split('').reverse().join('');
}

// Test the function
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("RaceCar")); // Output: true
console.log(isPalindrome("raceCAR")); // Output: true
