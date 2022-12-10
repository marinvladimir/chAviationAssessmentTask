import React, { useState, useRef, useEffect, useContext } from "react";
import { GlobalContext } from "../Context";
import {
  DropDownContainer,
  DropDownOptions,
  DropDownOption,
  DropDownOptionsWrapper,
  DropDownSelectButton,
  DropDownIconContainer,
  DropDownCheckBox,
  DropDownCheckBoxLabel,
} from "../styles/UI";

const DropDown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedItem, setSelectedItem } = useContext(GlobalContext);

  const dropdownRef = useRef();
  const dropdownContentRef = useRef();

  const handleKeyClose = (e) => {
    if (e.key === "Escape" || e.keyCode === 27) {
      setIsOpen(false);
    }
  };

  const handleSelectButtonClick = (e) => {
    // in case selected item exists and you click on the icon, keep the container window closed.
    if (e.target.id === "icon_container" && selectedItem) setIsOpen(false);
    else setIsOpen(!isOpen);
  };

  useEffect(() => {
    // a click outside of function is also treated as a trigger to close the container window.
    const handleOutsideClick = (e) => {
      if (
        !dropdownRef?.current?.contains(e.target) &&
        !dropdownContentRef?.current?.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyClose);
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("keydown", handleKeyClose);
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <DropDownContainer
        ref={dropdownRef}
        style={!isOpen ? { background: "white" } : { background: "#f0f0f0" }}
      >
        <DropDownSelectButton
          id="select_btn"
          data-testid="button"
          isOpen={isOpen || selectedItem}
          onClick={(e) => handleSelectButtonClick(e)}
        >
          <p data-testid="select_text">{selectedItem || "Filter title"}</p>
          {/* in this case, rotate is only used to transform "+" to "x" in case selected item is not null */}
          <DropDownIconContainer
            rotate={selectedItem !== null && !isOpen ? 1 : 0}
            id="icon_container"
            onClick={() => {
              if (selectedItem !== null && !isOpen) {
                setSelectedItem(null);
              }
            }}
            style={
              !isOpen ? { background: "#ffebeb" } : { background: "white" }
            }
          >
            {!isOpen ? "+" : "-"}
          </DropDownIconContainer>
        </DropDownSelectButton>
        <DropDownOptionsWrapper
          isOpen={isOpen}
          data-testid="dropdown_options_wrapper"
          ref={dropdownContentRef}
        >
          {isOpen && (
            <DropDownOptions>
              {options?.map((item, key) => (
                <DropDownOption
                  key={key}
                  data-testid="dropdown_option"
                  checked={selectedItem === item?.name}
                  onClick={() => {
                    setSelectedItem(item?.name);
                    setIsOpen(!isOpen);
                  }}
                >
                  <DropDownCheckBox checked={selectedItem === item?.name}>
                    {selectedItem === item?.name ? "✓" : ""}
                  </DropDownCheckBox>
                  <DropDownCheckBoxLabel checked={selectedItem === item?.name}>
                    {item?.name}
                  </DropDownCheckBoxLabel>
                </DropDownOption>
              ))}
            </DropDownOptions>
          )}
        </DropDownOptionsWrapper>
      </DropDownContainer>
    </>
  );
};

export default DropDown;
