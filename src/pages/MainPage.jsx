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
} from "../styles/UI";
import { primaryDesign, secondaryDesign } from "../styles/themes";

const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [design, setDesign] = useState("primary");

  const getTheme = (col) => {
    switch (col) {
      case "primary":
        return primaryDesign;
      case "secondary":
        return secondaryDesign;
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
            Result: {selectedItem?.name || "Not yet chosen"} {<br />}
            You can also change the design based on your preferences:
          </Paragraph>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <StyledBtn onClick={() => setDesign("primary")}>primary</StyledBtn>
            <StyledBtn onClick={() => setDesign("secondary")}>
              secondary
            </StyledBtn>
          </div>
        </MainPageSection>
      </MainPageWrapper>
    </ThemeProvider>
  );
};

export default MainPage;
