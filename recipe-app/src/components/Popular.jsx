import { useEffect, useState } from "react";
import styled from "styled-components";

const Popular = () => {
  // create a state for the popular recipes
  const [popular, setPopular] = useState([]);

  // call the function when the page loads
  useEffect(() => {
    getPopular();
  }, []);

  // Fetch Popular recipies from API
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    // to get the data in json format
    const data = await api.json();
    // console.log(data);
    // set setPopular value
    setPopular(data.recipes);
    console.log(data.recipes);
  };
  return (
    <Wrapper>
      <h3>Popular Picks</h3>
      {popular.map((recipe) => {
        return (
          <Card>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt={recipe.title} />
          </Card>
        );
      })}
    </Wrapper>
  );
};

// styles
// div wrapper
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
// card for each recipe
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
`;
export default Popular;
