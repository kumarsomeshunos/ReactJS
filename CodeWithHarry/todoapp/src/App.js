import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar title="ToDoApp" search={false} />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
