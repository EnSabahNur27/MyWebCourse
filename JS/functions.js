function displayName( s)  {
    console.log(`Hello, ${s}`);
}

displayName("Your name");


function convertFToC (f)  {
    return ((f-32)*5/9);
}
function convertCToF(c)  {
    return (c*9/5+32);
}

console.log(`212F = ${convertFToC(212)}C`);
console.log(`60C = ${convertCToF(60)}C`);