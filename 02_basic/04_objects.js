// const tinderUser  = new Object();

const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Vikram";
tinderUser. isLoggedIn = false;

 
console.log(tinderUser); 

const regularUser = {
    email : "vikram@google.com",
    fullname : {
        userfullname :{
            firstname : "Vikram",
            lastname : "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={
    1:"a",
    2: "b"
}

const obj2 ={
    3:"a",
    4: "b"
}

const obj4 = {
    5: "a",
    6: "b"
}

// const obj3  = {obj1, obj2};
// const obj3  = Object.assign({}, obj1, obj2, obj4);
// console.log(obj3);
// console.log(obj3 === obj2)

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
    {
        id: 4,
        email: "h@gmail.com"
    },
    {
        id: 5,
        email: "h@gmail.com"
    }
    

]

// users[1].email;

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object Destructuring 

const course = {
    coursename : "JavaScript",
    price :  5555,
    courseInstructor : "Hitesh"
}

const {courseInstructor: Instructor} = course;

console.log(Instructor);

// const navbar = ({company}) => {

// }

// navbar(company = "Logo")

// {
//     "name": "Vikram",
//     "courseNme": "JavaScript",
//     "price" : "free"
// }

[
    {},
    {},
    {},
    {},
    {}
]