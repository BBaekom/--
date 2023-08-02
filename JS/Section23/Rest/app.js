// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// console.log(sum(34, 65, 77))

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE : ${everyoneElse}`)
}

console.log(raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis'));