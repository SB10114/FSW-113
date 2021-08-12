//#1
// import { default as Person } from "./Person1"

// console.log( "From Person1.js ", typeof Person)
/*result From Person1.js  function */

// #2
// import { default as Person } from "./Person2"

// let person = new Person( )


// console.log(typeof person)/*returns object*/

// console.log( person.hello( ))/*returns Hi I am a person */

// console.log( `is person instance of  Person  is ${ person instanceof Person}`)
/*returns is person instance of  Person  is true */
 

// #3
// import { default as Person } from "./Person3"

// let person = new Person( )


// console.log( person.hello( ))
/*returns Constructing Person 
index.js:27 Hi I am a person */

//#4
// import { default as Person } from "./Person3"

// let person = new Person( )

// console.log( person.hello( ))
/*returns Constructing Person 
index.js:36 Hi I am a person */

// #5
// import { default as Person } from "./Person5"

// let person = new Person( )


// console.log( person.hello( ))
/*returns Constructing Person 
index.js:46 Hi I am a person */

//#6
// import { default as Student } from "./Student6"

// let student = new Student( )

// console.log( student.hello( ))
/*returns Constructing Person 
Student6.js:3 Uncaught TypeError: Class extends value #<Person> is not a constructor or null */

// #7
// import { default as Student } from "./Student7"

// let student = new Student("John Woods" )

// console.log( student.hello( ))
/*returns  Constructing Person  John Woods
Student7.js:6 Student Class constructor
index.js:64 Hi I am a student a specialized person*/
 

// #8
// import { default as Student } from "./Student7"

// let student = new Student("John Woods" )


// console.log( student.hello( ))
/*returns  Constructing Person  John Woods
Student7.js:6 Student Class constructor
index.js:64 Hi I am a student a specialized person*/ 

// #9
// import { default as Student } from "./Student8"

// let student = new Student("John Woods" )


// console.log( student.hello( ))
/*returns Constructing Person  John Woods
Student8.js:6 Student Class constructor
index.js:87 Hi I am a person */
 

// #10
// import { default as Student } from "./Student9"

// let student = new Student("John Woods" )


// console.log( student.hello( ))
/*returns Constructing Person  John Woods
Student9.js:6 Student Class constructor
Student9.js:9 Hi I am a student a specialized person
index.js:99 undefined */
 

// #11
// import { default as Student } from "./Student10"

// let student = new Student("John", "Smith" )


//console.log( student.allCaps( ))
/*returns  The full name of the person = SMITH, JOHN*/

//console.log( student.fullName( ))
/*returns The full name of the person = Smith, John */
 

// #12
// import { default as Student } from "./Student11"

// let student = new Student("John", "Smith" )


// console.log( student.allCaps( ))
/*returns an error I cannot resolve. */

// console.log( student.fullName( ))
/*returns an error I cannot resolve. */
 

// #13
// import { default as Person } from "./Person12"

// console.log( Person.fullName('Jammy', 'Harding' ))
/*returns The full name of the person = Harding, Jammy */
 

// #14
// import { default as Person } from "./Person13"

// Person.firstName = 'Mary'

// Person.lastName = 'Lutten'

// console.log( Person.firstName, Person.lastName)
/*returns Mary Lutten */
 

// #15
// import { default as Person } from "./Person13"

// Person.firstName = 'Mary'

// Person.lastName = 'Lutten'

// console.log( Person.firstName, Person.lastName)
/*returns Mary Lutten */
