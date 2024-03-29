import { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FormStyle = styled.form`
  margin: 0rem 20rem;
  div {
    width: 100%;
    position: relative;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitSearchForm = (e) => {
    // stop the page to refresh
    e.preventDefault();
    // use the navigate variable and add the location you want to go to:
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitSearchForm}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

export default Search;
