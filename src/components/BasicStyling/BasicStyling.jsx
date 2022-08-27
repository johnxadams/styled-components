import React from "react";
import styled from "styled-components";
import BasicTitle from "../myStyledComponents/BasicTitle";
import { DefaultButton, HipsterButton } from "../myStyledComponents/Buttons";

export default function BasicStyling() {
  return (
    <div>
      <BasicTitle special>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
    </div>
  );
}
