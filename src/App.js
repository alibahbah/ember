//Components
import React from "react";
import Nav from "./components/Nav";
//Components and pages
import Home from "./pages/Home";
//Styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/game/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
