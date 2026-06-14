//  for each loop

// ["", "", ""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5];

// for (const element of arr) {
//     console.log(element);
    
// }

// const greetings = "Hello World";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Map s

const map = new Map();
map.set('In', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('In', "India");

console.log(map);

for (const [key , value]  of map) {
    console.log(key, ":-",  value);
    
}