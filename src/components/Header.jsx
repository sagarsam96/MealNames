import React, { useState } from "react";
import Styled from "styled-components";
import { HeadBar, InputArena } from "./Styled";

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
