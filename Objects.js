let person = {
    name: "Om",
    age: 21,
    city: "Satara"
};

console.log("Initial Object:", person);

console.log("Name:", person.name); 
console.log("Age:", person["age"]); 

person.age = 20;
console.log("Updated Age:", person.age);

person.country = "India";
console.log("After Adding Country:", person);

delete person.city;
console.log("After Deleting City:", person);

for (let key in person) {
    console.log(key + ": " + person[key]);
}
