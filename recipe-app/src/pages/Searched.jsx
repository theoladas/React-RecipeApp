import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  // create searched state
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // use Params
  let params = useParams();
  // get searched API function
  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  //   create useEffect function
  useEffect(() => {
    // getSearched needs to take an equiry and we will take this from useParams
    // the .search is the name we set in the Route path in Pages.jsx
    getSearched(params.search);
    // in order to updates everytime we searched we add params.search to the array
  }, [params.search]);

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title}></img>
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

// create a responsive Grid
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
    a {
      text-decoration: none;
    }
  }
  h4 {
    text-align: center;
  }
`;
export default Searched;
