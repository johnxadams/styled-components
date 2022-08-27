import React from "react";
import styled from "styled-components";
import yogaPose from "../../assets/yogaPose.jpg";

function Card() {
  return (
    <StyledCard>
      <img src={yogaPose} alt="yogaPose" />
      <footer>
        <h4>product name</h4>
        <p>$30</p>
      </footer>
    </StyledCard>
  );
}

const StyledCard = styled.article`
  width: 90vw;
  max-width: 300px;
  background: var(--white);
  border-radius: 0.25rem;
  img {
    width: 100%;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    /* nesting allowed*/
    h4 {
      text-transform: capitalize;
      &::before{
        content: 'Name: ';
        color: red;
      }
    }
    /* h4:hover {
      color: green;
    } */
    p {
      color: var(--primary);
      font-weight: 700;

    }
    /* &:hover{
      background: red;
    } */
  }
  transition: all 0.5s ease-in-out;
  &:hover {
    box-shadow: 0 3px 3px #222;
    cursor: pointer;
  }
/* Media Query */
  @media(min-width: 768px){
    max-width: 600px;
  }
`;

export default Card;
