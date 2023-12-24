// var x=2;
// console.log(x);
// a();
// b();

// function a(){
//     x=10;
//     console.log(x);
// }
// function b(){
//     var x=100;
//     console.log(x);
// }




// var a=10;
// function b(){
//     var x=10;
// }
// console.log(window.a);
// console.log(a);
// console.log(this.a);


// function a(){
//     var b=10;
//     c();
   
//     function c(){
//         console.log(b);
//     }
    
// }

// a();




// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }
// console.log(a);
//     console.log(b);
//     console.log(c);



// const c=100;
// function x(){
//     const c=30;
//     console.log(c);
// }
// x();
// console.log(c);




// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();



// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// var z=x();
// console.log(z);
// z();



// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// var z=x();
// console.log(z);
// z();



// function z(){
//     var b=900;
//     function x(){
//         var a=7;
//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
    
// }
// z();


/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
// let student={name:"pradeep",age:20,college=};

// var a=10;
// {
    
//     let a="pradeep";
//     console.log(a,"this is function a");

// }

// console.log(a,"this is a");
// a=2+5;
// console.log(a,"this is second a");
// function outer(){
//     var a=7;
//     function inner(){
//         // console.log(a);
//         // return a;

//     }
//     return inner;
// }
// var z=outer();
// console.log(z);
// z();
// var i=1;
// setTimeout(function(){
//     console.log(i,"1 i");

// },5000)
// i=100;
// function outer(){
  
//     setTimeout(function(){
//         console.log(i,"2 i");
//     },3000)
//     console.log("pradeep");

// }

// outer();
// i=200;
// console.log(i," 3i");
// function outer(){
//     for(let i=1;i<=5;i++){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000);
//     }
//     console.log("pradeep");
// }

// outer();
// function counter(){
//     var count=0;
//     return function increamentcounter(){
//         count++;
//         console.log(count);
//     }
// }
// var counter1=counter();
// counter1();
// counter1();
// var counter2=counter();
// counter2();


// {
//     var b=10;
//     b=20;
//     var b=30;
//     let c=10;
//     c=20;
//     let c=40;
// console.log(b);
// }
// demo();
// console.log("start");
// setTimeout(function cbt(){
//     console.log("cb timeout");
// },5000);
// fetch("http:/api.netflix.com").then(function cbf(){
//     console.log("cb netflix");
// });
// console.log("end");

// console.log("start");

// document.getElementById("btn").addEventListener("click", function cb() {
//     console.log("callback");
// });

// console.log("end");
// function x(){
//     console.log("n");
//     let a=2;


//     return a;
// }
// function y(x,a){
//     let b=x();
//     console.log(b+a);
// }

// y(x,1);
// const radius=[3,1,2,4];
// const area=function(radius){
//     return Math.PI*radius*radius;
// };
// const calculate=function(radius,logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }
// console.log(calculate(radius,area));
// const arr=[5,1,3,2,6];
// function double(x){
//     return x.toString(1);

// }
// const output=arr.map(double);
// console.log(output);
// const arr=[5,1,3,2,6];
// function isodd(x){
//     return x%2==0;
// }
// const output=arr.filter(isodd);
// console.log(output);


// const arr = [5, 1, 3, 2, 6];

// const output=arr.reduce(function(acc,curr){
//     acc=+curr;
//     return acc;

// },0);
// console.log(output)
// const object={}
// const array=[]



// const users = {
//     { firstName: "akshay", lastName: "saini", age: 26 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "deepika", lastName: "padukone", age: 26 }
// };
  
  
//   const output = users.map(function(x) {
//     return x.firstName + " " + x.lastName;
//   });
  
//   console.log(output);




// const users = [
//     { firstName: "akshay", lastName: "saini", age: 26 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "deepika", lastName: "padukone", age: 26 }
//   ];
  
//   const ageCounts = users.reduce(function(acc, curr) {
//     if (acc[curr.age]) {
//       acc[curr.age] = acc[curr.age] + 1;
//     } else {
//       acc[curr.age] = 1;
//     }
//     return acc;
//   }, {});
  
//   console.log(ageCounts)

// const users = [
//     { firstName: "akshay", lastName: "saini", age: 26 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "donald", lastName: "trump", age: 75 },
//     { firstName: "deepika", lastName: "padukone", age: 26 }
//   ];
  
//   const output = users.filter(function(user) {
//     return user.age < 30;
//   });
  
//   console.log(output);

// const originalArray = [1,2,3,4]; 

// const reversedArray=originalArray.map(function(value,index,array) {
//   return array[array.length-1-index];
// });

// console.log(originalArray);
// console.log(reversedArray);




// const array = [1,2,2,3,4,4,5];

// const uniqueArray = array.filter(function(value, index, self) {
//   return self.indexOf(value)===index;
// });

// console.log(uniqueArray);



// function findDuplicates(arr) {
//   return arr.filter(function(element, index, array) {
//     return array.indexOf(element)!==index;
//   });
// }

// const myArray = [1,2,2,3,4,40];

// const duplicateElements=findDuplicates(myArray);

// console.log(duplicateElements);



// function divideArray(arr) {
//   const middle=Math.floor(arr.length/2);
//   const firstHalf=arr.slice(0, middle);
//   const secondHalf=arr.slice(middle);
//   return [firstHalf,secondHalf];
// }

// const originalArray = [1,2,3,4,5,6,7,8];

// const [firstHalf,secondHalf]=divideArray(originalArray);

// console.log(firstHalf);
// console.log(secondHalf);




// function isPrime(num) {
//   if (num<=1) {
//     return false;
//   }

//   for (let i=2;i<num;i++) {
//     if (num%i===0) {
//       return false;
//     }
//   }

//   return true;
// }

// const numbers = [2,3,4,5,6,7,8,9,10];

// for (let i=0;i<numbers.length;i++) {
//   if (isPrime(numbers[i])) {
//     console.log(numbers[i]);
//   }
// }




// let arr = [5,4,4,2,1,3];


// for (let i=0;i<arr.length;i++) {
  
//     if (arr[i]<arr[i+1]) {
//       let temp=arr[i];
//       arr[i]=arr[i+1];
//       arr[i+1]=temp;
//       i=-1;
//     }
//   }
//   console.log(arr);

// const numbers = [4, 4, 7, 1, 9, 3];
// numbers.sort((a, b) => b+a);
// console.log(numbers); // [1, 2, 3, 4, 7, 9]



// console.log(arr);




// const fruits = ["apple", "banana", "orange"];
// console.log(fruits[0]); 
// fruits.push("grape");  
// fruits.length;         





// const person = {
//   name: "John",
//   age: 30,
//   isStudent: false
// };

// console.log(person.name);       
// console.log(person['age']);    
// person.city = "New York";       
// delete person.isStudent;       
// console.log(person);
    







// let p=new Promise((resolve,reject) => {
//     let a=1+1
//     if (a==2) {
//     resolve("Success")
//      } else {
//      reject("Failed")
//     }
//     })
    
    
//     p.then((message)=>{
//     console.log("This is in the then" + message)
//     }).catch((message)=>{
//     console.log("This is in the catch "+message)
//     })




// let names=["rahul","neha","aman","rishi"];
// for(let index in names){
//     console.log(index,names[index]);
// }


// const course={
//     lecture:10,section:3,title:"js",
//     notes:{
//         introduction:"welcome to js"
    
//     },
//     enroll(){
//         console.log("enrolled successfully");
//     }
// }
// course.enroll()

// course.price=999
// console.log(course)
// delete course.price
// console.log(course)



// function createCourse(title){
//     return{
//         title:title,
//         enroll(){
//             console.log("successfully enrolled");
//         }
//     }
// }
// const course=createCourse('js');
// course.enroll()
// console.log(course)



// function Course(title){
//     this.title=title,
//     this.enroll=function(){
//         console.log('successfully enrolled');
    
//     }
// }
// const course=new Course('js');
// course.enroll()

// // delete course.title
// console.log(course)




// class Product{
//     constructor(itemName,price,discount,productcode){
//         this.itemName=itemName;
//         this.price=price;
//         this.discount=discount;
//         this.productcode=productcode;
//     }


// }
// let pencil=new Product('pencil',20,2,'p10');
// console.log(pencil);


// const Product=class  {
//     constructor(itemName, price, discount, productcode) {
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productcode = productcode;
//     }    
//     get getDiscountValue() {
//         return this.discount;
//     }
//     set setDiscountValue(value) {
//         this.discount = value;
//     }
// }

// let chair = new Product('chair', 499, 15, 'c10');

// console.log(chair.getDiscountValue);  // Output: 15

// chair.setDiscountValue = 10;  // Use the setter to change the discount value
// console.log(chair.getDiscountValue);  // Output: 10

// console.log(chair.discount);  // Output: 10 (direct access to the property)



// const course={
//     title:'js',
//     enroll(){
//         console.log('you ar successfully enrolled');
//     }
// }
// const course1=course
// console.log(course1)
// const course2=Object.assign({},course)
// console.log(course2)
// for(let key in course){
//     console.log(key,course[key]);
// }




// function greet(name,callback){
//     console.log('hi'+name);
//     callback();
// }

// function callme(){
//     console.log("callbak");
// }
// greet('peter',callme)

// const calculate=(a,b,operation)=>
// {
//     return operation(a,b);
// };
// // const addition=calculate(3,4,function(num1,num2){
//     return num1+num2;
// })
// console.log(addition);

// const substraction=(a,b)=>a-b;
// const result=calculate(8,3,substraction)
// console.log(result);
// for(let j=1;j<=10;j++){
//     console.log(j);

// if(j===10){for(let i=10;i>=1;i--){

//     console.log(i);
// }
// }
// }
// let animal={
//     name:"zebra",
//     leg:4
// };
// for(let key in animal){
//     console.log(key,animal[key]);
// }

// let object={number:10};
// let object2=(...object)
//  object.number=15;
//  console.log(object);
//  console.log(object2);
 
// class MyClass {
//     constructor(property1, property2) {
//       this.property1 = property1;
//       this.property2 = property2;
//     }
  
//     // This is a class method
//     classMethod() {
//       console.log('This is a class method');
//     }
  
//     // Instance method
//     instanceMethod() {
//       console.log('This is an instance method');
//       console.log(`property1: ${this.property1}, property2: ${this.property2}`);
//     }
//   }
  
  // Creating an instance of the class
  // const myObject = new MyClass('Value1', 'Value2');
  
  // // Calling instance methods
  // myObject.instanceMethod(); // This is an instance method
  //                            // property1: Value1, property2: Value2
  
  // // Calling the class method
  // MyClass.classMethod(); // This is a class method
  // let a=prompt("enter a number");
//   // console.log(a);
//   const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combinedArray = [...arr1, ...arr2];
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, ...obj1 };
// const str = "hello";
// const chars = [...str];
// console.log(combinedArray)
// console




//   const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// function q(question){
//   question();
// rl.question('Enter correct option: ', (userInput) => {
  
//   console.log('You entered: ' + userInput);
//   if(userInput==ans){
//     console.log("yes");
//   }else{
//     console.log("no")
//   }


  
//   rl.close();
// });
// }
// function q1(){
//   console.log("Question 1: What does the acronym HTTP stand for?\n1) HyperText Transfer Protocol 2) High Transfer Text Protocol\n 3) Hyper Transfer Text Protocol 4) HyperText Transmission Protocol");
//   ans=1;
// };
// function q2(){
//  console.log("Question 2: Who is often referred to as the father of the computer?\n1) Alan Turing 2) Charles babbage\n 3) Steve Jobs 4) Tim Berners-Lee"); 
//  ans=2;
// }



function q1(callback){
    
  
      const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Question 1: What does the acronym HTTP stand for?\n1) HyperText Transfer Protocol 2) High Transfer Text Protocol\n 3) Hyper Transfer Text Protocol 4) HyperText Transmission Protocol\nenter your choice ', 
(userInput) => {
  ans=1;
  // Store the user input in a variable
  
  console.log('You entered: ' + userInput);
  if(userInput==ans){
    console.log("yes");
  }else{
    console.log("no")
  }


  // Close the readline interface
  rl.close();
 callback()
});

}

function q2(callback){
    
  
  const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Question 2: Who is often referred to as the "father of the computer"?\n1)Bill Gates  2) Charles Babbage 3) Steve Jobs 4) Tim Berners-Lee ',
 (userInput) => {
  ans=2;
// Store the user input in a variable

console.log('You entered: ' + userInput);
if(userInput==ans){
console.log("yes");
}else{
console.log("no")
}


// Close the readline interface
 rl.close();

  callback();


});
}
function q3(){
    
  
  const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Question 3: What programming language is commonly used for developing Android applications?\n1) Java 2) Python 3) C++ 4) Ruby ',
 (userInput) => {
  ans=1;
// Store the user input in a variable

console.log('You entered: ' + userInput);
if(userInput==ans){
console.log("yes");
}else{
console.log("no")
}


// Close the readline interface
 rl.close();

});
}
q1(function(){
  q2(function(){
    q3();
  });
});
  