const {FizzBuzzer} = require("./FizzBuzzer.js")
const fizzBuzzer = new FizzBuzzer()
const {fizz, buzz} = fizzBuzzer
for (let i = 1; i < 16; i++) {
    let fizzBuzz = fizz(i)+buzz(i)
    if (fizzBuzz === ""){
        console.log(i)
        continue
    } 
    console.log(fizzBuzz)
}