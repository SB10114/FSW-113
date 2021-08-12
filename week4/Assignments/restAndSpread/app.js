// //#1

// const studentGrades = [ 90, 80 , 88, 98]
// var result = [...studentGrades]

// //console.log(result)// returns [ 90, 80, 88, 98 ]

// console.log(result instanceof array)//will not work without a constructor(function) to test against

 

// //#2

// let myGrade = [99]
// var result = [...myGrade]

// console.log(result)// returns [ 99 ]

 

// //#3

// let studentGrades = [ 90, 80 , 88, 98]
// var maxGrade = Math.max(...studentGrades)

// console.log(maxGrade)//returns 98

 

// //#4

// let studentGrades = [ 90, 80 , 88, 98]
// var gradeArray = [...studentGrades]

// console.log(gradeArray)//returns [ 90, 80, 88, 98 ]

 

// //#5

// let studentGrades = [ ...[ , , ]]

// console.log(studentGrades)//returns [ undefined, undefined ]

 

// //#6

// let myhouseNumber = [..."8976"]


// console.log(Math.max(myhouseNumber))//returns NaN

 

// //#7

// let myhouseNumber = [..."8976", "AB", "CDEF"]

// console.log(Math.max(myhouseNumber))//returns NaN

 

// //#8

// var studentName = "James Moore"

// var dob = "02/02/2002"

// var studentInfo = {
//           [studentName]:studentName ,
//           [dob]:dob
// }

// console.log(studentInfo)//returns { 'James Moore': 'James Moore', '02/02/2002': '02/02/2002' }

 

// #9

// var studentName = "James Moore"

// var dob = "02/02/2002"

// var studentInfo = {
//           studentName,
//          dob
// }

// console.log(studentInfo)//returns { studentName: 'James Moore', dob: '02/02/2002' }

 

// //#10

// var studentName = "James Moore"
// var dob = "02/02/2002"
// var studentInfo = {
//     studentName,
//     dob,
//     currentAge( ) {
//         var today = new Date()
//         var dobDate = new Date(this.dob)
//         var timeDiff = today.getTime() - dobDate.getTime()
//         var days = timeDiff/(1000*3600*24*365)
//         return Math.round(days)
//     }
// }

// var result = studentInfo.currentAge()

// console.log(studentInfo)//returns {
//     studentName: 'James Moore',
//     dob: '02/02/2002',
//     currentAge: [Function: currentAge]
//   }
  

 

// //#11

// var studentName = "James Moore"
// var dob = "02/02/2002"
// var studentInfo = {
//     studentName,
//     dob,
//     age : function( ) {
//         var today = new Date()
//         var dobDate = new Date(this.dob)
//         var timeDiff = today.getTime() - dobDate.getTime()
//         var days = timeDiff/(1000*3600*24*365)
//         return Math.round(days)
//     }
// }

// var result = studentInfo.age()

// console.log(studentInfo)//returns { studentName: 'James Moore', dob: '02/02/2002', age: [Function: age] }

 

// //#12

// var studentName = "James Moore"
// var dob = "02/02/2002"
// var studentInfo = {
//     studentName,
//     dob,
//     [ "ageOf Student"] : function( ) {
//         var today = new Date()
//         var dobDate = new Date(this.dob)
//         var timeDiff = today.getTime() - dobDate.getTime()
//         var days = timeDiff/(1000*3600*24*365)
//         return Math.round(days)
//     }
// }

// var result = studentInfo[ "ageOf Student"] ( )

// console.log(studentInfo)//returns { studentName: 'James Moore', dob: '02/02/2002', age: [Function: age] }
// {
//   studentName: 'James Moore',
//   dob: '02/02/2002',
//   'ageOf Student': [Function: ageOf Student]
// }

// //#13

// var columnName = "Name";
// var names = {};
// var student = {
//   get [columnName]() {
//     return names;
//   },
//   set [columnName](value) {
//     names = value;
//   },
// };

// student.Name = "Harry Potter";

// console.log(student.names)//returns undefined

