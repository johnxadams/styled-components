//hooks
// import { useState } from "react";

// libraries
// import styled from "styled-components";

//components
import MaterialUi from "./components/MaterialUi/MaterialUi";
import BasicStyling from "./components/BasicStyling/BasicStyling";
import MoreComplexTitle from "./components/MoreComplexTitle/MoreComplexTitle";
import CardComponent from "./components/CardComponent/CardComponent";
import GlobalStyles from "./components/_myStyledComponents/global-styles";
import LightAndDarkTheme from "./components/LightAndDarkTheme/LightAndDarkTheme";
import Animation from "./components/Animation/Animation";
import ASprops from "./components/ASpropsMacroAndHelperCss/ASpropsMacroAndHelperCss";
import Form from "./components/Form/Form";
import Listitems from "./components/Listitems/Listitems";
import Products from "./components/Products/Products";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <GlobalStyles />
      <Products/>
      {/* <Listitems/> */}
      {/* <Form/> */}
      {/* <ASprops /> */}
      {/* <Animation/> */}
      {/* <LightAndDarkTheme/> */}
      {/* <CardComponent/> */}
      {/* <MoreComplexTitle /> */}
      {/* <BasicStyling /> */}
      {/* <MaterialUi /> */}
    </div>
  );
}

export default App;
