function solution(a) {
  const heights = [];

  // Adım 1: Ağaç olmayan değerleri heights dizisine ekleme
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      heights.push(a[i]);
    }
  }

  // Adım 2: heights dizisini sıralama
  heights.sort((a, b) => a - b);

  // Adım 3: Ağaç olmayan değerleri sıralanmış heights ile değiştirme
  let j = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== -1) {
      a[i] = heights[j];
      j++;
    }
  }

  return a;
}

// çözüm 2
function solution(a) {
  let heights = a.filter((h) => h !== -1).sort((a, b) => a - b);
  let j = 0;
  return a.map((h) => (h !== -1 ? heights[j++] : -1));
}
