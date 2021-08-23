import React from 'react' //rfce
import AnotherList from './AnotherList'

function ListTable(props) {

   const nameArr=["Tom","John","Mic"]
   // const nameList=nameArr.map(name => <h1>{name}</h1>)
   const nameList=nameArr.map((name,index) => <h1 key={index}>{name}</h1>) //index as key
   
   const personObjArr=[
      {id:0, name:"John",age:20},
      {id:1, name:"Tom",age:23},
      {id:2, name:"Mic",age:25}
   ]
   // const personList=personObjArr.map(person => <h1>Name : {person.name}, Age : {person.age}</h1>)
   // const personList=personObjArr.map(person => <AnotherList person={person}/>)
   const personList=personObjArr.map(person => <AnotherList key={person.id} person={person}/>)

   props.activeLink("list","TextUtils - List")
   return (
      <div>
         {nameList}
         <hr></hr>
         {personList}
         <hr></hr>
      </div>
   )
}

export default ListTable
