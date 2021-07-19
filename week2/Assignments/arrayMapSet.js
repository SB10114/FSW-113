//#1
let studentArray = Array(10)
console.log(studentArray.length)// returns 10
console.log(studentArray)// returns '[ <10 empty items> ]'

//#2
let studentArray = Array.of(10)
console.log(studentArray.length)// returns '1'
console.log(studentArray)// returns '[ 10 ]'

//#3
let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=> g * 110);

console.log(studentGrades.length)// returns '4'
console.log(studentGrades)// returns '[ 9900, 10780, 8580, 10890 ]'

//#4
let grades = [90,98,78,99]
let studentGrades = Array.from(grades, function(g){
    return g* this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades)// returns '[ 99.00000000000001, 107.80000000000001, 85.80000000000001, 108.9 ]'

//#5
let grades = [90,98,78,99]
let studentGrades = Array.from(grades, g=>{
    return g* this.percentageIncrement
},{percentageIncrement:1.10});

console.log(studentGrades)// returns '[ NaN, NaN, NaN, NaN ]'

//#6
let grades = [90,98,78,99]
let studentGrades = grades.find(v => v == 90)

console.log(studentGrades)// returns '90'

//#7
let grades = [90,98,78,99]
let studentGrades = grades.find(v => v >= 90)

console.log(studentGrades)// returns '90'

//#8
let grades = [90,98,78,99]
let studentGrades = grades.map(v => v * .090)

console.log(studentGrades)// returns '[ 8.1, 8.82, 7.02, 8.91 ]'

//#9
let grades = [90,98,78,99]
let studentGrades = ...grades

console.log(studentGrades)// returns 'SyntaxError: Unexpected token '...''

//#10
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

console.log(people)// returns 'Map(2) {
//     { name: 'John Masson' } => 'Student',
//     { name: 'Dave Larson' } => 'Adjunct'
//   }''

//#11
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.delete(student)

console.log(people)// returns 'Map(1) { { name: 'Dave Larson' } => 'Adjunct' }'

//#12
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

people.clear()

console.log(people)// returns 'Map(0) {}'

//#13
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.has(student)

console.log(result)// returns 'true'

//#14
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.keys(student)

console.log(result)// returns '[Map Iterator] { { name: 'John Masson' }, { name: 'Dave Larson' } }'

//#15
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Map()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

let result = people.values(student)

console.log(result)// returns '[Map Iterator] { 'Student', 'Adjunct' }'

//#16
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new WeakMap()

people.set(student, "Student")
people.set(adjunct, "Adjunct")

ladjunct = null

console.log(people.size)// 1st attempt returns 'undefined' 2nd attempt returns the same.
console.log(people.size)// returns undefined

//#17
let student = {name: 'John Masson'}
let adjunct = {name: 'Dave Larson'}
let people = new Set()

people.add(student)
people.add(adjunct)

people.add(adjunct)

console.log(people.size)// return '2'

//#18
let students = [{name: 'John Masson'}, {name: 'Don Vasco'}, {name: 'Mary landley'}]
let people= new Set(students)

console.log(people.has({name: 'Dave Vasco'}))// returns 'false'