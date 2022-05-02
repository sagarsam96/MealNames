import React from "react";
import Styled from "styled-components";

const Card = Styled.div`
border-radius: 8px;
border: 2px solid red;
width: 100%;

min-height: 200px;

img{
  border-radius: 8px 8px 0 0;
}

:hover{
  box-shadow: 1px 7px 20px -3px rgba(180,167,167,0.68);
-webkit-box-shadow: 1px 7px 5px -3px rgba(180,167,167,0.68);
-moz-box-shadow: 1px 7px 5px -3px rgba(180,167,167,0.68);
transform: scale(1.02)
}
`;

const Buffer = Styled.div`
  margin-top: 40px;
  max-height: 300px;
  max-width: 300px;
  min-height: 100px;
  /* margin-bottom: 10px; */
  padding: 0.5rem;
`;

const MenuCard = ({ menu, index }) => {
  return (
    <>
      <Buffer key={index}>
        <Card>
          <div>
            <div>
              <img src={menu.strMealThumb} alt={menu.strMeal} />
            </div>

            <div>
              <h5>{menu.strMeal}</h5>
            </div>
          </div>
        </Card>
      </Buffer>
    </>
  );
};
export default MenuCard;
