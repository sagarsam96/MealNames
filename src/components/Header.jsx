import React, { useState } from "react";
import Styled from "styled-components";

const HeadBar = Styled.div`
width: 100%;
background: url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png");

  /* Full height */
  height: 5rem;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 100px;
  margin-bottom: 20px;
  font-size: 32px;
  @media only screen and (max-width: 600px) {
  font-size: 16px;
  padding: 30px;
}
@media only screen and (max-width: 400px) {
  font-size: 8px;
  margin-bottom: 30px;
}
`;

const InputArena = Styled.div`
 padding: 1rem;
  /* just in case */
`;

const Header = ({ query, setQuery }) => {
  const [input, setInput] = useState("");
  const buttonFunction = () => {
    if (input.trim().length > 0) {
      setQuery(input.trim());
      setInput("");
    }
  };
  return (
    <>
      <HeadBar>
        <div>
          {" "}
          <h2> Meal Finder</h2>{" "}
        </div>

        <InputArena>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Meal Name..."
          />
          <button onClick={() => buttonFunction()}> Search </button>
        </InputArena>
      </HeadBar>
    </>
  );
};
export default Header;
