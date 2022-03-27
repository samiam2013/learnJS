"use strict";

class FizzBuzzer {
    constructor(){}

    fizz = (n) =>{
        if (n % 3 === 0){
            return "fizz"
        }
        return ""
    } 
    buzz(n){
        if (n % 5 === 0){
            return "buzz"
        }
        return ""
    }
}

module.exports = {FizzBuzzer}

// other js platoforms would use
/* export default new FizzBuzzer() */