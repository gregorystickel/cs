// 1. Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

function addToZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length > 2) {
      for (let j = 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 0) {
          return true;
        }
      }
    }
  }
  return false;
}
// Time Complexity O(n^2)
// Space Complexity O(1)

console.log("addToZero");
console.log(addToZero([])); // -> False
console.log(addToZero([1])); // -> False
console.log(addToZero([1, 2, 3])); // -> False
console.log(addToZero([1, 2, 3, -2])); // -> True

//2. Unique Characters
//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.
function hasUniqueChars(str) {
  if (new Set(str).size == str.length) {
    return true;
  } else {
    return false;
  }
}

// Time Complexity  O(n)
// Space Complexity O(1)

console.log("hasUniqueChars");
console.log(hasUniqueChars("Monday")); // -> True
console.log(hasUniqueChars("Moonday")); // -> False

//3. Pangram Sentence
//A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
//Write a function to check a sentence to see if it is a pangram or not.
function isPangram(string) {
  let str = string.toLowerCase();
  let lettersArr = "abcdefghijklmnopqrstuvwxyz".split("");
  for (let i = 0; i < lettersArr.length; i++) {
    if (str.indexOf(lettersArr[i]) < 0) {
      return false;
    }
  }
  return true;
}

// Time Complexity O(n^2)
// Space Complexity O(1)

console.log("isPangram");
console.log(isPangram("The quick brown fox jumps over the lazy dog!")); // -> True
console.log(isPangram("I like cats, but not mice")); // -> False

//4. Longest Word
//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.
function findLongestWord(arr) {
  let firstWord = arr[0];
  let secondWord = arr[1];
  let word1 = Array.from(firstWord);
  let word2 = Array.from(secondWord);
  if (word1.length > word2.length) {
    return word1.length;
  } else {
    return word2.length;
  }
}

// Time Complexity  O(n^2)
// Space Complexity O(1)

console.log("findLongestWord");
console.log(findLongestWord(["hi", "hello"])); // -> 5
