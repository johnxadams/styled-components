import React from "react";

// libraries
import styled, { css } from "styled-components";

const fruits = ["orange", "peach", "banana", "apple"];



const Item = styled.li`
  list-style-type: none;
  font-size: 1.5rem;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `;
  }}
`;



export default function Listitems() {
  return (
    <>
      <ul>
        {fruits.map((item, index) => {
          return (
            <Item key={index} odd={(index + 1) % 2 !== 0}>
              {item}
            </Item>
          );
        })}
      </ul>

      {/* <ul>
        {furniture.map((item, index) => {
          return <Furniture key={index}><span>{item.product}</span><span>{item.price}</span></Furniture>;
        })}
      </ul> */}
    </>
  );
}
