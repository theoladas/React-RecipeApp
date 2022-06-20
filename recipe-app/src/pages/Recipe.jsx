import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  // use params
  let params = useParams();
  //   create state
  const [details, setDetails] = useState({});
  //   create state for the buttons. By default active will be the instructions btn
  const [activeTab, setActiveTab] = useState("instructions");
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
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
        </div>
      </Info>
    </DetailWrapper>
  );
};

// Styles
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe;
