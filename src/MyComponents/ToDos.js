import React from 'react'
import ToDoItems from "./ToDoItems";


export const ToDos = (props) => {
  return (
    <div className = "container">
      <h3>TODos List</h3>
      <ToDoItems Todos = {props.ToDos[0]}></ToDoItems>
    </div>
  )
}

export default ToDos
