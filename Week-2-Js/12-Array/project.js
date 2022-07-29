let isimler = ["Can", "Rıdvan", "Elif"];
// console.log(isimler[0]);

// isimler[1]='osman';
// console.log(isimler);

let yaslar = [43, 5, 6, 30];
console.log(yaslar[3]);

let rastgele = ["Can", "boz", 10, 15];
console.log(rastgele);

//Dizimin eleman sayısı

console.log(rastgele.length);

let tireli = isimler.join("-");
console.log(tireli);

let virgullu = isimler.join(", ");
console.log(virgullu);

let sire = isimler.indexOf('elif');
console.log(sira);

//Concat Mothodu(ana dizi değişmiyor)
let eklenmis = isimler.concat(['osman','merve']);
console.log(eklenmis);
console.log(isimler);

isimler.push('Leyla');
console.log(isimler);

isimler.pop();
console.log(isimler);

