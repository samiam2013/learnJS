// 4 Write a program that asks the user for a number n and prints the sum of the
//        numbers 1 to n

const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

readline.question('What number to triangle sum?: ', (answer) => {
	console.log(triangle(parseInt(answer)))
	readline.close();
});

triangle = (num) => {
	var sum = 0;
	for (let i = num; i > 0; i--) {
		sum += i
	}
	return sum
}
	
