import React from 'react'
import { ToDoItems } from "./ToDoItems";

export const ToDos = (props) => {

  return (
    <div className="container">
      <h3 className="text-center">Todos List</h3>

      {props.todos.length === 0 ? (
        "No Todos to Display"
      ) : (
        props.todos.map((todo) => (
          <ToDoItems
            todo={todo}
            onDelete={props.onDelete}
            key={todo.sno}
          />
        ))
      )}

    </div>
  );
}

export default ToDos;
