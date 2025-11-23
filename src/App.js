import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";

function App() {

  // List of todos
  let todos = [
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
    }
  ];

  return (
    <>
      <Header title="To Do List - Shubham Mahajan" />

      {/* Passing todos properly */}
      <ToDos todos={todos} />

      <Footer />
    </>
  );
}

export default App;
