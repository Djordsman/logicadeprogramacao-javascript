let a = 5;
let b = 10;
//b = 5;
//a = 10;

// correção oficial:
a = a + b; 
b = a - b;
a = a - b;

console.log(`Variavel A: ${a}`);
console.log(`Variavel B: ${b}`);