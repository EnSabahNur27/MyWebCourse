let hobbies = new Array('DND', 'VideoGames', 'Ultimate');

function printHobbies(anArray)  {
    console.log(`I like 3 things:`);
    anArray.forEach(element => {
        console.log(`I like ${element}`);
    });
}

printHobbies(hobbies);

let myColor = ["Red", "Green", "White", "Black"];

console.log(`Formatted Array: ${myColor.join(',')}`);
console.log(`Formatted Array: ${myColor.join('+')}`);

let arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let uniqs = arr1.reduce((acc, val) => {
    acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
    return acc;
  }, {});
  console.log(uniqs);