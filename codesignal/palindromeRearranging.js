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


//çözüm yöntemi şöyle:
// 1. inputString'deki her bir karakterin sayısını bul
// 2. tek sayıda karakter sayısı 1'den fazla ise false döndür
// 3. tek sayıda karakter sayısı 1 ise true döndür
// 4. tek sayıda karakter sayısı 0 ise true döndür
// 5. tek sayıda karakter sayısı 0'dan fazla ise false döndür

