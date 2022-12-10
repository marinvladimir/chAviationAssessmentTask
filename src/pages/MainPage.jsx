import React, { useState } from "react";
import DropDown from "../components/DropDown";
import { Item } from "../data/data";
import {
  MainPageSection,
  MainPageWrapper,
  Spacer,
  Separator,
  Paragraph,
} from "../styles/UI";

const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <MainPageWrapper>
      <DropDown
        options={Item}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <Spacer />
      <MainPageSection aria-label="Main" data-testid="main_section">
        <Paragraph>DROPDOWN COMPONENT TASK</Paragraph>
        <Paragraph>Above is the dropdown component</Paragraph>
        <Paragraph>This is a basic example of its' functionality.</Paragraph>
        <Separator />
        <Paragraph>Below is the choice shown as the result:</Paragraph>
        <Paragraph> {selectedItem?.name}</Paragraph>
      </MainPageSection>
    </MainPageWrapper>
  );
};

export default MainPage;
