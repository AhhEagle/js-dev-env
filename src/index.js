import numeral from 'numeral';

const courseValue = numeral(100).format('$0.00.00');
console.log(`I would pay ${courseValue} for this awesome course`);