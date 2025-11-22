import React from 'react'

export default function ToDoItems({ todo }) {

  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className = "btn btn-danger">Delete</button>
    </div>
  )
}
