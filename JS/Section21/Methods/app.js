const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

console.log(myMath.PI);
console.log(myMath["cube"](4));