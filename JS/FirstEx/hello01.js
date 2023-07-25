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

let movieLine = ["tom", "nancy"];
movieLine[2] = "pablo";
console.log(movieLine);
movieLine.push('oliver');
console.log(movieLine);

let cat = "blue";
cat.toUpperCase();
console.log(cat);
console.log(movieLine.push('harry', 'hermione'));
console.log(movieLine);
console.log(movieLine.pop());
console.log(movieLine);

let person = movieLine.pop();
console.log(person);
console.log(movieLine);
movieLine.push('eva');
console.log(movieLine);
console.log(movieLine.shift());
console.log(movieLine);
console.log(movieLine.unshift('Tom'));
console.log(movieLine);

console.log(movieLine.includes("oliver"));

console.log(movieLine.indexOf("olive"));
console.log(movieLine.reverse());

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
console.log(colors.slice(1, 5));
console.log(colors);
colors.splice(4, 0, 'skyblue');
console.log(colors.sort());