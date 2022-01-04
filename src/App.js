import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
import React, { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Router>
      <Navbar aboutUs="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
      <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <Text heading="Enter the Text to Analyze" />
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
