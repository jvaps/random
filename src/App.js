import React from "react";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import List from "./Pages/List";
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list" element={<List />} />
      </Routes>
      
    </div>
  )
}

export default App;
