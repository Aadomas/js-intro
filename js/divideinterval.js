"use strict";

const from = 0;
const till = 11;
const divider = 5;

let count = 0;

for (let i = from; i <= till; i++) {
    if (i % divider === 0) {
        count++;
    }
}
const ats = `skaiciu intervale nuo ${from} ir ${till}, besidalijanciu be liekanos is ${divider} yra ${count} vienetai.`;

console.log(ats);

console.log("----------------------------------------------");

const from2 = 0;
const till2 = 11;
const divider2 = 7;

let count2 = 0;

for (let i = from2; i <= till2; i++) {
    if (i % divider2 === 0) {
        count2++;
    }
}
const ats2 = `skaiciu intervale nuo ${from2} ir ${till2}, besidalijanciu be liekanos is ${divider2} yra ${count2} vienetai.`;

console.log(ats2);

console.log("----------------------------------------------");













