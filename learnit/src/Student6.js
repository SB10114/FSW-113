import { default as Person } from "./Person6"

class Student extends new Person(){

   constructor( ){

        super( )
         console.log( "Constructing Student ")
    }

    hello ( ) {
            return( "Hi I am a student a specialized person")

    }

}

export default Student