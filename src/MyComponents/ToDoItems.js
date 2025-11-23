import React from 'react'

export const ToDoItems = ({ todo, onDelete }) => {

  return (
    <div style={{ margin: "10px 0" }}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(todo)}
      >
        Delete
      </button>

      <button
        className="btn btn-sm btn-primary"
        onClick={() => onDelete(todo)}
      >
        Review
      </button>

      <hr />
    </div>
  );
}
  