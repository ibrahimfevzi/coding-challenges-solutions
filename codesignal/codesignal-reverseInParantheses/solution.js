function reverseString(str) {
  return str.split("").reverse().join("");
}

function solution(inputString) {
  let stack = [];
  let result = "";

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === "(") {
      stack.push(result);
      result = "";
    } else if (inputString[i] === ")") {
      result = reverseString(result);
      result = stack.pop() + result;
    } else {
      result += inputString[i];
    }
  }

  return result;
}

/*
Çözümü
İlk olarak, inputString içerisindeki parantezleri stack kullanarak çıkarıyoruz.
Parantezlerin içerisindeki stringi ters çevirip, stackten çıkardığımız string ile birleştiriyoruz.
Sonra da ters çevirdiğimiz stringi stackten çıkardığımız string ile birleştiriyoruz.
Son olarak da inputString içerisindeki parantezleri çıkardığımız için, geriye kalan stringi döndürüyoruz.
*/
