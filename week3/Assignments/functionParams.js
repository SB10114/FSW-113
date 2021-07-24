//#1
let studentGrades = [ 90, 80 , 88, 98]
let curveGrades = function( grades, percentage){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrades(studentGrades)

console.log(result)// returns [ NaN, NaN, NaN, NaN ]

//#2
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades)

console.log(result)// returns [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]

//#3
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function( grades, percentage = 1.10){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(studentGrades, 1.33)

console.log(result)// returns [ 119.7, 106.4, 117.04, 130.34 ]

//#4
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function(percentage = 1.10,  ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(...studentGrades, 1.33)

console.log(result)// returns [ 7200, 7920, 8820, 119.7 ]

//#5
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function(percentage = 1.10,  ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(...studentGrades)

console.log(result)// returns [ 7200, 7920, 8820 ]

//#6
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function(percentage = 1.10,  ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(1.24, ...studentGrades)

console.log(result)// returns [ 111.6, 99.2, 109.12, 121.52 ]

//#7
let studentGrades = [ 90, 80 , 88, 98]
let curveGrages = function(percentage = 1.10,  ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result)// returns [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]

//#8
let studentGrades = [ 90, 80 , 88, 98]
let percentageCurve = .98
let curveGrages = function(percentage = percentageCurve,  ...grades){
   var newGrades = grades.map( grade=> {
        return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result)// returns [ 88.2, 78.4, 86.24, 96.03999999999999 ]

//#9
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(undefined, ...studentGrades)

console.log(result)// returns [ 80.1, 71.2, 78.32000000000001, 87.22 ]

//#10
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
   let average = array.reduce((a, b) => a + b, 0)
   return average/array.length/100
}
let curveGrages = function(  percentage = avg(studentGrades),...grades){
   var newGrades = grades.map( grade=> {
      return grade * percentage
    })
    return newGrades
}

var result = curveGrages(1.3, ...studentGrades)

console.log(result)// returns [ 117, 104, 114.4, 127.4 ]

//#11
let studentGrades = [ 90, 80 , 88, 98]
const avg = function(array){
    let average = array.reduce((a, b) => a + b, 0)
    return average/array.length/100
 }
 let curveGrages = function(  percentage = avg(studentGrades),...grades){
    var newGrades = grades.map( grade=> {
       return grade * percentage
     })
     return newGrades
 }
 
 var result = curveGrages(1.3, 68, 56, ...studentGrades)
 
 console.log(result)// returns [ 88.4, 72.8, 117, 104, 114.4, 127.4 ]

 //#12
 let studentGrades = [ 90, 80 , 88, 98]

 let count = new Function('grades', ...studentGrades)

 var result = count([90, 80, 88, 98])

 console.log(result)// will not run without errors.
