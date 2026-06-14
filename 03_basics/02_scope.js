// var c =300;

// let a = 300;

// if (true){
//     let a = 10;
//     const b = 20;
//     // var c = 30;

// }

// console.log(a);
// console.log(b);
// console.log(c);

// Function Scope

function one(){
    const username = "Vikram";
    
    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);

    two();
}

one()

if(true){
    const username = "Vikram";
    if(username === "Vikram"){
        const website = "youtube";
        console.log(username +website );
    }

    // console.log(website);

}

// console.log(username);


// ++++++++++++++++++++ interesting ++++++++++++++++++

-
-
-
console.log(addone(7))
function addone(num){
    return num + 1;
}

addTwo(5)
const addTwo = function(num){
    return num + 2;
}

