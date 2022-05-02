import React, { useEffect, useState } from "react";
import MenuCard from "./MenuCard";
import Styled from "styled-components";

const Wrapper = Styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
margin: 5px;
@media only screen and (max-width: 850px) {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}
@media only screen and (max-width: 400px) {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
`;
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
