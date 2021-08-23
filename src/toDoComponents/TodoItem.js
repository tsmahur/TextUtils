import React from 'react'

export const TodoItem = ({todo, onDelete}) => { //destructring
    return (
        <>
        <div>
           <h4>{todo.title}</h4>
           <p>{todo.desc}</p>
           <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
           {/* //onDlete(todo) will directly call the fuction , but now using arrow function we r just pasing the function not calling*/}
        </div>
        <hr/> 
        </>
    )
}
