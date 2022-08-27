import React from 'react'
import styled from "styled-components";
import { Button } from "@mui/material";
import { StyledEngineProvider } from "@mui/material";



const StyledBtn = styled(Button)`
  text-transform: capitalize;
`;

export default function MaterialUi() {
  return (
    <div>  <StyledEngineProvider injectFirst>
    {/* If I want to overwrite an Material UI Button, I
    1. to import styledEngineProvider
    2. wrap the styledBtn with it
    3. there should be no native Button component in the return: rfc  */}
    <StyledBtn color="primary" variant="contained">
      click me
    </StyledBtn>
  </StyledEngineProvider>
  {/* <Button color="primary" variant="contained">
    click me
  </Button> */}
</div>
  )
}
