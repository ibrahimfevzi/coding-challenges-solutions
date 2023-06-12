function diagonalDifference(arr) {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i]; // Sol üstten sağ alta olan köşegenin elemanları
    rightSum += arr[i][arr.length - 1 - i]; // Sağ üstten sol alta olan köşegenin elemanları
  }

  return Math.abs(leftSum - rightSum); // Mutlak farkı döndür
}

// Örnek kullanım:
// const matrix = [
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12]
// ];
// const result = diagonalDifference(matrix);
// console.log(result); // Çıktı: 15
