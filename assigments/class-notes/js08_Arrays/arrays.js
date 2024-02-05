// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================

console.log("***** ARRAYS ******")

//* Dizi Tanimlama
//*-----------------------------------------------

//! 1-Square bracket ( Array Literal) yöntemi ile dizi tanımlama 
//! En çok tercih edilen yöntem
const names = [
  "Ahmet",
  "İsmet",
  "Saffet",
  "Can",
  true,
  6.6,
  [1, 3],
  "Ara Vakti",
]
console.log(names)
console.log("Uzunluk:", names.length)
console.log(typeof names) //* object

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------

console.log(names[3]) //? Can
console.log(names[4]) //? true
console.log(names[6][0]) //? 1


//? Dizinin son elemanını bir değişkene saklayalım

// const lastElement = names[7] //? hard-code
const lastElement = names[names.length - 1] //?
console.log(lastElement)

//? YAZMA
names[4] = "Canan"
console.log(names)

names[0] = "Mehmet"
names[5]++

names[2] = names[2].toLocaleLowerCase()
console.log(names)

//! arrays.js:46 Uncaught TypeError: Assignment to constant variable.
// names = [4, 6, 7]

// ! 2.Yöntem (Object Constructor)
const programmingLangs = new Array("GO", "JS", "Java")
console.log(programmingLangs)

//! 10 elemanlik bos bir Array olusturdu
//! eger constructora parametre olarak tek bir sayi(number) girilirse,
//! construtor bunu o sayida bir bellek alani acilacakmis gibi dusunur.
const myArr = new Array(10) //? [empty × 10]
console.log(myArr)

// ! 3.Yöntem (Array.of())
const sayilar = Array.of(4)
console.log(sayilar)