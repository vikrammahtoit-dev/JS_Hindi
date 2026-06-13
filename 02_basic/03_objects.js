// Object can be declared two ways: COnstructor and Literal
// Singleton
// Object.create

// Object literals

const mySym = Symbol("Key1");

const JsUser = {
   "name" : "Vikram",
   age : 24,
   [mySym]: "mykey1",
   location : "patna",
   email: "vikram@google.com",
   isLoggedIn : false, 
   lastLoginDays: ["Monday", "Thursday"]
}

console.log(JsUser.name);
console.log(JsUser["email"]);
console.log( JsUser[mySym]);

JsUser.email = "vikram@chatgpt.com";

// Object.freeze(JsUser);
// JsUser.email = "vikram@microsoft.com";

console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS  user")
}

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());