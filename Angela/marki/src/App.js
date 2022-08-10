import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  let [value, count] = useState(0);
  const onClick = () => {
    count(value + 1);
    console.log("I am clicked!!", value);
  };
  return (
    <div className="App">
      <Navbar />
      <Content data={value} />
      <Button content="Plus" onClick={onClick} />
      {/* <Button content="Minus" onClick={onClick} /> */}
    </div>
  );
}

export default App;
