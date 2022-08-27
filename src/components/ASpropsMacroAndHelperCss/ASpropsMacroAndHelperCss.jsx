import React from "react";

import styled from "styled-components/macro";
import { HipsterButton } from "../_myStyledComponents/Buttons";
import { DefaultButton } from "../_myStyledComponents/Buttons";

/**
 * The HipsterButton is treated as='a'
 * an anchorTag. Its turn into a link.
 *
 * !warning: anchorTags comes with css defaultSetting
 * You can overwrite the defaultSettings in the styledComponent
 *
 * Macro Option:
 * using the macro opion with:
 * adding endPoint /macro to it like:
 * import styled from "styled-components/macro"
 *
 * With Marco-Option you can inline-style your component,
 * adding specific values to it like:
 * css={"color: purple"}
 */

export default function ASpropsMacroAndHelperCss() {
  return (
    <div>
      <HipsterButton>click me</HipsterButton>
      <HipsterButton
        css={"color: purple"}
        as="a"
        href="https://github.com/johnxadams"
      >
        click me
      </HipsterButton>
      <HipsterButton>click me</HipsterButton>

      <div css={"color: green"}>
        <h2>
          Hello John: <br />
          I'm using ASprops, Macro-Option, and Helper CSS
        </h2>
      </div>

      {/* cssHelper: 
      using tenraryOperator in the styled-component. 
      apply styling:
      if (component has props = {large})  
      The name {large} is randomly chosen.
      
      inside Button.js component:
      import {css} from "styled-components".

      
      */}
      <DefaultButton>click me</DefaultButton>
      <DefaultButton>click me</DefaultButton>
      <DefaultButton large>click me</DefaultButton>
    </div>
  );
}
