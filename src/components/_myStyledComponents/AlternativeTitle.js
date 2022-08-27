import styled from "styled-components";
import { colors, setupBorder } from "../../utils";

// rafce an arrow functional component

const ComplexTitle = ({ title, className }) => {
  /**
   * console.log props show an object containing:
   * 1. className:
   * 2. title: "more complex title"
   * so technically I can destrcuture not only
   * {title}, but as {className}
   * to get the className of the props
   */
  // console.log("myprops: ",props);

  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
      <div className="box"></div>
    </div>
  );
};

const Wrapper = styled(ComplexTitle)`
  //targeting the h1 in the <Wrapper>
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  div {
    width: 5rem;
    height: 0.25rem;
    background: ${colors.primary};
    margin: 0 auto;
  }
  .box {
      height: 10px;
      /**  in the border:
      - setupBorder() has been declared in utils.js
      - parameter were passed in an object
      - so I don't need to follow the order
      */
      border: ${setupBorder({width: 5, color:'red', type: 'dotted'})};
      width: 20rem;
  }
`;

export default Wrapper;
