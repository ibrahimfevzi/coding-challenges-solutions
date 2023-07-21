// asal sayıları bulan fonksiyonu yazınız.

function asalSayiBul(sayi) {
  var asalMi = true;
  for (var i = 2; i < sayi; i++) {
    if (sayi % i === 0) {
      asalMi = false;
    }
  }
  if (asalMi) {
    console.log(sayi);
  }
}

// fibonacci sayılarını bulan fonksiyonu yazınız.

function fibonacci(sayi) {
  let sayi1 = 0;
  let sayi2 = 1;
  let toplam = 0;
  for (let i = 0; i < sayi; i++) {
    console.log(sayi1);
    toplam = sayi1 + sayi2;
    sayi1 = sayi2;
    sayi2 = toplam;
  }
}

// 1'den 100'e kadar olan sayıları ekrana yazdırın. Ancak;
// sayı 3'ün katı ise ekrana "Fizz" yazdırın.
// sayı 5'in katı ise ekrana "Buzz" yazdırın.
// sayı hem 3'ün hem de 5'in katı ise ekrana "FizzBuzz" yazdırın.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//abstraction nedir
// Abstraction, bir nesnenin detaylarını gizlemek ve sadece gerekli olan özellikleri göstermektir.

// encapsulation nedir
// Encapsulation, bir nesnenin özelliklerini ve fonksiyonlarını bir arada tutmaktır.

// inheritance nedir
// Inheritance, bir nesnenin özelliklerini başka bir nesneye aktarmaktır.

// polymorphism nedir
// Polymorphism, bir nesnenin farklı şekillerde davranabilmesidir.

//composition nedir
// Composition, bir nesnenin başka nesneleri kullanabilmesidir.
//örnek olarak bir arabanın tekerleği, motoru, direksiyonu, koltukları gibi parçaları vardır.
// bu parçaları bir araya getirerek bir araba oluştururuz. bu durumda araba parçaları kullanmış olur.
// bu durum composition örneğidir.

// inheritance ve composition arasındaki fark nedir
// Inheritance, bir nesnenin özelliklerini başka bir nesneye aktarmaktır.
// Composition, bir nesnenin başka nesneleri kullanabilmesidir.

//overriding nedir
// Overriding, bir nesnenin başka bir nesnenin fonksiyonunu değiştirmesidir.

//overloading nedir
// Overloading, bir nesnenin aynı isimde farklı fonksiyonlara sahip olmasıdır.

//static nedir
// Static, bir nesnenin özelliklerinin değiştirilememesidir.

//redux nedir
// Redux, bir state yönetim kütüphanesidir.

//redux'un 3 temel prensibi nedir
// 1. Tek bir state nesnesi vardır. Bu state nesnesi, tüm uygulama boyunca tek bir yerde tutulur.
// 2. State nesnesi sadece read-only'dir.
// 3. State nesnesi sadece pure fonksiyonlar tarafından değiştirilebilir.

//context api nedir
// Context API, React tarafından sağlanan bir state yönetim sistemidir.

//context api'nin redux'tan farkı nedir
// Redux, bir state yönetim kütüphanesidir.
// Context API, React tarafından sağlanan bir state yönetim sistemidir.

//prop drilling nedir
// Prop drilling, bir componentten başka bir component'e props geçirmektir.

sayilar = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//verieln sayilardan soralamada olmayan sayıyı bulan fonksiyonu yazınız.
function eksikSayiBul(sayilar) {
  let eksikSayi = 0;
  for (let i = 1; i <= sayilar.length; i++) {
    if (sayilar.indexOf(i) === -1) {
      eksikSayi = i;
    }
  }
  return eksikSayi;
}


