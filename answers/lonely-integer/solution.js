function lonelyinteger(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    // XOR işlemi kullanarak tekrarlanmayan elemanı buluyoruz
    result ^= a[i];
  }
  return result;
}

//  Bu fonksiyon, verilen dizi içinde tekrarlanmayan (yalnız) bir elemanı
//  bulmak için XOR işlemini kullanır.Dizi üzerinde bir döngü ile XOR işlemi uygulanır ve
//   sonuç elde edilir.XOR işlemi, iki aynı değeri XOR'ladığında sonuç sıfır olacağından,
//    yalnızca bir kez geçen elemanlar sonuçta kalır.
// Örnek kullanım:
// const array = [1, 2, 3, 2, 1];
// const result = lonelyinteger(array);
// console.log(result); // Çıktı: 3

// Yukarıdaki örnekte, [1, 2, 3, 2, 1] dizisinde yalnızca bir kez geçen eleman 3 olduğu için çıktı 3 olacaktır.
