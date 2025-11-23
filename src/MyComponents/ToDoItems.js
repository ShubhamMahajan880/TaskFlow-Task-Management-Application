import React from 'react'

export default function ToDoItems({ todo }) {

  return (
    <div style={{ margin: "10px 0" }}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-danger">Delete</button>
      <hr />
    </div>
  )
}
