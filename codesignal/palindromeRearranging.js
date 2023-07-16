function solution(inputString) {
  const charCount = {};
  let oddCount = 0;

  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
  }

  for (const char in charCount) {
    if (charCount[char] % 2 === 1) {
      oddCount++;
    }
  }

  return oddCount <= 1;
}
