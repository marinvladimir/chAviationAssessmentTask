import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DropDown from "../DropDown";
import { GlobalContextProvider } from "../../Context";
import { Item } from "../../data/data";

describe("dropdown component tests", () => {
  test("renders the DropDown component", () => {
    render(<DropDown options={Item} />);
  });

  test("expects the select button in the component", () => {
    const { getByTestId } = render(<DropDown options={Item} />);
    const btn = getByTestId("button");
    expect(btn).toBeInTheDocument();
  });

  test("expects the dropdown to show in the component after button click and to hide after selecting the choice", async () => {
    const baseDom = render(
      <GlobalContextProvider>
        <DropDown options={Item} />
      </GlobalContextProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();

    fireEvent.click(await baseDom.queryAllByTestId("dropdown_option")[0]);
    expect(baseDom.queryAllByTestId("dropdown_option")).toHaveLength(0);
  });

  test("expects the dropdown to show in the component after button click and to hide after selecting the choice", async () => {
    const baseDom = render(
      <GlobalContextProvider>
        <DropDown options={Item} />
      </GlobalContextProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();

    fireEvent.click(await baseDom.queryAllByTestId("dropdown_option")[0]);
    expect(baseDom.queryAllByTestId("dropdown_option")).toHaveLength(0);
  });

  test("expects the dropdown to close after keydown ESCAPE", async () => {
    const baseDom = render(
      <GlobalContextProvider>
        <DropDown options={Item} />
      </GlobalContextProvider>
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
    const baseDom = render(<DropDown options={Item} />);
    expect(screen.getByText("Filter title")).toBeInTheDocument();
  });

  test("expects the selected item to change when clicking on a certain item element to that item's content", async () => {
    const baseDom = render(
      <GlobalContextProvider>
        <DropDown options={Item} />
      </GlobalContextProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();

    fireEvent.click(await baseDom.queryAllByTestId("dropdown_option")[0]);
    expect(baseDom.findByTestId("select_text")).toBeTruthy();
    expect(screen.queryAllByText("Filter title")).toHaveLength(0);
    expect(screen.queryAllByText(Item[0].name)).toHaveLength(1);
  });
});