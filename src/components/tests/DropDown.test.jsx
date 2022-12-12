import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "../DropDown";
import { Item } from "../../data/data";
import { ThemeProvider } from "styled-components";
import {
  primaryDesign,
  quaternaryDesign,
  secondaryDesign,
  tertiaryDesign,
} from "../../styles/themes";
import { act } from "react-dom/test-utils";

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

const setSelectedItem = jest.fn();

afterEach(() => {
  setSelectedItem.mockClear();
});

describe("dropdown component tests", () => {
  test("renders the DropDown component", () => {
    render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown options={Item} />
      </ThemeProvider>
    );
  });

  test("expects the select button in the component", () => {
    const { getByTestId } = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown options={Item} />
      </ThemeProvider>
    );
    const btn = getByTestId("button");
    expect(btn).toBeInTheDocument();
  });

  test("expects the dropdown to show in the component after button click ", async () => {
    const baseDom = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown
          options={Item}
          selectedItem={"null"}
          setSelectedItem={() => {}}
        />
      </ThemeProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();
  });

  test("expects the dropdown to close after keydown ESCAPE", async () => {
    const baseDom = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown
          options={Item}
          selectedItem={"null"}
          setSelectedItem={() => {}}
        />
      </ThemeProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();

    const dropDownOption = baseDom.queryAllByTestId("dropdown_option")[0];

    fireEvent.keyDown(dropDownOption, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27,
    });

    expect(baseDom.queryAllByTestId("dropdown_option")).toHaveLength(0);
  });

  test("expects the selected item to have default text on render", () => {
    const baseDom = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown
          options={Item}
          selectedItem={"null"}
          setSelectedItem={() => {}}
        />
      </ThemeProvider>
    );
    expect(screen.getByText("Filter title")).toBeInTheDocument();
  });

  test("expects the selected item to show in the DOM when it exists", async () => {
    const baseDom = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown
          options={Item}
          selectedItem={Item[0]}
          setSelectedItem={setSelectedItem}
        />
      </ThemeProvider>
    );
    expect(baseDom.findByTestId("select_text")).toBeTruthy();
    expect(screen.queryAllByText("Filter title")).toHaveLength(0);
    expect(screen.queryAllByText(Item[0].name)).toHaveLength(1);
  });

  test("expects the dropdown not to close on list element click", async () => {
    const baseDom = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown
          options={Item}
          selectedItem={null}
          setSelectedItem={setSelectedItem}
        />
      </ThemeProvider>
    );
    const btn = await baseDom.findByTestId("button");
    act(() => {
      userEvent.click(btn);
    });
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();

    const itemFromList = await baseDom.queryAllByTestId("dropdown_option")[0];
    act(() => {
      userEvent.click(itemFromList);
    });

    expect(setSelectedItem).toHaveBeenCalledTimes(1);

    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();
  });

  test("expects the dropdown to close on doubleclick", async () => {
    const baseDom = render(
      <ThemeProvider theme={getTheme("primary")}>
        <DropDown
          options={Item}
          selectedItem={"null"}
          setSelectedItem={() => {}}
        />
      </ThemeProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")).toHaveLength(0);
  });
});
