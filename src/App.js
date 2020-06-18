import React from "react";
import "./App.css";
import MoviesData from "./components/Movies";
import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <MoviesData />
      </BrowserRouter>

    </div>
  );
}

export default App;
