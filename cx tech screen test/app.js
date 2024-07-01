// Question 1: Sorting in Descending Order
function descending() {
  const input = document.getElementById("sortInputArray").value;
  const array = parseInput(input);
  const sortedArray = bubbleSortDescending(array);
  document.getElementById(
    "sortResult"
  ).innerText = `Descending order: ${sortedArray.join(", ")}`;
}

function bubbleSortDescending(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        // Swap arr[j] and arr[j + 1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function parseInput(input) {
  const arr = input.split(",").map((num) => {
    const trimmedNum = num.trim();
    const parsedNum = parseInt(trimmedNum, 10);
    if (isNaN(parsedNum)) {
      throw new Error("Invalid number found in input");
    }
    return parsedNum;
  });

  if (arr.length < 2) {
    throw new Error(
      "Input should contain at least two valid numbers separated by commas"
    );
  }

  return arr;
}

// Question 2: Palindrome Checker
function checkPalindrome(str) {
  let cleanedStr = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char >= "a" && char <= "z") {
      cleanedStr += char;
    }
  }

  const len = cleanedStr.length;
  for (let i = 0; i < len / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkIfPalindrome() {
  const input = document.getElementById("palindromeInputString").value;
  const result = checkPalindrome(input);
  document.getElementById("palindromeResult").innerText = result
    ? "The string is a palindrome."
    : "The string is not a palindrome.";
}

// Question 3: Sum of Two Largest Numbers
function sumOfTwoLargest(arr) {
  if (arr.length < 2) {
    throw new Error("Array should have at least two numbers");
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  // Find the largest and second largest numbers
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return largest + secondLargest;
}

function calculateSum() {
  const input = document.getElementById("sumInputArray").value;
  const array = parseInput(input);

  try {
    const result = sumOfTwoLargest(array);
    document.getElementById(
      "sumResult"
    ).innerText = `Sum of the two largest numbers: ${result}`;
  } catch (error) {
    document.getElementById("sumResult").innerText = error.message;
  }
}

//Question 3 ends

//Question 4 Start
function findMissing() {
  const input = document.getElementById("inputArray3").value;
  const array = parseInput(input);

  try {
    const missingNumbers = findMissingNumbers(array);
    document.getElementById(
      "missingResult"
    ).innerText = `Missing numbers: ${missingNumbers.join(", ")}`;
  } catch (error) {
    document.getElementById("missingResult").innerText = error.message;
  }
}

function findMissingNumbers(arr) {
  if (arr.length === 0) {
    return [];
  }

  const maxNum = Math.max(...arr);
  const numSet = new Set(arr);
  const missingNumbers = [];

  for (let i = 0; i <= maxNum; i++) {
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
}

function parseInput(input) {
  const arr = input.split(",").map((num) => {
    const trimmedNum = num.trim();
    if (!trimmedNum) {
      throw new Error(
        "Input should contain at least two valid numbers separated by commas"
      );
    }
    const parsedNum = parseInt(trimmedNum, 10);
    if (isNaN(parsedNum)) {
      throw new Error("Invalid number found in input");
    }
    return parsedNum;
  });

  const validNumbers = arr.filter((num) => !isNaN(num));

  if (validNumbers.length < 2) {
    throw new Error(
      "Input should contain at least two valid numbers separated by commas"
    );
  }

  return validNumbers;
}

//Question 4 Ends

//Question 5 starts
function findMostRepeated() {
  const input = document.getElementById("inputArray4").value;
  try {
    const array = parseInput(input);
    if (array.length < 2) {
      throw new Error(
        "Input should contain at least two valid numbers separated by commas"
      );
    }
    const result = findMostRepeatedNumber(array);
    document.getElementById("mostRepeatedResult").innerText = result;
  } catch (error) {
    document.getElementById("mostRepeatedResult").innerText = error.message;
  }
}

function findMostRepeatedNumber(arr) {
  if (arr.length === 0) {
    throw new Error("Array should not be empty");
  }

  // Object to store frequency of each number
  const frequencyMap = {};

  // Iterate through the array to count occurrences
  arr.forEach((num) => {
    if (frequencyMap[num]) {
      frequencyMap[num]++;
    } else {
      frequencyMap[num] = 1;
    }
  });

  // Find the number with the highest frequency
  let mostRepeatedNum;
  let maxFrequency = 0;

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      mostRepeatedNum = num;
      maxFrequency = frequencyMap[num];
    }
  }

  return `${mostRepeatedNum} is repeated ${maxFrequency} times.`;
}

function parseInput(input) {
  // Remove any whitespace and split by commas
  const arr = input.split(",").map((num) => {
    // Convert trimmed number string to integer
    const trimmedNum = num.trim();
    if (!trimmedNum) {
      throw new Error(
        "Input should contain at least two valid numbers separated by commas"
      );
    }
    const parsedNum = parseInt(trimmedNum, 10);
    if (isNaN(parsedNum)) {
      throw new Error("Invalid number found in input");
    }
    return parsedNum;
  });

  // Remove NaN entries
  const validNumbers = arr.filter((num) => !isNaN(num));

  if (validNumbers.length < 2) {
    throw new Error(
      "Input should contain at least two valid numbers separated by commas"
    );
  }

  return validNumbers;
}
//Question 5 ends

//Question 6 Starts

function rotateArrayRight(arr) {
  if (arr.length <= 1) {
    return arr; // No need to rotate if array has 0 or 1 element
  }

  const lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}
function rotateArray() {
  const input = document.getElementById("inputArray5").value;
  try {
    const array = parseInput(input);
    if (array.length <= 1) {
      throw new Error("Array should have at least two numbers to rotate");
    }
    const rotatedArray = rotateArrayRight(array);
    document.getElementById(
      "rotateResult"
    ).innerText = `Rotated Array: [${rotatedArray.join(", ")}]`;
  } catch (error) {
    document.getElementById("rotateResult").innerText = error.message;
  }
}
