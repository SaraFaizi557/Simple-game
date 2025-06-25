let name1 = 'Sara';
let age = 15;
let favColor = 'green';

console.log(
    'Name: '+ name1 +
    ', age: ' + age + 
    ', favColor: ' + favColor);
console.log(`
    Name: ${name1},
    Age: ${age},
    favColor: ${favColor}`
);

let num = 5 == 6;
let num1 = 5 == '5';
let num2 = 5 === '5';
let num3 = 5 != '5';
let num4 = 5 !== '5';

console.log(
    num,
    num1,
    num2,
    num3,
    num4,
);

console.log(`${num}, ${num1}, ${num2}, ${num3}, ${num4}`);
console.log('num: ',+ num + ',num2: ' + num2);

let bolean = true && false;
console.log(bolean);

let age2 = 15;

let variable = (age2 >=18 ) && (age2 < 65);
console.log(variable);

let x = 5;
console.log(--x);
console.log(++x);
console.log(+x);
console.log(-+x);

let p = 3;
let r= p-- + 2;
console.log(p);
console.log(r);

let a = 3;
let b= --a + 2;
console.log(a);
console.log(b);

let str = "5";
str++;
console.log(str);

let bol = true;
bol++;
console.log(bol);

let notNumber = "Hello";
notNumber++;
console.log(notNumber);

let val;
val++;
console.log(val);


val = null;
val++;
console.log(val);

let x1 = 5;
x1 += x1++;
console.log(x1);

let cartItems = 0;
cartItems++;
console.log(cartItems);

cartItems--;
console.log(cartItems);

let frutes = ['Apple','Banana','Mango'];
let index = 0;

console.log(frutes[index++]);
console.log(frutes[index]);


function vote(){
let age1 = 65;
if(age1 >= 18){
    console.log('You are eligible to vote');
    if(age1 > 64) {
        return;
    }
    console.log(age1);
}else{
    console.log('You are not eligible to vote');
}
};
vote();

let score = 98;
if (score >= 90){
    console.log('Grade A+');
}else if(score >= 80){
    console.log("Grade A");
}else if (score >= 60){
    console.log("Grade B");
}else if(score >= 40){
    console.log('Grade C')
}else if(score >= 30){
    console.log('Pase');
}else{
    console.log('faile');
};

let age3 = 18;
let Messege=(age3 >= 18)?'You Can Vote':'You Cannot Vote';
console.log('Messege:',Messege);

let day = 3;
switch(day){
    case 1:
        console.log('Monday');
        console.log("It's");
        break;
    case 2:
        console.log('Tuesday');
        console.log("It's");
        break;
    case 3:
        console.log('Wednesday');
        console.log("It's");
        break;
    default:
        console.log('Invalid Day');  
}

switch(true){
    case(score >=90 && score < 100):
    console.log("Grade A+");
    break;
    case(score >=80 && score < 90):
    console.log("Grade A");
    break;
    case(score >=60 && score < 80):
    console.log("Grade B");
    break;
    case(score >=40 && score < 60):
    console.log("Grade C");
    break;
    case(score >=30 && score < 40):
    console.log("Only Pase");
    break;
    default:
        console.log('Fail');
}

// while(true){
//     console.log('Sara');
// }

for (let i = 1; i <= 5; i++){
    console.log('Number:', i);
}


let i = 1;
while(i <= 5){
    console.log('While loop:',i);
    i++;
}

let j = 1;
do{
    console.log('do While Loop:', j);
    j++;
}while(j <= 5);

const fruite = ['Apple','Banana','Mango'];
for(let index in fruite){
    console.log(fruite[index]);
}

for(let fruit of fruite){
    console.log('For Of Loop:',fruit)
}

for (const [index,value] of fruite.entries()){
    console.log(`index: ${index}, value: ${value}`)
}

const person = {
    Name: 'Sara',
    Age: 15,
    contry: 'Pakistan',
};

for(let key in person){
    console.log(key, ':' ,person[key]);
}

let word = 'Hello';
for(let char of word){
    console.log(char);
}

const user = new Map([
    ["name","Sara"],
    ["Age", 15],
    ["contry", "Pakistan"],
]);

for (let [key, value]of user){
    console.log(`${key}:${value}`);
}

for(let k = 0;k <= 10; k++){
    if(k === 5)break;
    console.log(k)
}


for(let k = 0;k <= 10; k++){
    if(k === 5)continue;
    console.log(k)
}

for (let a = 1; a <= 3; a++) {
    for (let b = 1; b <= 2; b++) {
        console.log(`a: ${a}, b: ${b}`);
    }
}

for(let a = 5; a > 0; a--){
    console.log(`Countdown: ${a}`)
}

console.log("Go!");


let savings = 0;
const target = 500;

while(savings < target){
    savings += 100;
    console.log(`Current Savings: $${savings}`);
}

console.log("Target Reached!");



let energy = 3;

do{
   console.log("Playing The Game...");
   energy--;
}while(energy > 0);
    console.log("Game Over. I'm Tried");


    
const book = ["Math","Bio","Pak","Isl","Phy"];
const bookToFind = "Isl";

for (let i = 0;i < book.length; i++){
    console.log(i);
    if(book[i] === bookToFind){
        console.log(`Found the book: ${book[i]}`);
        break;
    }
}

for (let i = 1; i < 10; i++){
    if(i % 3 === 1){
        continue;
    }
    console.log(`Odd number ${i}`)
}

for (let row = 1; row <= 3; row++){
    for(let seat = 1; seat <= 3; seat++){
        console.log(`Row: ${row}, Seat: ${seat}`)
    }
}

const btn =document.createElement("button");
for(let btn = 1; btn < 63; btn++) {
    btn.innerTex = btn;
}

function backgroundColor(button) {
    button.style.background = "red";
}

function realColor(button) {
    button.style.background = "green";
    alert("You Win!");
}
