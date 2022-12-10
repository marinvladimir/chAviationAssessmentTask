import React, { useContext } from "react";
import DropDown from "../components/DropDown";
import { GlobalContext } from "../Context";
import { Item } from "../data/data";
import {
  MainPageSection,
  MainPageWrapper,
  Spacer,
  Separator,
  Paragraph,
} from "../styles/UI";

const MainPage = () => {
  const { selectedItem } = useContext(GlobalContext);
  return (
    <MainPageWrapper>
      <DropDown options={Item} />
      <Spacer />
      <MainPageSection data-testid="main_section">
        <Paragraph>DROPDOWN COMPONENT TASK</Paragraph>
        <Paragraph>Above is the dropdown component</Paragraph>
        <Paragraph>This is a basic example of its' functionality.</Paragraph>
        <Separator />
        <Paragraph>Below is the choice shown as the result:</Paragraph>
        <Paragraph> {selectedItem}</Paragraph>
      </MainPageSection>
    </MainPageWrapper>
  );
};

export default MainPage;
