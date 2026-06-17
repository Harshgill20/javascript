let name="John";
let age=30;

console.log(`my name is ${name} and my age is ${age}`); //string interpolation and use of backticks(``) and ${} for variable interpolation.
//arrays

let arr = [1,2,3,4,5,"s",true,66];

console.log(arr[3]); //accessing the 4th element of the array which is 4.

//updation of array element
arr[4]="ali";
console.log(arr[4]);


//addition of element in array

arr.push("OG");
console.log(arr);

//deletion in array from the end

arr.pop();
console.log(arr);

//addintion of the element in the beginning of the array

arr.unshift("OG");
console.log(arr);

//deletion of the element from the beginning of the array

arr.shift();
console.log(arr);

//for traversing the array we can use for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}


//forEach loop is used to traverse the array and it takes a callback function as an argument which is executed for each element of the array. 
arr.forEach(i=>(console.log(i)));


//includes method is used to check whether the array contains a specific element or not and it returns true or false.

console.log(arr.includes(66)); //true
console.log(arr.includes(100)); //false

//checking the index value of the element in the array using "indexOf" keyword.

console.log(arr.indexOf("ali"));

//searching the element in the array using "find" method and it takes a callback function as an argument which is executed for each element of the array and it returns the first element that satisfies the condition
let result = arr.find(i=>i=="s");
console.log(result);    