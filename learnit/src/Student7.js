import { default as Person } from "./Person7"

class Student extends Person {
    constructor( name){
        super(name)
        console.log( "Student Class constructor")
     }
     hello(){
        return("Hi I am a student a specialized person") // override
    }
}

export default Student