import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Card title 1",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      sno: 2,
      title: "Card title 2",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      sno: 3,
      title: "Card title 3",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      sno: 4,
      title: "Card title 4",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      sno: 5,
      title: "Card title 5",
      body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  const onDelete = (todo) => {
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    console.log(`Deleted the one ${todo}`);
  };

  const onAdd = (title, body) => {
    let sno = todos[todos.length - 1].sno + 1;
    const myToDo = {
      sno: sno,
      title: title,
      body: body,
    };
    setTodos([...todos, myToDo]);
    console.log(`Added the one ${myToDo}`);
  };
  return (
    <div className="App">
      <Navbar title="ToDoApp" search={false} />
      <AddTodo onAdd={onAdd} />
      <Cards onDelete={onDelete} todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
