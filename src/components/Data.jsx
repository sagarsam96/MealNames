import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Styled from "styled-components";
import { Wrapper } from "./Styled";
const Data = ({ query }) => {
  const [data, setData] = useState([]);


  const fetching = () => {
    query &&
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then((response) => response.json())
        .then((response) => setData(response.meals));
  };
  useEffect(() => {
    fetching();
  }, [query]);

  return (
    <>
        {
          query&&<h5 id="result">Search Results for {query} </h5>
        }
        {!data && <h5 className="loader">No result found</h5>}
      <Wrapper>
        {data &&
          data.map((menu, index) => {
            return <MenuCard menu={menu} index={index} key={index} />;
          })}
      </Wrapper>
    </>
  );
};
export default Data;
