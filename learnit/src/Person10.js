class Person{

    constructor( first, last){
 
         this.firstName = first
         this.lastName = last     }
 
     fullName ( ) {
              return( `The full name of the person = ${this.lastName}, ${this.firstName}`)
 
     }
 
 }
 
 export default Person