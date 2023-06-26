import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyleLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.2rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  svg {
    color: white;
  }
  h4 {
    color: white;
  }
`;

const Category = () => {
  return (
    <NavList>
      <StyleLink to={"/Cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyleLink>
      <StyleLink to={"/Cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </StyleLink>
      <StyleLink to={"/Cuisine/Thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </StyleLink>
      <StyleLink to={"/Cuisine/Chinese"}>
        <GiChopsticks />
        <h4>Chinese</h4>
      </StyleLink>
    </NavList>
  );
};

export default Category;
