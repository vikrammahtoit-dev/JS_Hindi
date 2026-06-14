// Immediately Invoked Function Expression

(function chai(){
    console.log("DB Connected");
})();

// (function aurCode(){
//     console.log(`DB Connected Two`);
// })()

((name) => {
    console.log(`DB Connected Two ${name}`)
})("Vikram")
// ()()

//  global scope pollution se bachane ke liye iife use kiya jata hai.


// chai();