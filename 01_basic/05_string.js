const name = "Vikram";
const repoCount = 58;
console.log(name + repoCount);


// String Interpolation ` `

console.log(`Hello my name is ${name} and my repoCount is ${repoCount }`);

const gameName = new String ("Vikram@101");
console.log(gameName[1]);
console.log(typeof gameName);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf("@"));

console.log(gameName.substring(0, 5));

const anotherString  = gameName.slice(-8, -3);
console.log(anotherString);

// trim()-> removes whitespaces from both the ends of the string
const newString = "   Hello Vikram   ";
console.log(newString.trim());

// url.replace()
