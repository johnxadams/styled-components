import React, { useState } from "react";

import styled, {ThemeProvider} from "styled-components";

// components
import {
  BaseTheme,
  DarkTheme,
  SwitchLightAndDark,
} from "../_myStyledComponents/BaseTheme";


export default function LightAndDarkTheme() {
  const [baseTheme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!baseTheme);
  };

  return (
    <ThemeProvider theme={baseTheme === true ? BaseTheme : DarkTheme}>
      <SwitchLightAndDark>
        Hello John
        <button className="btn" onClick={toggleTheme}>
          toggle me
        </button>
      </SwitchLightAndDark>
    </ThemeProvider>
  );
}
