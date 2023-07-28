import "./App.css";
import React, { useState } from "react";
import Navbar from "./Component/Navbar";
import Alert from "./Component/Alert";
import Footer from "./Component/Footer";
import TextForm from "./Component/TextForm";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode has been enabled", "dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "dark");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Try TextUtils - word counter, character counter, remove extra spaces"
          mode={mode}
        />
      </div>
      <Footer mode={mode}/>
    </>
  );
}

export default App;
