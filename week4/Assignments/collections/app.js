//#1

// var students = [
//   { name: "James", dob: "01/01/2000" },
//   { name: "Mandy", dob: "01/01/2001" },
//   { name: "Sandy", dob: "01/01/2002" },
//   { name: "Harry", dob: "01/01/2003" },
// ]

// a)

//  for (var student of students){
//  console.log(student)
 //} 
                    /*returns { name: 'James', dob: '01/01/2000' }
                    { name: 'Mandy', dob: '01/01/2001' }
                    { name: 'Sandy', dob: '01/01/2002' }
                    { name: 'Harry', dob: '01/01/2003' }
                    */

// b)

// for (var student of students) {
//   console.log(`Name = ${student.name}, Date Of Birth = ${student.dob}`)
// }
                    /*returns Name = James, Date Of Birth = 01/01/2000
                    Name = Mandy, Date Of Birth = 01/01/2001
                    Name = Sandy, Date Of Birth = 01/01/2002
                    Name = Harry, Date Of Birth = 01/01/2003*/


// c)

// for (var student of students) {
//   const {name, dob: dateOfBirth} = student
//   console.log(`Name = ${name}, Date Of Birth = ${dateOfBirth}`);
// }
                    /*returns Name = James, Date Of Birth = 01/01/2000
                    Name = Mandy, Date Of Birth = 01/01/2001
                    Name = Sandy, Date Of Birth = 01/01/2002
                    Name = Harry, Date Of Birth = 01/01/2003
                    */

 

//#2

// var students = [
//   { name: "James", dob: "01/01/2000" },
//   { name: "Mandy", dob: "01/01/2001" },
//   { name: "Sandy", dob: "01/01/2002" },
//   { name: "Harry", dob: "01/01/2003" },
// ];

// var studentDetails = students.map((student) => {
//   let newInfo = { ...student, name: student.name.toUpperCase(), college: "BU" };
//   return newInfo;
// })

// //a)

// for (var student of studentDetails) {
//   const { name, dob: dateOfBirth, college } = student;
//   console.log(
//     `Name = ${name}, Date Of Birth = ${dateOfBirth}, University= ${college}`
//   );
// }
                    /*returns Name = JAMES, Date Of Birth = 01/01/2000, University= BU
Name = MANDY, Date Of Birth = 01/01/2001, University= BU
Name = SANDY, Date Of Birth = 01/01/2002, University= BU
Name = HARRY, Date Of Birth = 01/01/2003, University= BU
                    */

//#3

// var students = [
//   { name: "James", dob: "01/01/2000" },
//   { name: "Mandy", dob: "01/01/2001" },
//   { name: "Sandy", dob: "01/01/2002" },
//   { name: "Harry", dob: "01/01/2003" },
// ];

// var studentDetails = students.map((student) => {
//   let newInfo = { ...student, name: student.name.toUpperCase(), college: "BU" };
//   return newInfo;
// })

// //a)

// for (var student of studentDetails) {
//   const { name, dob: dateOfBirth, college } = student;
//   console.log(
//     `Name = ${name}, Date Of Birth = ${dateOfBirth}, University= ${college}`
//   );
// }
                    /*returns Name = JAMES, Date Of Birth = 01/01/2000, University= BU
                    Name = MANDY, Date Of Birth = 01/01/2001, University= BU
                    Name = SANDY, Date Of Birth = 01/01/2002, University= BU
                    Name = HARRY, Date Of Birth = 01/01/2003, University= BU*/

 

//#4

// var students = [
//   { name: "James", dob: "01/01/2000" },
//   { name: "Mandy", dob: "01/01/2001" },
//   { name: "Sandy", dob: "01/01/2002" },
//   { name: "Harry", dob: "01/01/2003" },
// ];


// var studentToSearch = { name: "Mandy", dob: "01/01/2001" };

// var result = students.filter((student) => student.name == studentToSearch.name);

// console.log(result);
                    /*returns [ { name: 'Mandy', dob: '01/01/2001' } ]*/

 

//#5

// var students = [
//   { name: "James", dob: "01/01/2000" },
//   { name: "Mandy", dob: "01/01/2001" },
//   { name: "Sandy", dob: "01/01/2002" },
//   { name: "Harry", dob: "01/01/2003" },

//   { name: "Mandy", dob: "01/01/2020" },
// ];

// var studentToSearch = { name: "Mandy", dob: "01/01/2001" };
// var result = students.filter((student) => student.name == studentToSearch.name);

// console.log(result);
/*returns [
    { name: 'Mandy', dob: '01/01/2001' },
    { name: 'Mandy', dob: '01/01/2020' }
  ]
*/