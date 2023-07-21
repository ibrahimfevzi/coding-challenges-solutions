function solution(a) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    if (obj[a[i]]) {
      return a[i];
    } else {
      obj[a[i]] = 1;
    }
  }
  return -1;
}

/* Anlatım 
    1. obje oluşturuyoruz.
    2. for döngüsü ile a dizisinin elemanlarını obje içine atıyoruz.
    3. if ile obje içinde a[i] varsa a[i] yi return ediyoruz.
    4. yoksa obje içine a[i] yi atıyoruz.
    5. return -1 ile eğer a[i] yoksa -1 döndürüyoruz.
*/
