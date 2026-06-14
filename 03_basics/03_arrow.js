const user = {
    username : "Vikram",
    price : 888,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let username = "hitesh";
//     console.log(this.username);
// }

// chai();

// this works with only object and not with function that's why arrow function is required to use the current context.

// const chai = function(){
//     let username = "Vikram";
//     console.log(this.username);
// }

// chai();



const chai = () => {
     let username = "hitesh";
    console.log(this);

}

chai();

// const addTwo = (num1,num2) =>{
//     return num1 + num2 ;
// }


// console.log((addTwo(3, 5)));

const addTwo = (num1,num2) => num1 + num2 ;



console.log((addTwo(3, 5)));
