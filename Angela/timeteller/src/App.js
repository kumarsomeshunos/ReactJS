import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  let [data, refresh] = useState(Date());
  setInterval(() => refresh(Date()), 1000);
  let onClick = () => {
    refresh(Date());
    console.log("Refreshed: ", data);
  };
  return (
    <div className="App">
      <Navbar />
      <Content onClick={onClick} data={data} />
      <Footer />
    </div>
  );
}

export default App;
