// const user = {
//     username : "vikram",
//     loginCount : 8,
//     signedIn : true,

//     getUserdetails : function(){
//         console.log("Got user details from database");
//         // console.log(`username : ${this.username}`);
//         console.log(this);
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this);


// const promiseOne = new Promise();
// const date  = new Date()

function user(username, loginCount, isLoggedIn) {
      this.username = username
      this.loginCount = loginCount
      this.isLoggedIn  = isLoggedIn

      this.greeting = function(){
        console.log(`Welcome ${this.username}`)
      }

    //   return this;

}

const person1 = new user("vikram", 9, true);
const person2 = new user('Deepak', 12, true);
// console.log(person1);
// console.log(person2);

console.log(person1.constructor);



//  When we use new keyword
// 1. it create an empty object 
// 2. use with constructor functon to bind the variable into object 
// 3. Every argument  come into an object 

