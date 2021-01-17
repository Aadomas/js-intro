const pirmas = 1;
console.log(pirmas);

const antras = 2;
console.log(antras);

const trecias = 3;
console.log(trecias);

console.log('-------------------------------');

const vienas = 'bananas';
console.log(vienas);

const du = 'apelsinas';
console.log(du);

const trys = 'agurkas';
console.log(trys);

console.log('-------------------------------');

const a = [1, 2, 3, 4, 5,];
console.log(a);
const b = [11, 22, 33, 44, 55,];
console.log(b);
const c = [111, 222, 333, 444, 555,];
console.log(c);

console.log('-------------------------------');

const x = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(x);
const y = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(y);
const z = ['vienas', 'du', 'trys', 'keturi', 'penki'];
console.log(z);

console.log('-------------------------------');

const suma = pirmas + antras + trecias;
console.log(pirmas, '+', antras, '+', trecias, '=', suma);

console.log('-------------------------------');

const sujungimas = vienas + ' ' + du + ' ' + trys
console.log(sujungimas);

console.log('-------------------------------');

const Arezultatas = a[0] - a[1] + a[2] - a[3] + a[4];
console.log('a =', Arezultatas)
const Brezultatas = b[0] - b[1] + b[2] - b[3] + b[4];
console.log('b =', Brezultatas);
const Crezultatas = c[0] - c[1] + c[2] - c[3] + c[4];
console.log('c =', Crezultatas);

console.log('-------------------------------');

console.log(z + ',' + y + ' ' + x);

console.log('-------------------------------');

const n = 4;
const m = 2;

if (n === m) {
    console.log('pomidoras');
} else {
    console.log('bandykite kita karta');
}

console.log('-------------------------------');

const x1 = 9;
const x2 = 9;

if (x1 > x2) {
    console.log('skaicius', x1, 'yra didesnis negu', x2);
} else if (x1 === x2) {
    console.log("skaiciai yra lygus", x1);
} else {
    console.log('skaicius', x2, 'yra didesnis negu', x1);
}

console.log('-------------------------------');

const tekstas1 = 'zodis turi daug prasmiu';
const tekstas2 = 'niekam prasmes neidomios';

if (tekstas1.length > tekstas2.length) {
    console.log("pirmas tekstas yra ilgesnis");
} else if (tekstas2.length === tekstas1.length) {
    console.log("tekstai yra lygus");
} else {
    console.log("antras tekstas yra ilgesnis");
}

console.log('-------------------------------');

const txt1 = ['pomidoras', 'aviete', "kede", "batai", "ratai"];
const txt2 = ['bulve', 'bananas', 'tulpe', 'medis'];
console.log(txt1.length);
console.log(txt2.length);
if (txt1.length > txt2.length) {
    console.log("pirmas sarasas yra ilgesnis");
} else if (txt2.length === txt1.length) {
    console.log("sarasai yra lygus");
} else {
    console.log("antras sarasa yra ilgesnis");
}
