const notas = [7, 7, 8, 9];
const novasNotas = [5, ...notas, 10];

//const novasNotas = notas; Se alterar um, vai alterar o outro.

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);