import React from 'react'

// function AnotherList(person) { // not work
// function AnotherList(props) { //work : props.person.name
function AnotherList({person}) { //work by destructuring

// console.log(props)
   return ( 
         // <h1>Name : {props.name}, Age : {props.age}</h1> //not work
         // <h1>Name : {props.person.name}, Age : {props.person.age}</h1>
         <h1>Name : {person.name}, Age : {person.age}</h1>
   )
}

export default AnotherList
