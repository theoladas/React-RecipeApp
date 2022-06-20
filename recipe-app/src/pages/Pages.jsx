import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Cuisine/:type" element={<Cuisine />} />
      <Route path="/Searched/:search" element={<Searched />} />
      <Route path="/Recipe/:name" element={<Recipe />}></Route>
    </Routes>
  );
};

export default Pages;
