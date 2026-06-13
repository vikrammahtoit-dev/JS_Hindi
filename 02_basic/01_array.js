// Array - contigous part of memory
// ways to declare array 

const myArr = [1,2,3,4,5];
const myHeros = ["Iron Man", "Spider Man", "Hulk", "THor"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[2]);

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(10);
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


//  Slice, Splice  

const myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C", myArr);