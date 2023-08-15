import React from "react";
import { ReactDOM } from "react-dom/client";
import {Routes,Route} from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    
  );
}

export default App;
