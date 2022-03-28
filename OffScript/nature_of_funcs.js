"use strict";


// can you call a regular function without () ? 
function oldway() {
    console.log(this)
}

oldway
// no. this prints nothing. 

// what about an arrow function? 
let arrow = () => {
    console.log(this)
}

arrow
// no. this prints nothing

// what about const arrow
const constArrow = () => {
    console.log(this)
}

constArrow
// no. this prints nothing

// all these calls work normally
oldway()
arrow()
constArrow()

