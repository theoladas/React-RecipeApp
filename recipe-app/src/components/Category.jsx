// Imports
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

// Component Function
const Category = () => {
  return (
    <NavList>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </NavList>
  );
};

// Styles
const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

export default Category;
