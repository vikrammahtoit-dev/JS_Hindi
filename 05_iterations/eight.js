const arr1 = [1, 2, 3, 4, 5];

const initialValue = 0;

const sumInitialValue = arr1.reduce((accumalator, currentValue) => accumalator + currentValue, initialValue);
console.log(sumInitialValue);