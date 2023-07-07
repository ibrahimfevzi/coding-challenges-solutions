function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let appleCount = 0;
  let orangeCount = 0;

  apples.forEach((apple) => {
    const position = a + apple;
    if (position >= s && position <= t) {
      appleCount++;
    }
  });

  oranges.forEach((orange) => {
    const position = b + orange;
    if (position >= s && position <= t) {
      orangeCount++;
    }
  });

  console.log(appleCount);
  console.log(orangeCount);
}

// Örnek kullanım
const s = 7;
const t = 11;
const a = 5;
const b = 15;
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);
