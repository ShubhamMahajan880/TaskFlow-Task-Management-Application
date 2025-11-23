import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";
import AddToDo from "./MyComponents/AddToDo";
import React, { useState } from 'react';

function App() {

  // Delete functionality
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // ADD functionality
  const addToDo = (title, desc) => {
    console.log("Adding todo:", title, desc);

    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
  };

  // State
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Apply in DriveX",
      desc: "Apply for Developer Role and Position at DriveX"
    },
    {
      sno: 2,
      title: "Learn React",
      desc: "Start React basics and props"
    },
    {
      sno: 3,
      title: "Practice DSA",
      desc: "Solve array and string questions"
    },
    {
      sno: 4,
      title: "Prepare for Interview",
      desc: "Have a look at complete Interview Preparation"
    },
    {
      sno: 5,
      title: "Compensation",
      desc: "At least 15 LPA"
    },
  ]);

  return (
    <>
      <Header title="To Do List - Shubham Mahajan" />

      {/* PASS addToDo function here */}
      <AddToDo addToDo={addToDo} />

      <ToDos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
