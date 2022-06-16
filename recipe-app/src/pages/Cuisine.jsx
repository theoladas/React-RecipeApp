import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cuisine = () => {
  //import state
  const [cuisine, setCuisine] = useState([]);
  // get cuisine API function
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.JSON();
    setCuisine(recipes.results);
  };
  return <div></div>;
};

export default Cuisine;
