let x,y,z;

x=10; y="10"; z=30;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX= x++;
console.log('newX :', newX);

console.log(`x===y ${x==y}`);

let timeInMs = Date.now();
console.log('timeInMs :', timeInMs);

const dayInMs=24*60*60*1000;
const monthInMs = 31*dayInMs;
const yearInMs = 12*monthInMs;

console.log(`Years since epoch: ${timeInMs/yearInMs}`);
console.log(`Months since epoch: ${timeInMs/monthInMs}`);
console.log(`Days since epoch: ${timeInMs/dayInMs}`);
