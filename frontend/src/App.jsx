import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ExploreMenu from "./components/exploreMenu/ExploreMenu";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
    <Footer/>
    </>
  );
};

export default App;
