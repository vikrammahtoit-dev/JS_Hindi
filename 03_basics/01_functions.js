// function sayMyName(){
// console.log("v");
// console.log("i");
// console.log("k");
// console.log("r");
// console.log("a");
// console.log("m");

// }

// sayMyName();

// function addTwoNumbers(num1, num2){
//     // return num1+num2;
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    let result = num1+num2;
    // console.log("Vikram");
    return result;
    // console.log("Vikram");
    
}


// console.log(addTwoNumbers(2,3));
const result = addTwoNumbers(2,3);
// console.log("Result:", result);

function loginUserMessage(username = "sammy"){
    if(!username){
        console.log("Please enter username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vikram"))
console.log(loginUserMessage());

// function with object
function calculateCartPrice(val1, val2,...num1){
    return val1, val2, num1;
}

console.log(calculateCartPrice(200, 400, 500));

const user = {
    username :"hitesh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user);

handleObject({
    username: "Sammy",
    price: 399
});

const myNewArray = [200, 400,100, 500];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(200, 100, 400, 600));