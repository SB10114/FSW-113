//Classes worksheet
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

/************************************************************************/
//Modules worksheet
// CLO1:
// import { Course, Session } from "./module1" 
// console.log( "From Module 1", CourseId)
// /*returns From Module 1 FSW113*/
//console.log( "From Module 1", Session)
/*returns From Module 1 02/02/2020 */

// CLO2: 
//import { Course as CourseId, Session } from "./module2" 
//console.log( "From Module 2", CourseId)
/*returns From Module 2 FSW113*/
//console.log( "From Module 2", Session)
/*returns From Module 2 02/02/2020*/

// CLO3: 
// import { Course as CourseId , Session } from "./module3" 
// console.log( "From Module 3", CourseId)
/*returns From Module 3 FSW113*/
//console.log( "From Module 3", Session)
/*returns From Module 3 02/02/2020*/

// CLO4: 
// import { Course as CourseId , Session } from "./module4" 

// console.log( "From Module 4", CourseId)
// console.log( "From Module 4", Session)
/*returns Load Module 4 .... Start
module4.js:9 Load Module 4 ..... End
index.js:187 From Module 4 FSW113
index.js:189 From Module 4 02/02/2020*/

// CLO5: 
// import {Course as CourseId } from "./module5" 
// console.log( "From Module 5", CourseId)
/*returns From Module 5 FSW113*/

// CLO6: 
// import { default as CourseId}  from "./module6" 

// console.log( "From Module 6", CourseId)
/*returns From Module 6 FSW113*/

// CLO7: 
// import { default as CourseName}  from "./module7" 
// console.log( "From Module 7", CourseName)
/*returns From Module 7 undefined*/

// CLO8: 
// import { default as CourseId, liveSession as Session}  from "./module8" 
// console.log( "From Module 8", CourseId)
// console.log( "From Module 8", Session)
/*returns From Module 8 FSW113
index.js:214 From Module 8 02/02/2020 */

// CLO9: 
// import *  as mod from "./module9" 
// console.log( "From Module 9", mod.courseName)
// console.log( "From Module 9", mod.liveSession)
/*returns From Module 9 FSW113
index.js:220 From Module 9 02/02/2020*/

// CLO10: 
// import{ Course as courseName, Session as liveSession} from "./module10" 
// courseName ="FSW220"
// console.log( "From Module 10", courseName)
// console.log( "From Module 10", liveSession)
/*returns Module 10 undefined*/

// CLO11:
// import *  as mod from "./module11" 

// mod.courseName = "FSW220"
// mod.liveSession = "Spring2020"

// console.log( "From Module 11", mod.courseName)
// console.log( "From Module 12", mod.liveSession)
/*returns Uncaught TypeError: Cannot set property courseName of #<Object> which has only a getter*/

// CLO12:
// import *  as mod from "./module11" 

// mod.courseName = "FSW113"
// mod.liveSession = "Spring2020"

// console.log( "From Module 12", mod.courseName)
// console.log( "From Module 12", mod.liveSession)
// console.log( "From Module 12", mod.combine( ))
/*returns Uncaught TypeError: Cannot set property courseName of #<Object> which has only a getter*/

