import { useEffect } from "react";

const Popular = () => {
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
    console.log(data);
  };
  return (
    <div>
      <h1>Popular</h1>
    </div>
  );
};

export default Popular;
