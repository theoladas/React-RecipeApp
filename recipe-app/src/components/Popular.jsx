import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
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
      <Splide
        options={{
          perPage: 4,
          // arrows
          arrows: false,
          // dots
          pagination: false,
          // move the elements around
          drag: "free",
          // gap between images
          gap: "2rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
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
  border-radius: 1rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    max-width: 100%;
  }
`;
export default Popular;
