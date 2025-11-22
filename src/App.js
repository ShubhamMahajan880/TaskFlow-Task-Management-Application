import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import ToDos from "./MyComponents/ToDos";

function App() {


  let ToDos = [
    { sno: 1, title: "Apply in DriveX", desc: "Apply for Developer Role and Possition at DriveX" },
    { sno: 2, title: "Learn React", desc: "Start React basics and props" },
    { sno: 3, title: "Practice DSA", desc: "Solve array and string questions" },
    { sno: 4, title: "Prepare for Interview", desc: "Have a look on complete Interview Preparation" },
    { sno: 5, title: "Compnesation", desc: "at least 15 LPA" }
  ];

  return (
    <>
      <Header title="To Do List - Shubham Mahajan" />

      {/* Passing todos list to ToDos */}
      <ToDos ToDos={ToDos} />

      <Footer />
    </>
  );
}

export default App;
