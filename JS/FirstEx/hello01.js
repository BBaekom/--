console.log("hello world");
console.log(3.5 * 2);
console.log(typeof NaN);

const year = 1985;
console.log(year);

var runDistance = 26.2;
console.log(runDistance);

console.log(true);

let run = 0;
console.log(run);

console.log(typeof run);

const isWaterWet = true;

console.log(isWaterWet);

// Section15

let username = "    danny    ";
console.log(username);
console.log(username.length);
console.log((username + username).length);
console.log(username.trim().toUpperCase());

let msg = "haha that is so funny!";
console.log(msg.replace("haha", "TaTa"));

let product = 'Artichoke';
let price = 3.99;
price = 2.25;
let qty = 5;
console.log("You bought " + qty + " " + product + ". Total is: " + price * qty);

console.log(`hello ${1 + 2 + 9}`);

console.log(`You bought ${qty} ${product}. Total is: $${price * qty}`);

console.log(Math.PI);
console.log(Math.floor(23.99999));
console.log(Math.ceil(33.445));
console.log(Math.random());
console.log(Math.floor(Math.random() * 5) + 1);
console.log(Math.pow(2, 5));
console.log(3 >= 3);
console.log("이종민 여자친구는 김준하");
console.log(0 !== false);
console.log(1 == '1');
console.log(1 + 4, "HI", true);
console.warn("UH OH WARNING!");
