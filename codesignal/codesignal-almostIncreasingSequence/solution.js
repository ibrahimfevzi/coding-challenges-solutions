function solution(sequence) {
  let count = 0; // Çıkarılacak elemanların sayısı
  for (let i = 1; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++; // Dizi kesinlikle artan bir dizi oluşturmadığında sayacı artır
      if (count > 1) {
        return false; // Bir elemandan fazlasının çıkarılması gerekiyorsa false döndür
      }
      if (
        i > 1 &&
        i < sequence.length - 1 &&
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false; // Şu anki elemanın ve bir sonraki elemanın çıkarılmasıyla kesinlikle artan bir dizi oluşmuyorsa false döndür
      }
    }
  }
  return true; // En fazla bir elemanın çıkarılması gerekiyorsa true döndür
}
