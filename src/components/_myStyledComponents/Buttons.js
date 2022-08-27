import { fontWeight } from "@mui/system";
import styled, { css } from "styled-components";

export const DefaultButton = styled.button`
  background: #645cff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  text-transform: capitalize;
  margin: 1rem auto;
  display: block;
  ${({ large }) =>
    large
      ? css`
          padding: 1rem;
          font-size: 1.5rem;
          font-weight: 700;
        `
      : css`
          padding: 0.5rem;
          font-size: 1rem;
          font-weight: 400;
        `};
`;

/**
 * Plottwist: The CSS-Helper only ensures,
 * that my code looks userFriendly when using TernaryOperator.
 * removing the css`` in the ternaryOP
 * will make my CSS lines look one colored. */

/**
 * instead using the props,
 * i can specify or extend other elemts like this:
 * Also by doing this, I'm extending an already existing styled-component*/
export const HipsterButton = styled(DefaultButton)`
  width: 150;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
  padding: 1rem;
  display: inline-block;
  margin-right: 1rem;

  text-decoration: none;
  text-align: center;
  font-size: 1rem;
`;

// export default DefaultButton;
