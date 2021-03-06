function numLength(number) {
    // validation
    if (typeof number !== 'number') {
        return 'ERROR: reikia skaiciaus.';
    }
    if (!isFinite(number)) {
        return 'ERROR: turi buti tikras skaicius.';
    }

    // logic
    const numberAsString = '' + number;
    let length = numberAsString.length;

    if (number < 0) {
        length--;
    }
    if (number % 1 !== 0) {
        length--;
    }

    // return
    return length;
}

console.log(numLength(true));
console.log(numLength('asd'));
console.log(numLength(NaN));
console.log(numLength(-NaN));
console.log(numLength(Infinity));
console.log(numLength(-Infinity));
console.log(numLength([]));
console.log(numLength([8415]));
console.log(numLength([8415, 541]));
console.log(numLength(['gasg']));
console.log(numLength(['gasg', true]));

console.log(numLength(5), '->', 1);
console.log(numLength(781), '->', 3);
console.log(numLength(37060123456), '->', 11);
console.log(numLength(-5), '->', 1);
console.log(numLength(-781), '->', 3);
console.log(numLength(-37060123456), '->', 11);
console.log(numLength(5.123), '->', 4);
console.log(numLength(781.123), '->', 6);
console.log(numLength(37060123456.123), '->', 14);
console.log(numLength(-5.123), '->', 4);
console.log(numLength(-781.123), '->', 6);
console.log(numLength(-37060123456.123), '->', 14);

console.log(numLength(100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), '->', 90);
console.log(numLength(-100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), '->', 90);
console.log(numLength(0.00000000000000000000000000000000000000000000001), '->', 48);
console.log(numLength(-0.00000000000000000000000000000000000000000000001), '->', 48);