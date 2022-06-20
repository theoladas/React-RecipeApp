import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  // use params
  let params = useParams();
  //   create state
  const [details, setDetails] = useState({});
  // fetch and get recipe.id from the API
  const fetchDetails = async () => {
    // GET the data
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    // SAVE the data
    const detailData = await data.json();
    setDetails(detailData);
  };
  //   Write useEffect function
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  // Render everything
  return <div>{details.title}</div>;
};

export default Recipe;
