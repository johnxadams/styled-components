import styled, { css } from "styled-components";

//functional Component uses Wrapper

/** The parameter in this function are destructured props
 * Those props reflect the object properties of
 * const products = []
 * 1st: It was mapped through
 * 2nd: It was spreaded {...product}
 */

function Product({ product, price }) {
  return (
    <Wrapper price={price}>
      <h4>{product}</h4>
      <p>${price}</p>
    </Wrapper>
  );
}
const Wrapper = styled.article`
  width: 300px;
  background: #fff;
  padding: 1rem;
  border-radius: 0.25rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  h4 {
    text-transform: capitalize;
  }
  p {
    color: ${({ price }) => {
      if (price < 100) return "green";
      if (price > 500) return "red";
      return "#222";
    }};
  }
`;
export default Product;
