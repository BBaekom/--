const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
};

// console.log(myMath.PI);
// console.log(myMath["cube"](4));

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("MEOW MEOW MEOW");
    }
} 