// so passing an object means you can destructure it

const obj = {
    parameter : "value",
    nested : {
        nestedParameter : "someUsefulData",
        stat : 202
    }
}

// this is a function to return parameter if status is 202
const retInnerIfOK = ({nested: { nestedParameter, stat }}) => {
    if (stat === 202) {
        return nestedParameter
    }
}

console.log(retInnerIfOK(obj)) // prints "someUsefulData"