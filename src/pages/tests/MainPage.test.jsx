import React from "react";
import { fireEvent, render } from "@testing-library/react";
import MainPage from "../MainPage";
import { GlobalContextProvider } from "../../Context";

describe("main page tests", () => {
  test("renders the MainPage", () => {
    render(<MainPage />);
  });

  test("expects the dropdown to show in the component after button click and to hide after clicking on main page section (aynwhere on the screen)", async () => {
    const baseDom = render(
      <GlobalContextProvider>
        <MainPage />
      </GlobalContextProvider>
    );
    fireEvent.click(await baseDom.findByTestId("button"));
    expect(baseDom.queryAllByTestId("dropdown_option")[0]).toBeTruthy();

    fireEvent.click(await baseDom.findByTestId("main_section"));
    expect(baseDom.queryAllByTestId("dropdown_option")).toHaveLength(0);
  });
});
