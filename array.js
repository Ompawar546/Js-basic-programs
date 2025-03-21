//map function
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log("map function : "+squared); 

//filter
const orignalNums = [1, 2, 3, 4, 5, 6];
const evenNumbers = orignalNums.filter(num => num % 2 == 0);
console.log("filter function : "+evenNumbers); 

//s;ice
const Names = ["Om", "jojo", "raj", "aayan", "soham"];
const topNames = Names.slice(0, 3);
console.log("slice function : "+topNames); 

//splice
Names.splice(2,2,"shruti","rachna")
console.log("splice function : "+Names)