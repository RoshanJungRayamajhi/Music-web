import React from "react";
import Navbar from "./Components/Navbar";
import Bottom from "./Components/Bottom";
import Newrelease from "./Components/Newrelease";
import Editorial from "./Components/Editorial";
import { Route, Router, Routes } from "react-router-dom";
import Songdetail from "./Components/Songdetail";
import Home from "./Home";

const App = () => {
  return (
    <>
      <div className=" w-full min-h-screen bg-zinc-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
