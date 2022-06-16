import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  //import state
  const [cuisine, setCuisine] = useState([]);
  // useParams
  let params = useParams();
  // get cuisine API function
  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  // invoke the function
  useEffect(() => {
    // we pass the function and we add the (cuisine) based in the path's url and whatever add as parameter it will go to the API's {name} and it will updte the recipes
    getCuisine(params.type);
  }, [params.type]);
  return <div></div>;
};

export default Cuisine;
