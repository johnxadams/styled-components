import React from "react";
import styled from "styled-components";
import ComplexTitle from "../_myStyledComponents/ComplexTitle";
import RandomUnderline from "../_myStyledComponents/RandomUnderline";
import AlternativeTitle from "../_myStyledComponents/AlternativeTitle"


export default function MoreComplexTitle() {
  return (
    <div>
      <ComplexTitle title="more complex title" />
      <RandomUnderline title="keeping classNames simple" />
      <h2> More Complex Title</h2>

      {/* It crazy how this line below works */}
      <AlternativeTitle title="alternative title"/>
    </div>
  );
}
