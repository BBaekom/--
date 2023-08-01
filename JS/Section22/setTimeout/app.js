// console.log("HELLO!!!");
// setTimeout(() => {
//     console.log("...are you still there?");
// }, 3000);

// console.log("GOODBYE!!");

const ID = setInterval(() => {
    console.log(Math.random())
}, 2000);

clearInterval(ID);