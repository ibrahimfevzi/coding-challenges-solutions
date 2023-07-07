QUESTION NAME: Apple and Orange
Link: https://www.hackerrank.com/challenges/apple-and-orange/problem
"""

Çözümde, countApplesAndOranges adında bir fonksiyon tanımladık. Bu fonksiyon, belirli bir aralıkta düşen elmaların ve portakalların sayısını hesaplar. Fonksiyonun parametreleri şunlardır:

s ve t: Elma ve portakal sayımının yapılacağı aralığın başlangıç ve bitiş noktaları.
a ve b: Elmaların ve portakalların ağaçların bulunduğu konumdan olan uzaklıkları.
apples ve oranges: Elmaların ve portakalların ağaçtan düştükleri mesafelerin dizileri.
Fonksiyon, her elmayı ve portakalı forEach döngüsüyle kontrol eder ve her birinin son konumunu hesaplar. Son konum, ağaç konumuna mesafeyi ekleyerek bulunur. Ardından, son konumun aralıkta olup olmadığını kontrol eder ve elmaları ve portakalları sayar. Son olarak, appleCount ve orangeCount değerlerini yazdırır.

Örnek kullanımda, s, t, a, b, apples ve oranges değişkenlerini belirli bir senaryo için tanımladık. Daha sonra, countApplesAndOranges fonksiyonunu çağırdık ve sonuçları yazdırdık.

"""
