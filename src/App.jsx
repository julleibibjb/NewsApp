import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
