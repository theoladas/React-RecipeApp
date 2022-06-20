import React from "react";
import Home from "./Home";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  // Add location for Routes
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/Cuisine/:type" element={<Cuisine />} />
        <Route path="/Searched/:search" element={<Searched />} />
        <Route path="/Recipe/:name" element={<Recipe />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
