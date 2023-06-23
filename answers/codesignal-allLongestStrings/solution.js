function solution(inputArray) {
  let longestLength = 0;
  let longestStrings = [];
  inputArray.forEach((element) => {
    if (element.length > longestLength) {
      longestLength = element.length;
      longestStrings = [element];
    } else if (element.length === longestLength) {
      longestStrings.push(element);
    }
  });
  return longestStrings;
}
