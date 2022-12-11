import React, { useState } from "react";
import DropDown from "../components/DropDown";
import { Item } from "../data/data";
import { ThemeProvider } from "styled-components";
import {
  MainPageSection,
  MainPageWrapper,
  Spacer,
  Separator,
  Paragraph,
  Heading,
  StyledBtn,
  ButtonWrapper,
} from "../styles/UI";
import {
  primaryDesign,
  quaternaryDesign,
  secondaryDesign,
  tertiaryDesign,
} from "../styles/themes";

const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [design, setDesign] = useState("primary");

  const getTheme = (col) => {
    switch (col) {
      case "primary":
        return primaryDesign;
      case "secondary":
        return secondaryDesign;
      case "tertiary":
        return tertiaryDesign;
      case "quaternary":
        return quaternaryDesign;
      default:
        return primaryDesign;
    }
  };

  return (
    <ThemeProvider theme={getTheme(design)}>
      <MainPageWrapper>
        <DropDown
          options={Item}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Spacer />
        <MainPageSection aria-label="Main" data-testid="main_section">
          <Heading>DROPDOWN COMPONENT TASK</Heading>
          <Paragraph>
            Above is the dropdown component {<br />}
            This is a basic example of its' functionality.
          </Paragraph>
          <Separator />
          <Paragraph>
            Result: <b>{selectedItem?.name || "Not yet chosen"}</b> {<br />}
            You can also change the design based on your preferences:
          </Paragraph>
          <ButtonWrapper>
            <StyledBtn onClick={() => setDesign("primary")}>primary</StyledBtn>
            <StyledBtn onClick={() => setDesign("secondary")}>
              secondary
            </StyledBtn>
            <StyledBtn onClick={() => setDesign("tertiary")}>
              tertiary
            </StyledBtn>
            <StyledBtn onClick={() => setDesign("quaternary")}>
              quaternary
            </StyledBtn>
          </ButtonWrapper>
        </MainPageSection>
      </MainPageWrapper>
    </ThemeProvider>
  );
};

export default MainPage;
