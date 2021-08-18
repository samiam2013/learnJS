// 5 Modify the previous program such that only multiples 
//  of three or five are considered in the sum, 
//  e.g. 3, 5, 6, 9, 10, 12, 15 for n = 17

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('What number to fizzbuzz triangle sum?: ', 
    (answer) => {
        console.log(fizzbuzz_triangle(parseInt(answer)))
        readline.close();
});

fizzbuzz_triangle = (num) => {
    var sum = 0;
    for (let i = num; i > 0; i--) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum
}

