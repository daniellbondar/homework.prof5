                                           // map 1

const people = [ 
    {
        name: 'Alice',
        age: 25
    },
    {
        name: 'Bob',
        age: 30
    },
    {
        name: 'Charlie',
        age: 35
    },
];

const newAge = people.map(person => ({
    name: person.name,
    age: person.age + 5
}))
console.log(newAge);



                                        // map 2

// const people = [
//     { name: 'Alice', 
//         age: 25
//     },
//     { name: 'Bob', 
//       age: 30 
//     },
//     { name: 'Charlie', 
//       age: 35 
//     }
// ]

// const names = people.map((person) => person.name);
// console.log(names);



                                           // filter 1

// const people = [
//     { name: 'Alice', age: 16 },
//     { name: 'Bob', age: 22 },
//     { name: 'Charlie', age: 15 }
// ]

// const adults = people.filter((people) => people.age > 18)
// console.log(adults);



                                           // filter 2

// const test = [
//     { name: 'Alice', voted: true },
//     { name: 'Bob', voted: false },
//     { name: 'Charlie', voted: true },
//     { name: 'Dave', voted: false }
// ]

// const trueAnswer = test.filter((test) => test.voted === true)
// console.log(trueAnswer);



                                           // filter 3

// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 62 },
//     { name: 'Charlie', grade: 74 },
//     { name: 'Dave', grade: 55 }
// ]

// const excellents = students.filter((students) => students.grade > 70)
// console.log(excellents);



                                           // forEach

// const products = [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 },
//     { name: 'Tablet', price: 300 }
// ]
 
// products.forEach((products) => {
//     products.discountedPrice = products.price * 0.9
// })
// console.log(products);

