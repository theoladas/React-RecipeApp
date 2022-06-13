import React from "react";
import Popular from "../components/Popular";
import Veggie from "../components/Veggie";

const Home = () => {
  return (
    <div className="home">
      <Veggie />
      <Popular />
    </div>
  );
};

export default Home;
