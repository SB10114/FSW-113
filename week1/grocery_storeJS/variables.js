var students = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]
//Requirement 1

var state = ['california', 'arizona', 'england', 'united kingdom'];

var birthday = ['january 5th 2001', 'april 11th 1998', 'december 1st 1957', 'november 10th 1976'];

var salary = ['30.00', '18.00', '23.00', '15.00']

//Requirement 2

students.forEach(obj=>{
    console.log(obj)
})

for (i=0; i<4; i++){
students[i].state = state[i]
students[i].birthday = birthday[i]
students[i].salary = salary[i]
}
console.log('-----')

students.forEach(obj=>{
    console.log(obj)
})

//Requirement 3

const gradStudents = [ 


    { name: "John", city: "California" },


    { name: "Peter", city: "London"},


    { name: "Mathew", city: "Manchester" },


    { name: "Jane", city: "Phoenix" }

]

const states = ['california', 'arizona', 'england', 'united kingdom'];

const birthdays = ['january 5th 2001', 'april 11th 1998', 'december 1st 1957', 'november 10th 1976'];

const salarys = ['30.00', '18.00', '23.00', '15.00']

gradStudents.forEach(obj=>{
    console.log(obj)
})

for (i=0; i<4; i++){
gradStudents[i].state = states[i]
gradStudents[i].birthday = birthdays[i]
gradStudents[i].salary = salarys[i]
}
console.log('-----')

gradStudents.forEach(obj=>{
    console.log(obj)
})

//Requirement 4: I expected const and var to put out two different outcomes, instead they are exactly the same.

//Requirement 5

const multipliers = [1,2,3,4,5,6,7,8,9,10]
const multiplican = [1,2,3,4]
const tableStart = 1
const tableEnd = 12
const table = []

for (i=1; i<13; i++){
    table.push(
        {
          name: i, 
          values: []
        }
    )
    for (p=1; p<13; p++){
        table[i - 1].values.push(
            {
                [i.toString()] : `${i} x ${p} = ${i*p}`
            }
        )
    }
}
table.forEach(obj=>{
    console.log(obj)
})