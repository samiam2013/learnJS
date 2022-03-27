// so there's an interesting trick and a problem it creates
list = [ 'apple', 'banana', 'orange' ]

// to get the last element you could use list matching commas
let [, , lastVal] = list

// but it's easier to get it by reversing the array and getting the new 
//  beggining element instead
let [lastElem] = list.reverse()

// is the list in order though? 
console.log(list) /* [ 'orange', 'banana', 'apple' ] */ 
// no it's not. so let's reverse that real quick
list.reverse()

// one stupid trick that every syntactic purist will hate if you use it? 
//  use the spread operator to in effect copy and avoid the mutation
let [lastEntity] = [...list].reverse()

// now to prove that all these values are the same let's compare
if ((lastVal !== lastElem) || (lastElem !== lastEntity)) {
    console.log("one of our values was not the same:")
    console.log({lastVal, lastElem, lastEntity})
}

