// 6 Write a program that asks the user for a number n and gives them the
//  possibility to choose between computing the sum and computing
//  the product of 1, …, n.


function sum_to(maxN) {
    let sum = 0
    for(let i = 0; i < maxN; i++){
        sum += i
    }
    return sum
}

function mult_to(maxN) {
    let prod = 1
    for(let i = 1; i < maxN; i++){
        prod *= i
    }
    return prod
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let maxN = 0
readline.question('What number to add or multiply to 1..n ?: ',
    (answer) => {
        if (isNaN(answer)) {
            console.log("could not read input")
            exit()
        }
        maxN = answer
        readline.question('Would you like the [S]um or [P]roduct?: ',
            (answer) => {
                first_letter = answer.charAt(0).toUpperCase()
                if (first_letter === 'P') {
                    console.log(mult_to(maxN))
                } else if (first_letter === 'S') {
                    console.log(sum_to(maxN))
                } else {
                    console.log("input could not be processed: " + answer)
                }
                readline.close();
            });
    });
