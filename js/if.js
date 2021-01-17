// palyginimas
/*
nenaudotini: == !=
naudotini: < > <= => === 1==
operatoriai:

if (jei tenkina salyga)
else (jei netinkama)

Sablonai:
if () {}
if () {} else {}
*/

const a = 4;
const b = 2;

if (a > b) {
    console.log('taip');
} else {
    console.log('ne');
}

console.log('-------------------------------------');

const spalva = 'asfasf';

if (spalva === 'melyna') {
    console.log('Arijai!');
} else if (spalva === 'zalia') {
    console.log('gerai slepiasi zolej');
} else if (spalva === 'rudos') {
    console.log('angry bird');
} else if (spalva === 'raudonos') {
    console.log('Turbut programuotojas...');
} else {
    console.log('a tu turi akis?');
}

console.log('------------------');

const moneta = '';

if (moneta === 'skaicius') {
    console.log('iskrito skaicius');
} else {
    if (moneta === 'herbas') {
    console.log('iskrito herbas');
    } else {
        if (moneta === 'briauna')  {
            console.log('moneta nukrito ant briaunos');
        } else {
            console.log('tai moneta vis dar ore?');
        }
    }
}

