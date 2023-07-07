function flippingMatrix(matrix) {
  const n = matrix.length;
  const flippedMatrix = [];

  // matrisin yarısını döngüye sokuyoruz ve her bir elemanın karşılığı olan en büyük elemanı flippedMatrix dizisine ekliyoruz.
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      const top = matrix[i][j];
      const bottom = matrix[n - i - 1][j];
      const right = matrix[i][n - j - 1];
      const left = matrix[n - i - 1][n - j - 1];

      const maxElement = Math.max(top, bottom, right, left);
      flippedMatrix.push(maxElement);
    }
  }

  // flippedMatrix dizisindeki tüm elemanları toplayıp sonucu döndürüyoruz.
  return flippedMatrix.reduce((sum, element) => sum + element, 0);
}
