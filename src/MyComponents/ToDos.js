import React from 'react'
import ToDoItems from "./ToDoItems";

export default function ToDos(props) {

  return (
    <div className="container">
      <h3>Todos List</h3>

      {/* Loop through all todos */}
      {props.todos.map((todo) => {
        return <ToDoItems todo={todo} key={todo.sno} />
      })}

    </div>
  )
}
