import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster", cursive;
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>delicious</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
