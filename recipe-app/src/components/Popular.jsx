import { useEffect, useState } from "react";

const Popular = () => {
  // create a state for the popular recipes
  const [popular, setPopular] = useState([]);

  // call the function when the page loads
  useEffect(() => {
    getPopular();
  }, []);

  // Fetch Popular recipes from API
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    // to get the data in json format
    const data = await api.json();
    // set setPopular value
    setPopular(data.recipes);
  };
  return (
    <div key={recipe.id}>
      {popular.map((recipe) => {
        return (
          <div>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
