import styled from "styled-components";

const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  /* color: ${(props) => props.special && "red"} */
  
  // using logical&&
  /* color: ${({ special }) => special && "red"} */

  // using ternary operator
  color: ${({ special }) => (special ? "red" : "blue")};
`;

export default BasicTitle;
