import React from "react";

// libraries
import styled, { css } from "styled-components/macro";

/**
 * Option 1: 
 * attribute of type:'button' will to added
 * to every <Button> click me </Button>
 * 
 * const Button = styled.button.attrs({
    type:'button',
})`

 * Option 2: better Option, using the || logical or ||
 * If a <Button> component already has a "given attribute",
 * for example: type='submit' inside of a <form>
 * then go with the "given attribute", or ||
 * stick with the default one 'button'
 * 
 * const Button = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`

 * Result: 
 * We succefully set a dynamic default attribute
 * to out HTML elements

 */

const Button = styled.button.attrs((props) => {
  return { type: props.type || "button" };
})`
  background: var(--primary);
  border: none;
  color: white;
  padding: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  /** props.type being detructured ({type})
  * if type is === submit, then apply this css properties
  * also, I'm using the imported { css } Helper down here. */
  ${({ type }) => {
    return (
      type === "submit" &&
      css`
        display: block;
        width: 100%;
        margin-top: 1rem;
        border-radius: 0.25rem;
      `
    );
  }}
`;
/** A dynamic Default values 
 * for the input attributes:
 * type and placeholder
 */
const BasicInput = styled.input.attrs((props) => {
  return {
    type: props.type || "text",
    placeholder: props.placeholder || "please enter a value",
  };
})`
  box-sizing: border-box;
  padding: 0.5rem;
  border: 2px solid #f2f4f8;
  border-radius: 0.25rem;
  margin-top: 1rem;
`;

export default function Form() {
  return (
    <div>
      <h3>
        - Setting dynamic default attributes for the HTML elements. <br />
        - Applying diffrent styles attribute type='submit' <br />- Setting dynamic
        default input attributes for type=' ' and placeholder=' '
      </h3>
      {/* adding attribute type='button' is necesary,
      whenever I use component.styled.button e.g. */}
      <Button>click me</Button>
      <form
        // this css I'm using here works
        // because of imported endPoint of /macro
        css={`
          width: 300px;
          background: #fff;
          padding: 2rem;
          margin-top: 1rem;
        `}
      >
        <h2>Form</h2>
        <BasicInput />
        <Button type="submit">submit here</Button>
      </form>
    </div>
  );
}
