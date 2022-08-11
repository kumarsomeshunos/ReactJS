import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [navmode, setNavmode] = useState("navbar navbar-expand-lg bg-light");
  const [modeText, setModeText] = useState("Dark Mode");
  const [alert, setAlert] = useState(null);

  const handleOnChange = (event) => {
    setText(event.target.value);
    showAlert("Writing Mode Activated", "success");
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    showAlert("Uppercase Mode Activated", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    showAlert("Lowercase Mode Activated", "success");
  };

  const handleClClick = () => {
    setText("");
    showAlert("Clear Mode Activated", "success");
  };

  const darkmode = () => {
    if (modeText === "Dark Mode") {
      setMode({
        backgroundColor: "black",
        color: "white",
      });
      setModeText("Light Mode");
      setNavmode("navbar navbar-expand-lg navbar-dark bg-dark");
      showAlert("Dark Mode Activated", "success");
      document.title = "TextUtils - Dark";
    } else {
      setMode({
        backgroundColor: "white",
        color: "black",
      });
      setModeText("Dark Mode");
      setNavmode("navbar navbar-expand-lg bg-light");
      showAlert("Light Mode Activated", "success");
      document.title = "TextUtils - Light";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <Router>
      <div className="App" style={mode}>
        <Navbar
          title="TextUtils"
          about="About"
          darktext={modeText}
          darkcolor={mode}
          darkmode={darkmode}
          navmode={navmode}
        />
        {alert && <Alert alert={alert} />}
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter the text to analyze"
                text={text}
                handleOnChange={handleOnChange}
                handleUpClick={handleUpClick}
                handleLoClick={handleLoClick}
                handleClClick={handleClClick}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
