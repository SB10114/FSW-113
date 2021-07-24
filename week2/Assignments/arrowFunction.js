//#1
var temp = () => 104
console.log(typeof temp)// returns "function"
console.log(temp()) // returns '104'

//#2
var temp = multiplier => 104* multiplier
console.log(temp(2))// returns '208'

//#3
var temp = (multiplier, devider) => 104* multiplier/devider
console.log(temp(3,6))//returns '52'

//#4
var temp = (multiplier, divider) => { //block
        let result = 104* multiplier
        if (result){
            result = 104 / divider
        }
    return result
}
console.log(temp(3,6))//returns '17.333333333333332'

//#5
// var clickButton = function('click', function() {
//     console.log(this)
// };
// console.log(clickButton())// could not figure out how to run this without errors..

//#6
var clickButton = function(){
    console.log(this)
}
clickButton() //returns '<ref *1> Object [global] {
//     global: [Circular *1],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function (anonymous)]
//     },
//     '$jsDebugIsRegistered': true
//   }'

//#7
var clickButton = () => {
    console.log(this)
}
clickButton()//returns '{}'

//#8
var person = {
    name:'David Smith',
    age: 56,
    details: function(){
        console.log(this)
    }
}
person.details()//returns '{ name: 'David Smith', age: 56, details: [Function: details] }'

//#9
var person = {
    name:'David Smith',
    age: 56,
    details: () => {
        console.log(this)
    }
}
person.details()// returns '{}'

//#10
var temp = () => 100
console.log(temp)// returns '[Function: temp]'