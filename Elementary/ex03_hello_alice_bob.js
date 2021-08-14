// 3 Modify the previous program such that only the users Alice and Bob are
//        greeted with their names.


const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout
});

const greetable = ['ALICE', 'BOB'];
readline.question('What is your name? ', (answer) => {
	if (greetable.includes(answer.toUpperCase())){
		console.log(`nice to see you again, ${answer}`);
	}
	readline.close();
});
