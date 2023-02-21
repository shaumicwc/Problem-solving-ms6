// problem-1
// method 1
// const array = [1, 3, 5, 7, 9];
// const even = array => {
//     const evenArray = [];
//     for(let i = 0; i < array.length; i++){
//         const element = array[i];
//         evenArray.push(element + 1);
//     }
//     return evenArray;
// }
// const result = even(array);
// console.log(result);

// method-2
// const array = [1, 3, 5, 7, 9];
// const even = array.map(element => {
//     return element + 1;
// })
// console.log(even);

// problem-2
// const array = [33, 50, 79, 78, 90, 101, 30];
// const filter = array.filter(num => num % 10 === 0)
// console.log(filter);

// problem-3
// const array = [33, 50, 79, 78, 90, 101, 30];
// const find = array.find(num => num % 10 === 0)
// console.log(find);

// problem-4
// method-1
// const array = [1, 9, 17, 22];
// const sumOfArray = array => {
//     let totalSum = 0;
//     for(let number of array){
//         totalSum = totalSum + number;
//     }
//     return totalSum;
// }
// const result = sumOfArray(array)
// console.log(result);

// method-2
// const array = [1, 9, 17, 22];
// const sum = array.reduce((a,b) => a + b, 0)
// console.log(sum);

// problem-5
// method-1
// const pepole = [
//     {name: 'Menna', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22}
// ];
// const ageSum = array =>{
//     let ageArray = [];
//     let sum = 0;
//     for(const element of array){
//         const age = element.age;
//         ageArray.push(age);
//     }
//     for(const element of ageArray){
//         sum = sum + element;
//     }
//     return sum;
// }
// const result = ageSum(pepole);
// console.log(result)

// method-2
// const people = [
//     {name: 'Menna', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22}
// ];

// const ageSum = people.reduce((total, person) => {
//     return total + person.age;
// }, 0);

// console.log(ageSum);