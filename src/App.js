import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import Header from "./Component/Header";
import Checkout from "./Component/Checkout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Amazon-Frontend" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header/>,<Checkout/>]}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
