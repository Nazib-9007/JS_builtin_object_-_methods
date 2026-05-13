const minimum = Math.min(45, 21, 65, 99, 126, 5, -2); //find min number.....
console.log(minimum);

const maximum = Math.max(45, 21, 65, 99, 126, 5, -2); //find max number....
console.log(maximum);

const pie = Math.PI;//  Pie value..
console.log(pie);

console.log(Math.abs(-7));// abs() always gives positive value if pass negeative value also return positive value like example..
console.log(Math.round(5.6));//round provide complete number not provide fraction number..
console.log(Math.floor(5.7)); //floor provide near number..
console.log(Math.ceil(4.7)); //ceil also provide near positive value..
console.log(Math.random()); //random() provide any random number between 0 to 1;.....

//Math problem solving........
//1......
const num =Math.min(45, 11, 89, 23, 56,-12,-56);
console.log(num);
//2......
const number = Math.round(7.6);
console.log(number);

//Object Constructor......
function person(){
    this.first_name = 'S M Nazib';
    this.last_name = 'Ul Alam';
    this.age = 24;
    this.nationality = true;
    this.getName = ()=>{
        return `My Name is ${this.first_name} ${this.last_name}, age is ${this.age} and Nationality is Bangladeshi - ${this.nationality}`
    }
}

const instancePerson = new person();
console.log(instancePerson.getName());
//Can't redeclear multiple class.......
class Person{
    first_name = 'Nazib';
    age = 24;
    getName(){
        return `${this.first_name} and age is ${age}`;
    }
}
class Person{
    first_name = 'Nafiz';
    age = 28;
    getName(){
        return `${this.first_name} and age is ${age}`;
    }
}
const myPerson = new Person();
console.log(myPerson);
//Also cann't use expression class......
let Person = class{
    first_name = 'Nazib';
    age = 24;
    getName(){
        return `${this.first_name} and age is ${age}`;
    }
}
let Person = class{
    first_name = 'Nafiz';
    age = 28;
    getName(){
        return `${this.first_name} and age is ${age}`;
    }
}
const myPerson = new Person();
console.log(myPerson);

class addition{
    num1 = 10;
    num2 = 20;
    add(){
       return this.num1 + this.num1;
    }
}
let myAdd = new addition();
console.log(myAdd.add());
