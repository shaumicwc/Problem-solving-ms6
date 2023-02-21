/*১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let 
দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।

২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো
। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */
// const obj1 = {
//     name: 'abul',
//     age: 21,
//     food: 'gu-khor',
//     location: '35/A, Abuilla Road'
// }
// let obj2 = {
//     name: 'babul',
//     age: 31,
//     food: 'khor',
//     location: '25/A, Babuilla Road'
// }
//  const string = `I am ${obj1.name}. My age is ${obj1.age}. I am a ${obj1.food}. My location is ${obj1.location}.`
//  console.log(string);

/*৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো। এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে।*/
// const division = num => num / 5;
// console.log(division(10))



/*৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল
 দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো */
// const sum = (num1, num2) => {
//     const sum1 = num1 + 2;
//     const sum2 = num2 + 2;
//     const result = sum1 * sum2;
//     return result;
// }
// const result = sum(2,2);
// console.log(result)

/*৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে গুণ করে সেই 
রেজাল্ট রিটার্ন করবে। */
// const multiply = (a, b, c) =>{
//     const multiply = a*b*c;
//     return multiply;
// };
// console.log(multiply(2,2,2))

// problem-3.4 as same as 3.2


/*৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ 
দিয়ে গুন্ করে গুনফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে*/
// const array = [33, 42, 57, 6, 21, 3, 97, 61];
// const newArray = [...array.map(element => element * 5)];
// console.log(newArray)


/*৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো */
// const array = [33, 42, 57, 6, 21, 3, 97, 62];
// const oddNumber = array.filter(element => element%2 !== 0);
// console.log(oddNumber);

/*৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */
// const array = [
//     { name: 'phone-1', price: 4999 },
//     { name: 'phone-2', price: 5000 },
//     { name: 'phone-3', price: 100000 }
//   ];
// const highestPriceObject = array.find((obj) => obj.price >= 5000);
// console.log(highestPriceObject);


/*৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। */
// const array = { name: 'phone-1', price: 4999 };
// const {price} = array;
// console.log(price)


/*৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' 
নামক একটা ভেরিয়েবল এ রাখবে। */
// const array = [
//     {id:1, name: 'phone-2', price: 5000 },
//     {id:2, name: 'phone-3', price: 100000 },
//     {id:3, name: 'phone-1', price: 4999 }
//   ];
// const [a, b, three] = array;
// console.log(three)


/*
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে।
 আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। */
// const sum = (a, b, c=7) => {
//     return a+b+c;}
// console.log(sum(1,2)) 


// ......optional

/*১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও 
সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )*/
// const object = {
//     name: 'kuttar-bacca',
//     age: 3,
//     location : {
//         road: '35/A',
//         flat: {
//             floor: '1st',
//             side: 'middle'
//         }
//     },
//     hobbies : ['running', 'swimming', 'playing fetch']
// };
// // object.hobbies = ['running', 'swimming', 'playing fetch'];
// console.log(object.location.fla?.floor)