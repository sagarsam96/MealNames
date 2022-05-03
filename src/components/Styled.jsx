import Styled from 'styled-components'
export const Wrapper = Styled.div`
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

export const Card = Styled.div`
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

export const Buffer = Styled.div`
  margin-top: 6em;
  max-height: 300px;
  max-width: 300px;
  min-height: 100px;
  /* margin-bottom: 10px; */
  padding: 0.5rem;
`;



export const HeadBar = Styled.div`
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

export const InputArena = Styled.div`
 padding: 1rem;
  /* just in case */
`;
