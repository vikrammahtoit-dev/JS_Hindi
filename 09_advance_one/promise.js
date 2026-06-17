// The Promise objects is an eventual completion (or a failure ) of an asynchronous task  and its resulting value.
const promiseOne = new Promise(function(resolve, reject){
    // DO an async task
    // DB calls, Cryptography
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    }, 1000);
});

promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout( function(){
        resolve({username:"Vikram", email: "vikram@gmail.com"})
    },1000);
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "Vikram", password : "123456"});
        }
        else{
            reject('Error: Something went wrong');
        }
    }, 1000)
});

promiseFour
.then( (user) => {
    console.log(user);
    return user.username
})
.then( (username) => {
    console.log(username);
})
.catch( function(err){
    console.log(err);
})
.finally( () =>{
    console.log("The promise is either resolved or rejected");
})


const promiseFive = new Promise(function(resolve, reject){
     setTimeout(function(){
        let error = true ;
        if(!error){
            resolve({username: "JavaScript", password : "123456"});
        }
        else{
            reject('Error: JS went wrong');
        }
    }, 1000)
});

async function consumePromiseFive(){
   try{
    const response =  await promiseFive;
   console.log(response);
   } catch(err){
    console.log(err);
   }
}

consumePromiseFive();


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers( )

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// fectch() => A fetch() promise only rejects when a network error is encountered
//             (which is usually when there is a permission issue or similar ).
//            A fetch promise does not reject on HTTP errors(404, etc).Intead, a then() handler must check the Response.ok and/or Respoinse.status properties.



