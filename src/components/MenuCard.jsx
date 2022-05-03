import React, {useState} from "react";
import Styled from "styled-components";
import Youtube from '../assets/youtube.png'
import {Buffer, Card} from './Styled'
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
