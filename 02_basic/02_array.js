const marvel_heros = ["thor", "Ironman", "SpiderMan"];
const dc_heros = ["Batman", "Superman", "Flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);

// const allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);

// Spread Operator
// const all_newHeros = [...marvel_heros, ...dc_heros];
// console.log(all_newHeros);

// Flat 
// const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9,[4, 7, 2]]];
// const reusable_another_array = another_array.flat(Infinity);
// console.log(reusable_another_array);

console.log(Array.isArray("Vikram"));
console.log (Array.from("Vikram"));
console.log(Array.from({name: "Vikram"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));