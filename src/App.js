import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";
import AddToDo from "./MyComponents/AddToDo";
import About from "./MyComponents/About";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";


function Home({ todos, onDelete, addToDo }) {
  return (
    <>
      <AddToDo addToDo={addToDo} />
      <ToDos todos={todos} onDelete={onDelete} />
    </>
  );
}

function App() {

  // Delete
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  // Add 
  const addToDo = (title, desc) => {
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  // State
  const [todos, setTodos] = useState([
    { sno: 1, title: "Apply in DriveX", desc: "Apply for Developer Role" },
    { sno: 2, title: "Learn React", desc: "Start React basics" },
    { sno: 3, title: "Practice DSA", desc: "Solve array and string problems" },
    { sno: 4, title: "Prepare Interview", desc: "Study core subjects" },
  ]);

  return (
    <>
      <Header title="To Do List - Shubham Mahajan" searchBar={false} />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <Home
              todos={todos}
              onDelete={onDelete}
              addToDo={addToDo}
            />
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        {/* ADD TODO PAGE */}
        <Route
          path="/addtodo"
          element={<AddToDo addToDo={addToDo} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
