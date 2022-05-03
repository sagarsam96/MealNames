import React, {useState} from "react";
import Styled from "styled-components";
import Youtube from '../assets/youtube.png'
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
  margin-top: 6em;
  max-height: 300px;
  max-width: 300px;
  min-height: 100px;
  /* margin-bottom: 10px; */
  padding: 0.5rem;
`;

const MenuCard = ({ menu, index }) => {
  const[flag, setFlag]= useState(true);

  const toggle=()=>{
    setFlag(!flag)
  }
  return (
    <>
      <Buffer key={index}>
        <Card>
          <div>
            <div>
              <img src={menu.strMealThumb} alt={menu.strMeal} />
            </div>

            <div onClick={toggle} id="content">
              {flag&&<h5>{menu.strMeal}</h5>}
              {!flag&&
              <>
                <a href={menu.strYoutube} target="_blank" rel="noreferrer" >
                <img id="yt" src={Youtube} alt="youtube icon"/>
                </a>
                <h5>{menu.strArea}</h5>
              </>}
            </div>

          </div>
        </Card>
      </Buffer>
    </>
  );
};
export default MenuCard;
